"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaMusic } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-amber-600/20 py-6">
      <div className="w-full flex items-center justify-center px-2 sm:px-6 lg:px-8">
          <p className="text-slate-500 text-sm">
            Designed and developed by Brandon Sun
          </p>
      </div>
    </footer>
  );
}

