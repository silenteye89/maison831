"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Development", href: "/#development" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Space", href: "/#space" },
  { label: "Workshop", href: "/#workshop" },
  { label: "Vintage", href: "/#vintage" },
  { label: "Founders", href: "/founders" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navTextColor = isHome
    ? isScrolled ? "text-dark-brown/70" : "text-white/80"
    : "text-dark-brown/70";

  const logoColor = isHome
    ? isScrolled ? "text-dark-brown" : "text-white"
    : "text-dark-brown";

  const logoBorder = isHome
    ? isScrolled ? "border-dark-brown/30" : "border-white/40"
    : "border-dark-brown/30";

  const navBg = isHome
    ? isScrolled
      ? "bg-warm-white/92 backdrop-blur-md shadow-[0_1px_0_rgba(196,181,158,0.15)]"
      : "bg-transparent"
    : "bg-warm-white/92 backdrop-blur-md shadow-[0_1px_0_rgba(196,181,158,0.15)]";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: isHome ? 1.5 : 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${navBg}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <a
            href="/"
            className={`flex items-center gap-3 transition-colors duration-500 ${logoColor}`}
          >
            <span className={`w-9 h-9 flex items-center justify-center border font-serif text-lg font-light tracking-wide transition-colors duration-500 ${logoBorder}`}>
              M
            </span>
            <span className="font-serif text-sm tracking-[0.25em] hidden sm:inline">
              MAISON 831
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[10px] tracking-[0.15em] uppercase transition-colors duration-500 hover:text-brass ${navTextColor}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className={`w-6 h-[1px] block transition-colors duration-500 ${
                isMobileMenuOpen ? "bg-dark-brown" : isHome && !isScrolled ? "bg-white" : "bg-dark-brown"
              }`}
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-6 h-[1px] block transition-colors duration-500 ${
                isMobileMenuOpen ? "bg-dark-brown" : isHome && !isScrolled ? "bg-white" : "bg-dark-brown"
              }`}
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className={`w-6 h-[1px] block transition-colors duration-500 ${
                isMobileMenuOpen ? "bg-dark-brown" : isHome && !isScrolled ? "bg-white" : "bg-dark-brown"
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-warm-white flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="font-serif text-3xl text-dark-brown tracking-[0.1em] hover:text-brass transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone">
                010-8687-2129
              </p>
              <p className="text-[10px] tracking-[0.15em] text-stone/60 mt-2">
                @maison831.kr
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
