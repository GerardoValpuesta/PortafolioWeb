"use client";

import { motion, type Variants, useAnimationControls } from "motion/react";
import { cn } from "@/lib/utils";
import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";

interface SVGPathData {
  d: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

type AnimationProps = {
  className?: string;
  animationTime?: number;
  hover?: boolean;
  onAnimationEnd?: () => void;
  loop?: boolean | number;
  paths: SVGPathData[];
  initialAnimation?: boolean;
  viewBox?: string;
};

export function Animation({
  className = "w-16",
  animationTime = 4,
  hover = false,
  onAnimationEnd,
  loop = false,
  paths,
  initialAnimation = true,
  viewBox = "0 0 377 193",
}: AnimationProps) {
  hover = loop ? false : hover;
  const controls = useAnimationControls();
  const [isAnimating, setIsAnimating] = useState(false);
  const currentLoopRef = useRef(0);
  const animationCompleteCountRef = useRef(0);

  const total = paths?.length ?? 0;
  const perPath = total > 0 ? Math.max(0, animationTime) / total : 0;

  const totalLoops = useMemo(() => {
    if (loop === true) return Infinity;
    if (typeof loop === "number") return Math.max(1, Math.floor(loop));
    return 1;
  }, [loop]);

  const pathVariants: Variants = useMemo(
    () => ({
      hidden: {
        pathLength: 0,
        fillOpacity: 0,
        strokeWidth: 1,
      },
      visible: (i: number) => ({
        pathLength: 1,
        fillOpacity: 1,
        strokeWidth: 0,
        transition: {
          delay: perPath * i,
          duration: perPath || 0.001,
          ease: "easeInOut",
        },
      }),
    }),
    [perPath]
  );

  const startAnimation = useCallback(async () => {
    if (isAnimating) return;

    setIsAnimating(true);
    animationCompleteCountRef.current = 0;
    currentLoopRef.current = 0;

    const runCycle = async () => {
      await controls.start("visible");
      currentLoopRef.current++;

      if (currentLoopRef.current < totalLoops) {
        await controls.start("hidden");
        animationCompleteCountRef.current = 0;
        await runCycle();
      } else {
        setIsAnimating(false);
        onAnimationEnd?.();
      }
    };

    await controls.start("hidden");
    await runCycle();
  }, [controls, isAnimating, totalLoops, onAnimationEnd]);

  useEffect(() => {
    if (initialAnimation) {
      startAnimation();
    } else {
      controls.set("visible");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleHover = () => {
    if (hover && !isAnimating) {
      startAnimation();
    }
  };

  return (
    <div className={cn(className)} onMouseEnter={handleHover}>
      <motion.svg width="100%" height="100%" viewBox={viewBox}>
        {paths.map((pathData, i) => (
          <motion.path
            key={i}
            d={pathData.d}
            fill={pathData.fill || "currentColor"}
            stroke={pathData.stroke || "currentColor"}
            strokeWidth={pathData.strokeWidth ?? 1}
            initial="hidden"
            animate={controls}
            variants={pathVariants}
            custom={i}
            onAnimationComplete={() => {
              animationCompleteCountRef.current++;
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

// Real SVG paths for "Gelik" in Dancing Script Bold — viewBox: 0 0 188.6 81.3
const GELIK_PATHS: SVGPathData[] = [
  {
    d: "M 52 44.6 L 51 47.7 Q 49.2 53.2 48.05 56.85 Q 46.9 60.5 46.3 63.05 Q 45.7 65.6 45.5 67.65 Q 45.3 69.7 45.3 71.9 Q 45.3 73.9 45.4 76.05 Q 45.5 78.2 45.6 81.3 Q 42.6 80.9 41.15 79.55 Q 39.7 78.2 39.25 76.4 Q 38.8 74.6 38.8 72.9 L 38.8 71.9 Q 38.8 71.4 38.9 70.9 Q 35.4 75.2 30.85 77.95 Q 26.3 80.7 20.6 80.7 Q 15 80.7 10.3 77.75 Q 5.6 74.8 2.8 69.15 Q 0 63.5 0 55.6 Q 0 47.9 2.4 40 Q 4.8 32.1 9 24.95 Q 13.2 17.8 18.6 12.2 Q 24 6.6 30.05 3.35 Q 36.1 0.1 42.2 0.1 Q 46.6 0.1 49.2 1.75 Q 51.8 3.4 52.95 6.1 Q 54.1 8.8 54.1 11.9 Q 54.1 15.4 52.85 18.9 Q 51.6 22.4 49.45 24.7 Q 47.3 27 44.7 27 Q 43.5 27 42.5 26.3 Q 41.5 25.6 40.5 23.7 Q 42 22.7 43.85 20.2 Q 45.7 17.7 47.1 14.65 Q 48.5 11.6 48.5 9.2 Q 48.5 7.2 47.25 5.85 Q 46 4.5 43.1 4.5 Q 38.6 4.5 33.85 7.85 Q 29.1 11.2 24.8 16.75 Q 20.5 22.3 17.05 29.15 Q 13.6 36 11.6 43.15 Q 9.6 50.3 9.6 56.7 Q 9.6 65.8 13.55 70.85 Q 17.5 75.9 23 75.9 Q 27.1 75.9 30.55 73.3 Q 34 70.7 36.65 66.45 Q 39.3 62.2 40.9 57.2 Q 42.5 52.2 42.9 47.4 Q 40.4 46.9 37.75 46.65 Q 35.1 46.4 32.2 46.4 Q 30.6 46.4 29 46.45 Q 27.4 46.5 25.6 46.6 Q 26.5 43.1 28.45 41.45 Q 30.4 39.8 33.6 39.8 Q 36.6 39.8 39.65 40.75 Q 42.7 41.7 45.85 42.8 Q 49 43.9 52 44.6 Z",
  },
  {
    d: "M 91.8 54.8 L 93.8 56.4 Q 91.1 62.4 86.85 66.9 Q 82.6 71.4 77.45 73.9 Q 72.3 76.4 66.9 76.4 Q 60.5 76.4 57.05 72.95 Q 53.6 69.5 53.6 64.3 Q 53.6 59.9 55.85 54.95 Q 58.1 50 61.9 45.65 Q 65.7 41.3 70.3 38.6 Q 74.9 35.9 79.5 35.9 Q 82.1 35.9 84.45 37.25 Q 86.8 38.6 86.8 42.6 Q 86.8 46.4 84.6 49.7 Q 82.4 53 78.7 55.6 Q 75 58.2 70.55 59.85 Q 66.1 61.5 61.6 62 Q 61.5 62.4 61.45 62.85 Q 61.4 63.3 61.4 64.3 Q 61.4 64.8 61.55 66.05 Q 61.7 67.3 62.4 68.7 Q 63.1 70.1 64.7 71.1 Q 66.3 72.1 69.1 72.1 Q 73.3 72.1 77.55 69.75 Q 81.8 67.4 85.55 63.5 Q 89.3 59.6 91.8 54.8 Z M 62.7 58.3 Q 63.8 55.2 65.7 52 Q 67.6 48.8 70 46.15 Q 72.4 43.5 74.9 41.85 Q 77.4 40.2 79.7 40.2 Q 80.6 40.2 81 40.6 Q 81.4 41 81.4 42.1 Q 81.4 44.9 79.5 47.65 Q 77.6 50.4 74.65 52.7 Q 71.7 55 68.5 56.5 Q 65.3 58 62.7 58.3 Z",
  },
  {
    d: "M 116.3 54.5 L 118.7 55.8 Q 114.4 64.7 109.1 69.85 Q 103.8 75 98 75 Q 93.3 75 91.45 71.85 Q 89.6 68.7 89.6 64.4 Q 89.6 59.5 91.4 52.9 Q 93.2 46.3 96.15 39.05 Q 99.1 31.8 102.65 24.85 Q 106.2 17.9 109.8 12.3 Q 113.4 6.7 116.45 3.35 Q 119.5 0 121.4 0 Q 122.7 0 123.6 1.35 Q 124.5 2.7 125.05 4.55 Q 125.6 6.4 125.6 8 Q 125.6 10.7 124.25 15.05 Q 122.9 19.4 120.45 24.6 Q 118 29.8 114.65 35.25 Q 111.3 40.7 107.25 45.6 Q 103.2 50.5 98.6 54.1 Q 98.2 56.6 97.85 59.05 Q 97.5 61.5 97.5 63.5 Q 97.5 67.1 98.7 68.75 Q 99.9 70.4 101.8 70.4 Q 104.3 70.4 106.95 68.05 Q 109.6 65.7 112.05 62.05 Q 114.5 58.4 116.3 54.5 Z M 100.4 47.9 Q 102.1 42.5 104.45 36.95 Q 106.8 31.4 109.35 26.4 Q 111.9 21.4 114.3 17.5 Q 116.7 13.6 118.45 11.35 Q 120.2 9.1 121 9.1 L 121 9.25 L 121 9.4 Q 120.9 11.4 119.85 14.75 Q 118.8 18.1 116.9 22.3 Q 115 26.5 112.45 31 Q 109.9 35.5 106.85 39.85 Q 103.8 44.2 100.4 47.9 Z",
  },
  {
    d: "M 140.9 54.8 L 142.4 56.4 Q 138.9 65.2 133.5 70.1 Q 128.1 75 121.9 75 Q 117.5 75 115.3 72.4 Q 113.1 69.8 113.1 66.1 Q 113.1 63.8 113.9 60.3 Q 114.7 56.8 116.15 52.95 Q 117.6 49.1 119.5 45.7 Q 121.4 42.3 123.6 40.15 Q 125.8 38 128 38 Q 129.2 38 130.1 38.7 Q 131 39.4 131 40.9 Q 131 42.2 129.45 44.8 Q 127.9 47.4 125.85 50.8 Q 123.8 54.2 122.25 57.85 Q 120.7 61.5 120.7 64.8 Q 120.7 68 121.85 69.05 Q 123 70.1 125.2 70.1 Q 128.6 70.1 132.6 66.7 Q 136.6 63.3 140.9 54.8 Z M 133.7 29.9 Q 131.8 29.9 130.25 28.95 Q 128.7 28 128.7 26 Q 128.7 23.6 131.3 21.9 Q 133.9 20.2 136.7 20.2 Q 138.5 20.2 139.75 21 Q 141 21.8 141 23.9 Q 141 26 138.7 27.95 Q 136.4 29.9 133.7 29.9 Z",
  },
  {
    d: "M 187.2 54.2 Q 185.2 58.8 182.65 62.6 Q 180.1 66.4 177.45 68.7 Q 174.8 71 172.3 71 Q 170.4 71 169 69.7 Q 167.6 68.4 166.7 66.5 Q 165.8 64.6 165.25 62.6 Q 164.7 60.6 164.4 59.3 Q 166.1 59.2 168.5 58.5 Q 170.9 57.8 173.25 56.35 Q 175.6 54.9 177.2 52.7 Q 178.8 50.5 178.8 47.5 Q 178.8 43.3 175.8 40.5 Q 172.8 37.7 168.8 37.7 Q 165.1 37.7 161.85 40 Q 158.6 42.3 155.8 46.05 Q 153 49.8 150.7 54.1 Q 148.4 58.4 146.6 62.5 Q 147 57.6 148.5 51.25 Q 150 44.9 152.8 38.4 Q 157.4 35.7 161.2 31.9 Q 165 28.1 167.75 23.85 Q 170.5 19.6 172 15.45 Q 173.5 11.3 173.5 7.9 Q 173.5 4.7 172.35 2.65 Q 171.2 0.6 169.5 0.6 Q 167.5 0.6 164.45 3.8 Q 161.4 7 157.9 12.5 Q 154.4 18 151 24.9 Q 147.6 31.8 144.75 39.35 Q 141.9 46.9 140.2 54.2 Q 138.5 61.5 138.5 67.6 Q 138.5 71.1 139.15 72.7 Q 139.8 74.3 140.75 74.7 Q 141.7 75.1 142.4 75.1 Q 144.3 75.1 145.3 74.05 Q 146.3 73 147.4 70 Q 148.3 67.6 149.65 64.3 Q 151 61 152.75 57.5 Q 154.5 54 156.65 51 Q 158.8 48 161.3 46.15 Q 163.8 44.3 166.6 44.3 Q 168.7 44.3 169.85 45.4 Q 171 46.5 171 48.3 Q 171 50.5 169.55 52.05 Q 168.1 53.6 165.9 54.65 Q 163.7 55.7 161.6 56.3 Q 159.5 56.9 158.1 57.2 Q 158.1 59.5 158.8 62.65 Q 159.5 65.8 160.9 68.8 Q 162.3 71.8 164.6 73.8 Q 166.9 75.8 170 75.8 Q 173.8 75.8 177.4 72.95 Q 181 70.1 183.95 65.5 Q 186.9 60.9 188.6 55.9 L 187.2 54.2 Z M 155.7 31.6 Q 158.3 25.9 160.9 21.2 Q 163.5 16.5 165.65 13.45 Q 167.8 10.4 168.8 10 L 168.8 10.15 L 168.8 10.3 Q 168.7 14 166.55 18.05 Q 164.4 22.1 161.4 25.65 Q 158.4 29.2 155.7 31.6 Z",
  },
];

export function Logo({
  href,
  className,
  animationTime = 3,
  hover = false,
  initialAnimation = true,
}: Partial<AnimationProps & { href?: string }>) {
  const content = (
    <Animation
      className={cn("w-16", className)}
      paths={GELIK_PATHS}
      viewBox="0 0 188.6 81.3"
      animationTime={animationTime}
      hover={hover}
      initialAnimation={initialAnimation}
    />
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
