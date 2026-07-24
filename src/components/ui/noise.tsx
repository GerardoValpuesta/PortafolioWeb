'use client';
import { cn } from '@/lib/utils';
import React, { useRef, useEffect } from 'react';

export type NoiseProps = {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
  className?: string
}

const Noise: React.FC<NoiseProps> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
  className
}) => {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId: number;
    let isVisible = true;

    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || navigator.maxTouchPoints > 0);
    const canvasSize = isMobile ? 256 : (patternSize || 512);
    const effectiveInterval = isMobile ? Math.max(patternRefreshInterval, 4) : patternRefreshInterval;
    const framesCount = 4;
    const noiseFrames: ImageData[] = [];

    // Pre-generate noise frames to avoid CPU load on every frame
    for (let f = 0; f < framesCount; f++) {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }
      noiseFrames.push(imageData);
    }

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };

    const loop = () => {
      if (isVisible && frame % effectiveInterval === 0) {
        const currentFrame = Math.floor(frame / effectiveInterval) % framesCount;
        ctx.putImageData(noiseFrames[currentFrame], 0, 0);
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && !document.hidden;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false;
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      className={cn("pointer-events-none absolute top-0 left-0 h-full w-full" , className)}
      ref={grainRef}
      style={{
        imageRendering: 'pixelated'
      }}
    />
  );
};

export default Noise;