"use client";

import React from "react";
import Image from "next/image";

const roomTypes = [
  {
    name: "Royal Suite",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
    capacity: "4 Persons",
    count: "15 Units",
    status: "Optimal",
    features: ["Private Terrace", "Jacuzzi", "Butler Service"],
  },
  {
    name: "Heritage Deluxe",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop",
    capacity: "2 Persons",
    count: "45 Units",
    status: "High Demand",
    features: ["Garden View", "Minibar", "King Bed"],
  },
];

export default function RoomIntelligence() {
  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent uppercase tracking-wider">
          Accommodation Intelligence
        </h3>
        <span className="text-[10px] text-amber-400 font-mono border border-amber-500/30 px-2 py-0.5 rounded uppercase">
          Config: Premium Block
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roomTypes.map((room) => (
          <div
            key={room.name}
            className="relative group overflow-hidden rounded-xl border border-white/10 hover:border-amber-500/50 transition-all"
          >
            <div className="relative h-48 w-full">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Status tag */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/20 rounded px-2 py-1 flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${room.status === "Optimal" ? "bg-green-500" : "bg-amber-500"} animate-pulse`}
                />
                <span className="text-[9px] text-white font-bold uppercase tracking-widest">
                  {room.status}
                </span>
              </div>
            </div>

            <div className="p-4 bg-white/5 backdrop-blur-md relative z-10">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-white font-bold text-lg tracking-tight">
                    {room.name}
                  </h4>
                  <p className="text-[10px] text-amber-400/80 font-mono uppercase">
                    {room.count} Allocated
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-tighter block">
                    Capacity
                  </span>
                  <span className="text-white font-bold text-sm tracking-widest">
                    {room.capacity}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {room.features.map((f) => (
                  <span
                    key={f}
                    className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-gray-300"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Scan Line simulation for individual cards */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-amber-500/50 opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_infinite_linear] pointer-events-none" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(192px);
          }
        }
      `}</style>
    </div>
  );
}
