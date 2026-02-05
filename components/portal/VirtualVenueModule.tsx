"use client";

import React from "react";
import Image from "next/image";

export default function VirtualVenueModule() {
  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent uppercase tracking-wider">
          Spatial Configuration
        </h3>
        <span className="text-[10px] text-purple-400 font-mono border border-purple-500/30 px-2 py-0.5 rounded uppercase">
          Grand Ballroom: A-1
        </span>
      </div>

      <div className="relative flex-grow rounded-xl overflow-hidden border border-white/20 group">
        {/* Live Viewport Placeholder */}
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop"
          alt="Grand Ballroom"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Scanning Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 pointer-events-none" />

        {/* Scanning Line Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-1/2 w-full animate-[scan_4s_infinite_linear] pointer-events-none" />

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className="bg-black/60 backdrop-blur-md border border-green-500/50 rounded-lg px-3 py-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
            <span className="text-[10px] text-white font-bold uppercase tracking-tighter">
              Capacity Safe: 85%
            </span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4">
          <div className="bg-black/60 backdrop-blur-md border border-white/30 rounded-lg px-3 py-1.5 flex items-center gap-2">
            <svg
              className="w-3 h-3 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <span className="text-[10px] text-white font-bold uppercase tracking-tighter">
              Layout: Theater Style
            </span>
          </div>
        </div>

        {/* Spatial Analysis markers simulation */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 border border-pink-500 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      </div>

      <button className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        Launch 3D Walkthrough
      </button>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
      `}</style>
    </div>
  );
}
