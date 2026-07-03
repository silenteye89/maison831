"use client";

import { FadeIn } from "./AnimationProvider";

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-ivory/70 pt-24 md:pt-32 pb-10 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20 md:mb-28">
          {/* Brand */}
          <div className="md:col-span-4">
            <FadeIn>
              <h3 className="font-serif text-3xl md:text-4xl text-ivory tracking-[0.1em] mb-6">
                MAISON 831
              </h3>
              <p className="text-xs leading-[2] text-ivory/40 font-light max-w-xs">
                Curated Lifestyle & Creative Studio.
                <br />
                Where Coffee, Vintage & Creativity Meet.
              </p>
            </FadeIn>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <FadeIn delay={0.1}>
              <p className="text-[10px] tracking-[0.3em] uppercase text-ivory/30 mb-6">
                Explore
              </p>
              <ul className="space-y-3">
                {[
                  "Story",
                  "Experience",
                  "Space",
                  "Vintage",
                  "Events",
                  "Studio",
                  "Journal",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-xs text-ivory/50 hover:text-brass transition-colors duration-500 font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <FadeIn delay={0.2}>
              <p className="text-[10px] tracking-[0.3em] uppercase text-ivory/30 mb-6">
                Contact
              </p>
              <div className="space-y-3 text-xs font-light">
                <p className="text-ivory/50">
                  경기 성남시 수정구 고등로 3
                  <br />
                  현대지식산업센터성남고등 831호
                </p>
                <p className="text-ivory/50 mt-4">
                  hello@maison831.com
                </p>
                <p className="text-ivory/50">
                  Instagram @maison831
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <FadeIn delay={0.3}>
              <p className="text-[10px] tracking-[0.3em] uppercase text-ivory/30 mb-6">
                Newsletter
              </p>
              <p className="text-xs text-ivory/40 font-light mb-6 leading-relaxed">
                Maison 831의 새로운 소식과 이벤트를
                <br />
                가장 먼저 만나보세요.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border border-ivory/15 text-ivory text-xs px-4 py-3 w-full focus:outline-none focus:border-brass/50 transition-colors duration-500 placeholder:text-ivory/25"
                />
                <button className="bg-ivory/10 text-ivory px-4 border border-ivory/15 border-l-0 hover:bg-brass hover:border-brass transition-colors duration-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Social Links */}
        <FadeIn delay={0.3}>
          <div className="flex items-center gap-8 mb-16">
            {[
              { label: "Instagram", href: "#" },
              { label: "YouTube", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-[10px] tracking-[0.2em] uppercase text-ivory/30 hover:text-brass transition-colors duration-500"
              >
                {social.label}
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Bottom */}
        <div className="border-t border-ivory/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-ivory/20 tracking-wider">
            &copy; 2026 MAISON 831. All rights reserved.
          </p>
          <p className="text-[10px] text-ivory/20 tracking-wider">
            Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
