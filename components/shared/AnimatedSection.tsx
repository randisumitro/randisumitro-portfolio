"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  immediate?: boolean;
  id?: string;
}

const directionOffsets = {
  up: { y: 14, x: 0 },
  down: { y: -14, x: 0 },
  left: { x: -14, y: 0 },
  right: { x: 14, y: 0 },
  none: { x: 0, y: 0 },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  immediate = false,
  id,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: "some" });

  if (immediate) {
    return (
      <div id={id} className={cn(className)}>
        {children}
      </div>
    );
  }

  const offset = directionOffsets[direction];

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={false}
      animate={
        isInView
          ? { y: 0, x: 0, opacity: 1 }
          : { y: offset.y, x: offset.x, opacity: 0.01 }
      }
      transition={{
        duration: 0.35,
        delay: Math.min(delay, 0.25),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.06,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: "some" });

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { y: 10, opacity: 0.01 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.32,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
