"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function IoTBackground() {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 1000], [0, 100]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-transparent" />;

  const nodes = [
    { x: 300, y: 150 },
    { x: 200, y: 350 },
    { x: 400, y: 450 },
    { x: 600, y: 100 },
    { x: 700, y: 300 },
    { x: 800, y: 450 },
    { x: 500, y: 250 }, // Central Gateway
  ];

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
          {/* Base Nodes & Connections */}
          <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2">
            {/* Connections to Gateway (index 6) */}
            {nodes.slice(0, 6).map((node, i) => (
              <path 
                key={`conn-${i}`}
                d={`M ${node.x} ${node.y} L ${nodes[6].x} ${nodes[6].y}`} 
                strokeDasharray="2 4"
              />
            ))}
            
            {/* Nodes */}
            {nodes.map((node, i) => (
              <circle key={`node-${i}`} cx={node.x} cy={node.y} r={i === 6 ? 8 : 4} fill="currentColor" />
            ))}
          </g>

          {/* Radar Ripples from Edge Nodes */}
          {nodes.slice(0, 6).map((node, i) => (
            <motion.circle
              key={`ripple-${i}`}
              cx={node.x}
              cy={node.y}
              r="20"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ 
                duration: 2 + (i % 2), 
                delay: i * 0.5, 
                repeat: Infinity, 
                ease: "easeOut" 
              }}
            />
          ))}

          {/* Telemetry Packets to Gateway */}
          <g fill="hsl(var(--primary))">
            {nodes.slice(0, 6).map((node, i) => (
              <motion.circle 
                key={`telemetry-${i}`}
                r="2" 
                initial={{ offsetDistance: "0%", opacity: 1 }}
                animate={{ offsetDistance: "100%", opacity: 0 }}
                transition={{ 
                  duration: 1.5 + (i % 3) * 0.5, 
                  delay: i * 0.3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ offsetPath: `path('M ${node.x} ${node.y} L ${nodes[6].x} ${nodes[6].y}')` } as React.CSSProperties}
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
