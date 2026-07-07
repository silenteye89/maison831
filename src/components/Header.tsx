"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Web & App", href: "#web" },
  { label: "Space", href: "#space" },
  { label: "Class", href: "#class" },
  { label: "Vintage", href: "#vintage" },
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

    // Focus close button on open
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
      {/* Desktop Sidebar */}
      <nav
        className="hidden lg:flex fixed left-0 top-0 h-screen w-[220px] bg-dark-brown flex-col justify-between z-50 py-10 px-8"
        aria-label="Desktop navigation"
      >
        <div>
          <Link href="/" className="block mb-1">
            <span className="font-serif text-2xl tracking-[0.15em] text-warm-white">
              MAISON
            </span>
            <br />
            <span className="font-serif text-4xl tracking-[0.15em] text-warm-white font-light">
              831
            </span>
          </Link>
          <p className="text-[10px] tracking-[0.25em] text-stone mt-3 uppercase">
            Tech meets Aesthetic
          </p>
        </div>

        <ul className="space-y-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-2 text-[13px] tracking-[0.08em] transition-colors duration-300 ${
                    isActive
                      ? "text-brass font-medium"
                      : "text-stone hover:text-warm-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="text-[10px] text-stone/60 tracking-wider">
          &copy; 2026 Maison 831
        </div>
      </nav>

      {/* Mobile Header Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-dark-brown/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-serif text-lg tracking-[0.15em] text-warm-white">
              MAISON 831
            </span>
          </Link>
          <button
            ref={triggerButtonRef}
            onClick={() => setMobileOpen(true)}
            className="text-warm-white p-2 -mr-2 rounded-sm transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass"
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
                    &copy; 2026 Maison 831
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
