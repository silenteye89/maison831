"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isAdminAuthenticated, adminLogin, adminLogout } from "@/lib/store";

const navItems = [
  { label: "대시보드", href: "/admin", icon: "dashboard" },
  { label: "클래스 관리", href: "/admin/workshops", icon: "workshop" },
  { label: "예약 관리", href: "/admin/reservations", icon: "reservation" },
  { label: "상담 관리", href: "/admin/consultations", icon: "consultation" },
  { label: "공간 예약", href: "/admin/space", icon: "space" },
];

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(password)) {
      onLogin();
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 className="font-serif text-2xl tracking-[0.15em] text-dark-brown mb-2">
            MAISON 831
          </h1>
          <p className="text-xs text-oak tracking-[0.1em]">Admin</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            className="w-full bg-transparent border border-stone/20 text-dark-brown text-sm px-4 py-3.5 mb-4 focus:outline-none focus:border-brass/60 transition-colors placeholder:text-stone/50"
          />
          {error && (
            <p className="text-xs text-red-500 mb-4">비밀번호가 올바르지 않습니다.</p>
          )}
          <button
            type="submit"
            className="w-full bg-dark-brown text-ivory text-sm py-3.5 hover:bg-brass transition-colors duration-500"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setAuthenticated(isAdminAuthenticated());
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center">
        <p className="text-sm text-oak">Loading...</p>
      </div>
    );
  }

  if (!authenticated) {
    return <AdminLogin onLogin={() => setAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-off-white flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-matte-black text-ivory transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-ivory/8">
          <Link href="/" className="font-serif text-lg tracking-[0.15em] text-ivory">
            MAISON 831
          </Link>
          <p className="text-[10px] tracking-[0.2em] uppercase text-ivory/35 mt-1">
            Admin Panel
          </p>
        </div>

        <nav className="p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`block px-4 py-3 text-sm mb-1 transition-colors duration-300 ${
                pathname === item.href
                  ? "bg-ivory/10 text-ivory"
                  : "text-ivory/50 hover:text-ivory hover:bg-ivory/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-ivory/8">
          <button
            onClick={() => {
              adminLogout();
              setAuthenticated(false);
            }}
            className="w-full text-left px-4 py-3 text-sm text-ivory/40 hover:text-ivory transition-colors"
          >
            로그아웃
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Top Bar */}
        <header className="bg-warm-white border-b border-stone/10 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1"
          >
            <span className="w-5 h-[1px] bg-dark-brown" />
            <span className="w-5 h-[1px] bg-dark-brown" />
            <span className="w-5 h-[1px] bg-dark-brown" />
          </button>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs text-oak hover:text-brass transition-colors"
              target="_blank"
            >
              사이트 보기 →
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
