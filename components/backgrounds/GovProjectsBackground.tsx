"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function GovProjectsBackground() {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 1000], [0, 100]);
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
          <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2">
            {/* Central Hub */}
            <circle cx="500" cy="300" r="60" strokeDasharray="4 4" />
            <circle cx="500" cy="300" r="40" />
            <text x="500" y="304" fill="currentColor" fontSize="10" textAnchor="middle" opacity="0.6">DATACENTER</text>

            {/* Orbit rings */}
            <circle cx="500" cy="300" r="150" opacity="0.3" strokeDasharray="2 6" />
            <circle cx="500" cy="300" r="250" opacity="0.2" strokeDasharray="1 8" />

            {/* Radiating Lines */}
            <path d="M 500 240 L 500 100" />
            <path d="M 500 360 L 500 500" />
            <path d="M 440 300 L 300 300" />
            <path d="M 560 300 L 700 300" />

            <path d="M 457 257 L 350 150" />
            <path d="M 543 257 L 650 150" />
            <path d="M 457 343 L 350 450" />
            <path d="M 543 343 L 650 450" />

            {/* Nodes on Radiating Lines */}
            <circle cx="500" cy="100" r="8" />
            <circle cx="500" cy="500" r="8" />
            <circle cx="300" cy="300" r="8" />
            <circle cx="700" cy="300" r="8" />
            <circle cx="350" cy="150" r="8" />
            <circle cx="650" cy="150" r="8" />
            <circle cx="350" cy="450" r="8" />
            <circle cx="650" cy="450" r="8" />

            <text x="500" y="85" fill="currentColor" fontSize="10" textAnchor="middle" opacity="0.6">MPP</text>
            <text x="300" y="285" fill="currentColor" fontSize="10" textAnchor="middle" opacity="0.6">DPMPTSP</text>
            <text x="700" y="285" fill="currentColor" fontSize="10" textAnchor="middle" opacity="0.6">SIMPONI</text>
          </g>

          {/* Animated Signals Flowing to Center */}
          <g fill="hsl(var(--primary))">
            {[
              "M 500 100 L 500 240",
              "M 500 500 L 500 360",
              "M 300 300 L 440 300",
              "M 700 300 L 560 300",
              "M 350 150 L 457 257",
              "M 650 150 L 543 257",
              "M 350 450 L 457 343",
              "M 650 450 L 543 343",
            ].map((path, i) => (
              <motion.circle 
                key={i}
                r="3" 
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 2.5, 
                  delay: i * 0.4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ offsetPath: `path('${path}')` } as React.CSSProperties}
              />
            ))}
          </g>

          {/* Glowing Center */}
          <motion.circle 
            cx="500" 
            cy="300" 
            r="45" 
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
