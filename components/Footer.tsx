"use client";

import SpotifyWidget from "./SpotifyWidget";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-amber-600/20 py-6">
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center max-w-7xl mx-auto">
          <p className="text-amber-500 text-sm font-medium">
            Designed and developed by Brandon Sun
          </p>
          <div className="flex justify-center">
            <Image
              src="/favicon.svg"
              alt="Music Icon"
              width={28}
              height={28}
              className="opacity-80"
            />
          </div>
          <div className="flex items-center justify-end space-x-4">
            <p className="text-amber-500 text-sm font-bold">
              Currently listening to...
            </p>
            <SpotifyWidget />
          </div>
        </div>
      </div>
    </footer>
  );
}

