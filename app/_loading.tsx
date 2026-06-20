"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm">
      {/* Background Ornaments */}
      <div className="absolute top-[30%] left-[20%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#fbdca7]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[20%] h-[300px] w-[300px] translate-x-1/2 rounded-full bg-[#f9a137]/10 blur-[100px] pointer-events-none" />

      <div className="relative flex flex-col items-center">
        {/* Animated Outer Spinner Track */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-[#fff1de]" />
          <div className="absolute inset-0 rounded-full border-4 border-t-primary-container border-r-primary-container animate-spin" />
          
          {/* Animated Single Tooth Icon inside the Spinner */}
          <div className="z-10 animate-pulse text-primary-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 240 270"
              fill="none"
              className="h-10 w-10 drop-shadow-[0_0_6px_rgba(184,95,13,0.25)]"
              aria-hidden="true"
            >
              <path
                d="M72 24 C53 24 38 39 38 59 V105 C38 121 44 136 55 150 C64 161 69 175 70 192 L72 223 C73 240 83 251 96 251 C109 251 118 240 120 223 L124 169 C125 158 131 151 138 151 C145 151 151 158 152 169 L156 223 C158 240 167 251 180 251 C193 251 203 240 204 223 L206 192 C207 175 212 161 221 150 C232 136 238 121 238 105 V59 C238 39 223 24 204 24 C190 24 177 30 163 39 L138 55 L113 39 C99 30 86 24 72 24 Z"
                stroke="currentColor"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Simplified Loading Text */}
        <div className="mt-6 text-center">
          <p className="font-section-heading text-[16px] font-extrabold tracking-widest text-[#B85F0D] uppercase animate-pulse">
            Loading ....
          </p>
        </div>
      </div>
    </div>
  );
}
