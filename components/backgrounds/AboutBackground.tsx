"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function AboutBackground() {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 1000], [0, -100]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-transparent" />;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <motion.div 
        className="absolute inset-0 flex items-center justify-center opacity-30 md:opacity-50"
        style={{ y: yPos }}
      >
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-full min-w-[800px]"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Abstract Schema Tables */}
          <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2">
            {/* Table 1: Users */}
            <rect x="200" y="150" width="140" height="120" rx="4" />
            <line x1="200" y1="180" x2="340" y2="180" />
            <line x1="200" y1="210" x2="340" y2="210" />
            <line x1="200" y1="240" x2="340" y2="240" />
            <text x="270" y="170" fill="currentColor" fontSize="10" textAnchor="middle" opacity="0.6">USERS</text>

            {/* Table 2: Profiles */}
            <rect x="500" y="100" width="140" height="90" rx="4" />
            <line x1="500" y1="130" x2="640" y2="130" />
            <line x1="500" y1="160" x2="640" y2="160" />
            <text x="570" y="120" fill="currentColor" fontSize="10" textAnchor="middle" opacity="0.6">PROFILES</text>

            {/* Table 3: Projects */}
            <rect x="500" y="300" width="140" height="150" rx="4" />
            <line x1="500" y1="330" x2="640" y2="330" />
            <line x1="500" y1="360" x2="640" y2="360" />
            <line x1="500" y1="390" x2="640" y2="390" />
            <line x1="500" y1="420" x2="640" y2="420" />
            <text x="570" y="320" fill="currentColor" fontSize="10" textAnchor="middle" opacity="0.6">PROJECTS</text>

            {/* Table 4: Metrics */}
            <rect x="800" y="200" width="140" height="100" rx="4" />
            <line x1="800" y1="230" x2="940" y2="230" />
            <line x1="800" y1="260" x2="940" y2="260" />
            <text x="870" y="220" fill="currentColor" fontSize="10" textAnchor="middle" opacity="0.6">METRICS</text>

            {/* Relations (Lines) */}
            <path d="M 340 165 C 420 165, 420 145, 500 145" strokeDasharray="4 4" />
            <path d="M 340 225 C 420 225, 420 345, 500 345" strokeDasharray="4 4" />
            <path d="M 640 375 C 720 375, 720 275, 800 275" strokeDasharray="4 4" />
          </g>

          {/* Data moving along relations */}
          <g fill="hsl(var(--primary))">
            {[
              "M 340 165 C 420 165, 420 145, 500 145",
              "M 340 225 C 420 225, 420 345, 500 345",
              "M 640 375 C 720 375, 720 275, 800 275"
            ].map((path, i) => (
              <motion.circle 
                key={`query-${i}`}
                r="3" 
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                transition={{ 
                  duration: 2.5, 
                  delay: i * 0.8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ offsetPath: `path('${path}')` } as React.CSSProperties}
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
