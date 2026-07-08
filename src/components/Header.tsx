"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Web & App", href: "#web" },
  { label: "Class", href: "#class" },
  { label: "Vintage", href: "#vintage" },
  { label: "Team", href: "#team" },
  { label: "Visit", href: "#showroom" },
  { label: "Contact", href: "#contact" },
];

const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: easeOut } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: easeOut } },
};

const panelVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.35, ease: easeOutExpo },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.15 + i * 0.05,
      duration: 0.4,
      ease: easeOut,
    },
  }),
  exit: {
    opacity: 0,
    x: -8,
    transition: { duration: 0.15 },
  },
};

const taglineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 },
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  const handleObserver = useCallback(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = handleObserver();
    return cleanup;
  }, [handleObserver]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [mobileOpen]);

  // ESC key & focus trap
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        triggerButtonRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    triggerButtonRef.current?.focus();
  }, []);

  return (
    <>
      {/* Top Navigation Bar — all breakpoints */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-brown/95 backdrop-blur-md shadow-[0_1px_0_rgba(196,181,158,0.1)]"
            : "bg-gradient-to-b from-matte-black/60 to-transparent"
        }`}
      >
        <div
          className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-[64px] md:h-[72px]"
          style={!scrolled ? { textShadow: "0 1px 8px rgba(0,0,0,0.5), 0 0 2px rgba(0,0,0,0.3)" } : { textShadow: "none" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5 group">
            <span
              className={`font-serif text-[18px] md:text-[20px] tracking-[0.18em] transition-colors duration-500 ${
                scrolled ? "text-warm-white" : "text-warm-white"
              }`}
            >
              MAISON
            </span>
            <span
              className={`font-serif text-[22px] md:text-[24px] tracking-[0.12em] font-light transition-colors duration-500 ${
                scrolled ? "text-warm-white" : "text-warm-white"
              }`}
            >
              831
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-[12px] tracking-[0.1em] uppercase transition-all duration-300 py-1 ${
                    isActive
                      ? "text-brass font-medium"
                      : scrolled
                        ? "text-stone/80 hover:text-warm-white"
                        : "text-warm-white/70 hover:text-warm-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={`absolute -bottom-1 left-0 right-0 h-[1.5px] ${
                        scrolled ? "bg-brass" : "bg-brass"
                      }`}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            ref={triggerButtonRef}
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 -mr-2 rounded-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass ${
              scrolled
                ? "text-warm-white hover:text-brass"
                : "text-warm-white hover:text-brass"
            }`}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden fixed inset-0 z-[998] bg-matte-black/70 backdrop-blur-[6px]"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.nav
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden fixed left-0 top-0 bottom-0 z-[999]
                w-[82%] sm:w-[68%] md:w-[420px]
                bg-dark-brown
                flex flex-col
                pb-[env(safe-area-inset-bottom)]"
              style={{ maxWidth: "420px" }}
            >
              {/* Top Section: Logo + Close */}
              <div className="flex items-start justify-between pt-10 sm:pt-12 px-8 sm:px-10">
                <Link
                  href="/"
                  className="block group"
                  onClick={closeMobileMenu}
                >
                  <span className="font-serif text-[22px] tracking-[0.18em] text-warm-white transition-opacity duration-300 group-hover:opacity-80">
                    MAISON
                  </span>
                  <br />
                  <span className="font-serif text-[38px] leading-[1] tracking-[0.15em] text-warm-white font-light transition-opacity duration-300 group-hover:opacity-80">
                    831
                  </span>
                </Link>

                <button
                  ref={closeButtonRef}
                  onClick={closeMobileMenu}
                  className="mt-1 p-2.5 -mr-2.5 text-stone hover:text-warm-white transition-colors duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 4L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Tagline */}
              <motion.p
                variants={taglineVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-[10px] tracking-[0.3em] text-stone/70 mt-3 px-8 sm:px-10 uppercase"
              >
                Tech meets Aesthetic
              </motion.p>

              {/* Navigation Links */}
              <ul className="mt-12 sm:mt-14 px-8 sm:px-10 flex-1" role="list">
                {navLinks.map((link, i) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.li
                      key={link.href}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <a
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={`
                          group relative block
                          py-[14px]
                          font-serif
                          transition-all duration-300
                          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-dark-brown
                          rounded-sm
                          ${
                            isActive
                              ? "text-brass text-[20px] sm:text-[22px] tracking-[0.06em] font-medium"
                              : "text-stone/80 text-[18px] sm:text-[20px] tracking-[0.04em] font-light hover:text-warm-white hover:tracking-[0.06em] hover:translate-x-1"
                          }
                        `}
                      >
                        {isActive && (
                          <span className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-[3px] h-[18px] bg-brass/60 rounded-full" />
                        )}
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Footer */}
              <motion.div
                variants={footerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="px-8 sm:px-10 pb-8 sm:pb-10"
              >
                <div className="border-t border-stone/15 pt-6">
                  <p className="text-[10px] text-stone/40 tracking-[0.2em] uppercase">
                    &copy; 2026 Maison831
                  </p>
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
