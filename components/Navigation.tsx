"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaMusic } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Music", path: "/music" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-amber-600/20">
      <div className="w-full">
        <div className="flex items-center justify-between h-16" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <FaMusic className="text-amber-500 text-2xl group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-amber-500 text-xl font-bold" style={{ fontFamily: 'Thwack, cursive' }}>
                  Brandon Sun
                </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  <span
                    className={`${
                      isActive
                        ? "text-amber-400"
                        : "text-slate-300 hover:text-amber-300"
                    }`}
                  >
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-amber-500 p-2 hover:text-amber-400 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}