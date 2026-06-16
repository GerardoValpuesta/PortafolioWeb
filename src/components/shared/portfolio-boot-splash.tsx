"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import BackgroundAnimation from "@/components/ui/background-gradient";
import { Logo } from "@/components/ui/logo";
import { AnimatedRobot } from "@/components/ui/animated-robot";

const paintDots = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${12 + ((index * 7) % 76)}%`,
  top: `${28 + ((index * 11) % 42)}%`,
  delay: 0.35 + index * 0.028,
  size: 3 + (index % 5),
  tone: index % 3 === 0 ? "#67d0e6" : "#fff4c8",
}));

export function PortfolioBootSplash() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="relative h-dvh snap-start overflow-hidden">
      <BackgroundAnimation color={resolvedTheme === "light" ? "dusk" : "midnight"} />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0_38%,rgba(0,0,0,0.42)_78%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(246,234,197,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(246,234,197,0.04)_1px,transparent_1px)] bg-[size:54px_54px] opacity-45 mix-blend-overlay" />
      <div className="noise-screen pointer-events-none absolute inset-0 opacity-[0.018] mix-blend-overlay" />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="relative w-full max-w-5xl">
          <motion.div
            className="relative mx-auto flex min-h-[360px] items-center justify-center [perspective:1000px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="absolute h-56 w-[72%] rounded-[50%] bg-black/28 blur-3xl"
              animate={{ scaleX: [0.94, 1.04, 0.94], opacity: [0.26, 0.42, 0.26] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="relative text-[#fff4c8] [transform-style:preserve-3d]"
              initial={{ rotateX: 18, rotateY: -12, scale: 0.92 }}
              animate={{ rotateX: 8, rotateY: -7, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Logo
                className="absolute left-4 top-5 w-[18rem] text-black/35 blur-[1px] sm:w-[26rem] md:w-[34rem]"
                initialAnimation={false}
              />
              <Logo
                className="absolute left-2 top-3 w-[18rem] text-cyan-300/35 sm:w-[26rem] md:w-[34rem]"
                initialAnimation={false}
              />
              <Logo
                className="absolute -left-2 -top-2 w-[18rem] text-fuchsia-300/25 sm:w-[26rem] md:w-[34rem]"
                initialAnimation={false}
              />
              <motion.div
                className="relative z-10"
                style={{
                  filter:
                    "drop-shadow(7px 10px 0 rgba(8,18,28,0.46)) drop-shadow(14px 18px 0 rgba(0,0,0,0.24)) drop-shadow(0 0 24px rgba(255,244,200,0.28))",
                }}
                initial={{ opacity: 0.35 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.25 }}
              >
                <Logo
                  className="w-[18rem] sm:w-[26rem] md:w-[34rem]"
                  animationTime={1.45}
                />
              </motion.div>
            </motion.div>

            {paintDots.map((dot) => (
              <motion.span
                key={dot.id}
                className="portfolio-boot-splash-paint-dot absolute z-20 rounded-full shadow-[0_0_14px_rgba(255,244,200,0.9)]"
                style={{
                  left: dot.left,
                  top: dot.top,
                  width: dot.size,
                  height: dot.size,
                  backgroundColor: dot.tone,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.95, 0.42], scale: [0, 1.65, 0.92] }}
                transition={{ duration: 1.1, delay: dot.delay, ease: "easeOut" }}
              />
            ))}

            <motion.div
              className="absolute z-30 left-[8%] top-[52%] w-28 sm:w-36 md:w-44"
              initial={{ x: -80, y: 34, rotate: -8, opacity: 0 }}
              animate={{ x: ["-18%", "42%", "72%"], y: [34, -12, 12], rotate: [-8, 4, 10], opacity: [0, 1, 1] }}
              transition={{ duration: 1.65, ease: "easeInOut", delay: 0.18 }}
            >
              <AnimatedRobot
                variant="smooth"
                mood="guide"
                eyeColor="#fff7d6"
                eyeSize="sm"
                eyeClassName="h-[7px] w-1.5 sm:h-[9px] sm:w-2 md:h-[12px] md:w-2.5"
                eyeContainerClassName="gap-4 sm:gap-5 md:gap-6"
                showScreenText={false}
                className="w-full"
              />
              <motion.div
                className="absolute -right-12 top-10 h-10 w-24 origin-left bg-[radial-gradient(ellipse_at_left,rgba(255,244,200,0.75),rgba(103,208,230,0.28)_42%,transparent_72%)] blur-md"
                animate={{ opacity: [0, 0.9, 0.25], scaleX: [0.2, 1.1, 0.45] }}
                transition={{ duration: 1.25, delay: 0.35, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center justify-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-white/80"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35 }}
      >
        Scroll down
        <motion.div className="flex h-10 w-7 justify-center rounded-lg border-2 border-white/35 bg-white/15 backdrop-blur-2xl">
          <motion.div
            className="mx-auto w-1 rounded-xl bg-white/80"
            animate={{ y: [4, 12, 4], height: [4, 8, 4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
