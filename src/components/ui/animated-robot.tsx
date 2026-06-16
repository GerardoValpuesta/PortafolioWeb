"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Eyes } from "./robot-eyes";
import { Robot } from "./robot";

type AnimatedRobotProps = {
  variant?: "pixel" | "smooth";
  className?: string;
  screenText?: string;
  mood?: "idle" | "guide" | "alert";
  eyeColor?: string;
  eyeSize?: "sm" | "md" | "lg" | "xl";
  eyeClassName?: string;
  eyeContainerClassName?: string;
  showScreenText?: boolean;
};

const moodGlow = {
  idle: "rgba(246,234,197,0.55)",
  guide: "rgba(103,208,230,0.6)",
  alert: "rgba(52,211,153,0.65)",
};

export function AnimatedRobot({
  variant = "smooth",
  className,
  screenText = "ONLINE",
  mood = "idle",
  eyeColor,
  eyeSize = "lg",
  eyeClassName,
  eyeContainerClassName,
  showScreenText = true,
}: AnimatedRobotProps) {
  if (variant === "pixel") {
    return (
      <motion.div
        className={cn("animated-robot-pixel relative inline-block", className)}
        animate={{ y: [0, -4, 0], rotate: [0, -0.6, 0.6, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.img
          src="/robot-pixelated.png"
          alt="Pixel robot"
          className="block h-auto w-full select-none"
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-[8%] rounded-[18%] bg-cyan-300/10 opacity-0 mix-blend-screen blur-md transition-opacity group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_0_48%,rgba(255,255,255,0.16)_49%,transparent_52%)] bg-[length:100%_6px] opacity-35 mix-blend-screen" />
        <motion.div
          className="pointer-events-none absolute left-[31%] top-[22%] h-[2.5%] w-[38%] bg-cyan-200/70 blur-[2px]"
          animate={{ opacity: [0.15, 0.75, 0.25] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn("animated-robot-smooth relative inline-block", className)}
      animate={{ y: [0, -7, 0], rotate: [0, 0.7, -0.5, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <Robot className="w-full">
        <div
          className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#080d12]"
          style={{
            boxShadow: `inset 0 0 22px ${moodGlow[mood]}`,
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(transparent_0_45%,rgba(255,255,255,0.14)_46%,transparent_50%)] bg-[length:100%_8px] opacity-30" />
          <Eyes
            size={eyeSize}
            classes={{ container: eyeContainerClassName, eye: eyeClassName }}
            eyeColor={eyeColor ?? (mood === "alert" ? "#34d399" : "#F6EAC5")}
            lookAround={{ enabled: true, duration: mood === "guide" ? 5 : 7 }}
            glow={{
              level: mood === "alert" ? 4 : 2,
              color: eyeColor ?? (mood === "alert" ? "#34d399" : "#F6EAC5"),
              animated: true,
            }}
          />
          {showScreenText && (
            <motion.span
              className="absolute bottom-2 font-mono text-[8px] font-bold tracking-[0.18em] text-cyan-100/70"
              animate={{ opacity: [0.35, 0.85, 0.35] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              {screenText}
            </motion.span>
          )}
        </div>
      </Robot>
      <motion.div
        className="pointer-events-none absolute inset-x-[18%] -bottom-2 h-6 rounded-full bg-cyan-300/20 blur-xl"
        animate={{ scaleX: [0.85, 1.05, 0.85], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
