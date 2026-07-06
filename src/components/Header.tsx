"use client";

import { useState, useEffect, useCallback } from "react";
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

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-[220px] bg-dark-brown flex-col justify-between z-50 py-10 px-8">
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

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-dark-brown/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-serif text-lg tracking-[0.15em] text-warm-white">
              MAISON 831
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-warm-white p-1"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12H16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 17H12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-matte-black/60 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="lg:hidden fixed left-0 top-0 h-screen w-[280px] bg-dark-brown z-50 flex flex-col justify-between py-10 px-8"
            >
              <div>
                <Link
                  href="/"
                  className="block mb-6"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="font-serif text-2xl tracking-[0.15em] text-warm-white">
                    MAISON
                  </span>
                  <br />
                  <span className="font-serif text-4xl tracking-[0.15em] text-warm-white font-light">
                    831
                  </span>
                </Link>
                <p className="text-[10px] tracking-[0.25em] text-stone mb-10 uppercase">
                  Tech meets Aesthetic
                </p>
                <ul className="space-y-2">
                  {navLinks.map((link) => {
                    const sectionId = link.href.replace("#", "");
                    const isActive = activeSection === sectionId;
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block py-2 text-[14px] tracking-[0.06em] transition-colors duration-300 ${
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
              </div>
              <div className="text-[10px] text-stone/60 tracking-wider">
                &copy; 2026 Maison 831
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
