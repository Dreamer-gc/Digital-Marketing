"use client";

import { motion, type Variants, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

/* --------------------------------------------------------------
   1. FadeUp — scroll-triggered fade-up (headings / paragraphs)
-------------------------------------------------------------- */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function FadeUp({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={fadeUpVariants}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------------------
   2. StaggerContainer / StaggerItem — staggered card reveals
-------------------------------------------------------------- */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.09,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerItemVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------------------
   3. ClipReveal — clip-path reveal for large project images
-------------------------------------------------------------- */
export interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function ClipReveal({
  children,
  className = "",
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transition = "clip-path 0.9s cubic-bezier(0.22, 1, 0.36, 1)";
            el.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    el.style.clipPath = "polygon(0 0, 100% 0, 100% 60%, 0 60%)";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden rounded-24 ${className}`}>
      {children}
    </div>
  );
}

/* --------------------------------------------------------------
   4. Parallax — subtle background parallax on scroll
-------------------------------------------------------------- */
export interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({
  children,
  className = "",
  speed = 0.15,
}: ParallaxProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, (v) => v * speed * 200);
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  return (
    <motion.div className={className} style={{ y: springY }}>
      {children}
    </motion.div>
  );
}
