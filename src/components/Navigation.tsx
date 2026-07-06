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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const solid = !isHome || scrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: isHome ? 1.2 : 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid ? "bg-warm-white/95 backdrop-blur-lg border-b border-stone/8" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1080px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <a href="/" className={`flex items-center gap-2.5 transition-colors duration-400 ${solid ? "text-dark-brown" : "text-white"}`}>
            <span className={`w-8 h-8 flex items-center justify-center border font-serif text-[15px] tracking-wide transition-colors duration-400 ${solid ? "border-dark-brown/20" : "border-white/35"}`}>
              M
            </span>
            <span className="font-serif text-[13px] tracking-[0.2em] hidden sm:inline">MAISON 831</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 hover:text-brass ${solid ? "text-dark-brown/55" : "text-white/70"}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-7 h-7 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Menu"
          >
            {[0, 1, 2].map((n) => (
              <motion.span
                key={n}
                animate={
                  menuOpen
                    ? n === 0 ? { rotate: 45, y: 6 } : n === 1 ? { opacity: 0 } : { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                className={`w-5 h-[1px] block ${menuOpen || solid ? "bg-dark-brown" : "bg-white"}`}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-warm-white flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                  className="font-serif text-[26px] text-dark-brown tracking-[0.06em] hover:text-brass transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <div className="absolute bottom-10 text-center">
              <p className="text-[11px] tracking-[0.15em] uppercase text-stone">010-8687-2129</p>
              <p className="text-[11px] tracking-[0.1em] text-stone/50 mt-1.5">@maison831.kr</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
