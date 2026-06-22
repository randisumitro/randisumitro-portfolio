"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroBackground() {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 1000], [0, 150]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-transparent" />;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background/20 via-background to-background">
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
            {/* Architecture Nodes */}
            <rect x="150" y="250" width="100" height="60" rx="4" />
            <text x="200" y="285" fill="currentColor" fontSize="12" textAnchor="middle" opacity="0.6">CLIENT</text>

            <rect x="400" y="150" width="120" height="60" rx="4" />
            <text x="460" y="185" fill="currentColor" fontSize="12" textAnchor="middle" opacity="0.6">GATEWAY</text>

            <rect x="400" y="350" width="120" height="60" rx="4" />
            <text x="460" y="385" fill="currentColor" fontSize="12" textAnchor="middle" opacity="0.6">AUTH</text>

            <rect x="650" y="250" width="100" height="160" rx="4" />
            <text x="700" y="335" fill="currentColor" fontSize="12" textAnchor="middle" opacity="0.6">SERVICES</text>

            <circle cx="850" cy="330" r="40" />
            <text x="850" y="335" fill="currentColor" fontSize="12" textAnchor="middle" opacity="0.6">DB</text>

            {/* Connecting Lines */}
            <path d="M 250 280 L 320 280 L 320 180 L 400 180" strokeDasharray="4 4" />
            <path d="M 250 280 L 320 280 L 320 380 L 400 380" strokeDasharray="4 4" />
            <path d="M 520 180 L 580 180 L 580 280 L 650 280" strokeDasharray="4 4" />
            <path d="M 520 380 L 580 380 L 580 380 L 650 380" strokeDasharray="4 4" />
            <path d="M 750 330 L 810 330" strokeDasharray="4 4" />
            <path d="M 700 250 L 700 100 L 460 100 L 460 150" strokeDasharray="4 4" />
          </g>

          {/* Animated Data Packets */}
          <g fill="hsl(var(--primary))">
            <motion.circle r="3" 
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: "path('M 250 280 L 320 280 L 320 180 L 400 180')" } as React.CSSProperties}
            />
            <motion.circle r="3" 
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: "path('M 250 280 L 320 280 L 320 380 L 400 380')" } as React.CSSProperties}
            />
            <motion.circle r="3" 
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: "path('M 520 180 L 580 180 L 580 280 L 650 280')" } as React.CSSProperties}
            />
            <motion.circle r="4" 
              initial={{ offsetDistance: "0%", opacity: 1 }}
              animate={{ offsetDistance: "100%", opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: "path('M 750 330 L 810 330')" } as React.CSSProperties}
            />
          </g>

          {/* Glowing Accents */}
          <circle cx="200" cy="250" r="2" fill="hsl(var(--primary))">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="850" cy="290" r="2" fill="hsl(var(--primary))">
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </motion.div>
    </div>
  );
}
