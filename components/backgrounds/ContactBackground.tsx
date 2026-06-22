"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function ContactBackground() {
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
          {/* Abstract Global Coordinates */}
          <g stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15">
            {/* Longitudes */}
            <ellipse cx="500" cy="300" rx="300" ry="250" />
            <ellipse cx="500" cy="300" rx="200" ry="250" />
            <ellipse cx="500" cy="300" rx="100" ry="250" />
            <line x1="500" y1="50" x2="500" y2="550" />
            
            {/* Latitudes */}
            <line x1="200" y1="300" x2="800" y2="300" />
            <ellipse cx="500" cy="300" rx="275" ry="100" />
            <ellipse cx="500" cy="300" rx="230" ry="175" />
          </g>

          {/* Connection arcs */}
          <g stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.3">
            <path d="M 300 250 Q 500 100 700 200" />
            <path d="M 400 400 Q 600 500 800 350" />
            <path d="M 250 350 Q 400 200 600 250" />
          </g>

          {/* Packets over global connections */}
          <g fill="hsl(var(--primary))">
            {[
              "M 300 250 Q 500 100 700 200",
              "M 400 400 Q 600 500 800 350",
              "M 250 350 Q 400 200 600 250",
            ].map((path, i) => (
              <motion.circle 
                key={`contact-pulse-${i}`}
                r="3" 
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                transition={{ 
                  duration: 4, 
                  delay: i * 1.2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ offsetPath: `path('${path}')` } as React.CSSProperties}
              />
            ))}
          </g>

          {/* Nodes */}
          <g fill="currentColor" opacity="0.5">
            <circle cx="300" cy="250" r="3" />
            <circle cx="700" cy="200" r="3" />
            <circle cx="400" cy="400" r="3" />
            <circle cx="800" cy="350" r="3" />
            <circle cx="250" cy="350" r="3" />
            <circle cx="600" cy="250" r="3" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
