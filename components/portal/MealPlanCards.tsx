"use client";

import React from "react";

interface MealPlan {
  type: string;
  icon: React.ReactNode;
}

const plans: MealPlan[] = [
  {
    type: "Breakfast",
    icon: (
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
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    type: "Lunch",
    icon: (
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    type: "Gala Dinner",
    icon: (
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
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

export default function MealPlanCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {plans.map((plan) => (
        <div
          key={plan.type}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all group relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
              {plan.icon}
            </div>
            <span className="text-[10px] font-mono text-cyan-500/70 uppercase">
              ID: {plan.type.substring(0, 3)}-01
            </span>
          </div>

          <h4 className="text-white font-bold mb-1 tracking-wide">
            {plan.type}
          </h4>

          <div className="flex items-center gap-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[10px] text-gray-400 uppercase font-medium">
              Auto-Matched to 450 Guests
            </span>
          </div>

          <button
            onClick={() => alert(`Opening ${plan.type} details...`)}
            className="w-full py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold text-white transition-colors uppercase tracking-widest backdrop-blur-sm"
          >
            View Menu
          </button>

          {/* Decorative selection light */}
          <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-blue-600/10 blur-2xl rounded-full" />
        </div>
      ))}
    </div>
  );
}
