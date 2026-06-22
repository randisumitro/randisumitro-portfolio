"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function MLBackground() {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 1000], [0, -100]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-transparent" />;

  // Network topology
  const layers = [
    [150, 200, 250, 300, 350, 400], // Input Layer Y-coords (x=200)
    [100, 160, 220, 280, 340, 400, 460], // Hidden 1 Y-coords (x=400)
    [120, 190, 260, 330, 400], // Hidden 2 Y-coords (x=600)
    [220, 280, 340], // Output Y-coords (x=800)
  ];

  const xCoords = [200, 400, 600, 800];

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
          {/* Synapses (Lines) */}
          <g stroke="currentColor" strokeWidth="0.5" opacity="0.15">
            {layers[0].map((y1, i) =>
              layers[1].map((y2, j) => (
                <line key={`0-${i}-${j}`} x1={xCoords[0]} y1={y1} x2={xCoords[1]} y2={y2} />
              ))
            )}
            {layers[1].map((y1, i) =>
              layers[2].map((y2, j) => (
                <line key={`1-${i}-${j}`} x1={xCoords[1]} y1={y1} x2={xCoords[2]} y2={y2} />
              ))
            )}
            {layers[2].map((y1, i) =>
              layers[3].map((y2, j) => (
                <line key={`2-${i}-${j}`} x1={xCoords[2]} y1={y1} x2={xCoords[3]} y2={y2} />
              ))
            )}
          </g>

          {/* Nodes */}
          <g fill="currentColor" opacity="0.4">
            {layers.map((layer, layerIdx) =>
              layer.map((y, nodeIdx) => (
                <circle key={`node-${layerIdx}-${nodeIdx}`} cx={xCoords[layerIdx]} cy={y} r="4" />
              ))
            )}
          </g>

          {/* Animated Activation Pulses */}
          <g fill="hsl(var(--primary))">
            {[
              { path: "M 200 200 L 400 160 L 600 190 L 800 280", delay: 0 },
              { path: "M 200 350 L 400 340 L 600 260 L 800 220", delay: 1.2 },
              { path: "M 200 250 L 400 280 L 600 330 L 800 340", delay: 0.5 },
              { path: "M 200 150 L 400 100 L 600 120 L 800 220", delay: 2.1 },
              { path: "M 200 400 L 400 460 L 600 400 L 800 340", delay: 1.8 },
            ].map((pulse, idx) => (
              <motion.circle 
                key={`pulse-${idx}`}
                r="3" 
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                transition={{ 
                  duration: 2, 
                  delay: pulse.delay, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ offsetPath: `path('${pulse.path}')` } as React.CSSProperties}
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
