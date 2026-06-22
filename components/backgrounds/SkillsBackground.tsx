"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function SkillsBackground() {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 1000], [0, 100]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-transparent" />;

  const nodes = [
    { x: 300, y: 200 },
    { x: 500, y: 150 },
    { x: 700, y: 250 },
    { x: 400, y: 350 },
    { x: 600, y: 450 },
    { x: 200, y: 400 },
    { x: 800, y: 100 },
    { x: 500, y: 300 }, // Center
  ];

  const connections = [
    [0, 1], [1, 2], [0, 3], [3, 4], [2, 4], 
    [0, 5], [5, 3], [2, 6], [1, 7], [3, 7], [4, 7]
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <motion.div 
        className="absolute inset-0 flex items-center justify-center opacity-30 md:opacity-50"
        style={{ y: yPos }}
      >
        <motion.svg
          viewBox="0 0 1000 600"
          className="w-full h-full min-w-[800px]"
          preserveAspectRatio="xMidYMid slice"
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          style={{ originX: "500px", originY: "300px" }}
        >
          {/* Edges */}
          <g stroke="currentColor" strokeWidth="0.5" opacity="0.2">
            {connections.map(([a, b], i) => (
              <path 
                key={`edge-${i}`} 
                d={`M ${nodes[a].x} ${nodes[a].y} L ${nodes[b].x} ${nodes[b].y}`} 
              />
            ))}
          </g>

          {/* Nodes */}
          <g fill="currentColor" opacity="0.4">
            {nodes.map((node, i) => (
              <circle key={`node-${i}`} cx={node.x} cy={node.y} r={i === 7 ? 6 : 3} />
            ))}
          </g>

          {/* Pulse on random edges */}
          <g fill="hsl(var(--primary))">
            {connections.slice(0, 5).map(([a, b], i) => (
              <motion.circle 
                key={`pulse-${i}`}
                r="2" 
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                transition={{ 
                  duration: 3 + i, 
                  delay: i * 0.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ offsetPath: `path('M ${nodes[a].x} ${nodes[a].y} L ${nodes[b].x} ${nodes[b].y}')` } as React.CSSProperties}
              />
            ))}
          </g>
        </motion.svg>
      </motion.div>
    </div>
  );
}
