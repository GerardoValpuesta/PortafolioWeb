"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import ReactPlayer from "react-player";

type MusicPlayerProps = {
  src: string;
  coverImage?: string;
  trackTitle?: string;
  artist?: string;
  className?: string;
  isPlaying: boolean;
  onTogglePlay?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onShuffle?: () => void;
  songIndex?: number;
  totalSongs?: number;
};

type AudioOnlyPlayerProps = {
  url: string;
  isPlaying: boolean;
};

export const AudioOnlyPlayer: React.FC<AudioOnlyPlayerProps> = ({
  url,
  isPlaying,
}) => {
  return (
    <div style={{ width: 0, height: 0, overflow: "hidden", opacity: 0 }}>
      <ReactPlayer
        src={url}
        playing={isPlaying}
        width="0"
        height="0"
        controls={false}
        playsInline
      />
    </div>
  );
};

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  src,
  coverImage,
  trackTitle = "Track Title",
  artist = "Artist Name",
  className,
  isPlaying,
  onTogglePlay,
  onNext,
  onPrev,
  onShuffle,
  songIndex = 0,
  totalSongs = 0,
}) => {
  return (
    <div
      className={cn(
        "relative inset-0 flex h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
    >
      <style jsx>
        {`
          @keyframes vinyl-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes glossy-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }

          @keyframes audio-bar {
            0%,
            100% {
              height: 24px;
            }
            50% {
              height: 12px;
            }
          }

          .vinyl-record {
            will-change: transform;
            transform: translate3d(0, 0, 0);
          }

          .vinyl-record.playing {
            animation: vinyl-spin 4.5s linear infinite;
          }

          .glossy-effect {
            will-change: transform;
            transform: translate3d(0, 0, 0);
          }

          .glossy-effect.playing {
            animation: glossy-spin 8s linear infinite;
          }

          .audio-bar {
            will-change: height;
            transform: translate3d(0, 0, 0);
          }

          .audio-bar-1 {
            animation: audio-bar 0.8s ease-in-out infinite;
          }

          .audio-bar-2 {
            animation: audio-bar 0.8s ease-in-out 0.15s infinite;
          }

          .audio-bar-3 {
            animation: audio-bar 0.8s ease-in-out 0.3s infinite;
          }

          /* Mobile optimizations */
          @media (max-width: 640px) {
            .vinyl-record,
            .glossy-effect,
            .audio-bar {
              transform: translate3d(0, 0, 0);
            }
          }
        `}
      </style>

      <div className="absolute inset-0 size-full before:absolute before:inset-0 before:z-10 before:size-full before:bg-black/20 before:backdrop-blur-sm">
        {coverImage && (
          <img
            src={coverImage}
            alt="music cover"
            className="h-full w-full scale-110 object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      {/* Main Container */}
      <div className="relative z-40 flex items-center justify-center">
        <motion.div
          className="relative flex items-center"
          initial={false}
          animate={{
            gap: isPlaying ? "0px" : "0px",
          }}
        >
          {/* Album Cover  */}
          <motion.div
            initial={{ x: 0, scale: 0.9, opacity: 0 }}
            animate={{
              x: isPlaying ? -50 : 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{
              x: {
                type: "spring",
                stiffness: 100,
                damping: 20,
              },
              scale: { duration: 0.6, ease: "easeOut" },
              opacity: { duration: 0.6 },
            }}
            className="relative z-30 size-44 overflow-hidden rounded-lg bg-black shadow-2xl max-sm:size-40"
            style={{
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.8), 0 0 120px rgba(255,125,0,0.1)",
            }}
          >
            {coverImage && (
              <img
                src={coverImage}
                alt={trackTitle}
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Track info */}
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              <h3 className="truncate text-sm font-semibold text-white">
                {trackTitle}
              </h3>
              <p className="truncate text-xs text-white/70">{artist}</p>
            </div>

            {/* Play/Pause button — now handled in controls bar below */}
          </motion.div>

          {/* Vinyl Record  */}
          <motion.div
            initial={{ x: 0, scale: 0.95, opacity: 0.8 }}
            animate={{
              x: isPlaying ? 60 : 0,
              scale: isPlaying ? 1 : 0.95,
              opacity: isPlaying ? 1 : 0.8,
            }}
            transition={{
              x: {
                type: "spring",
                stiffness: 100,
                damping: 20,
              },
              scale: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.6,
              },
              opacity: {
                duration: 0.4,
              },
            }}
            className={cn(
              "vinyl-record absolute left-0 z-20 size-40 max-sm:size-36",
              "rounded-full",
              "bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#0e0e0e_58%,#050505_100%)]",
              "border border-white/10",
              isPlaying && "playing",
            )}
            style={{
              transformOrigin: "center",
              willChange: isPlaying ? "transform" : "auto",
              boxShadow:
                "inset 0 0 28px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.65)",
            }}
          >
            {/* Grooves - Static layer */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0 rounded-full opacity-90 mix-blend-overlay",
                "bg-[repeating-radial-gradient(circle_at_50%_50%,white_1px,white_1px,rgba(0,0,0,0)_2px,rgba(0,0,0,0)_15px)]",
              )}
            />

            {/* Glossy Effect  */}
            <div
              className={cn(
                "glossy-effect pointer-events-none absolute inset-0",
                "bg-[linear-gradient(105deg,rgba(255,255,255,0.0)_20%,rgba(255,255,255,0.085)_48%,rgba(255,255,255,0.0)_72%)]",
                "rounded-full",
                isPlaying && "playing",
              )}
              style={{
                transformOrigin: "center",
                willChange: isPlaying ? "transform" : "auto",
              }}
            />

            {/* Center Label */}
            <div
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "h-[34%] w-[34%] rounded-full",
                "bg-[radial-gradient(circle,#ff9b19_0%,#ff7c00_55%,#ff6200_100%)]",
                "flex items-center justify-center overflow-hidden",
              )}
              style={{
                boxShadow:
                  "inset 0 8px 18px rgba(0,0,0,0.35), 0 2px 0 rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-center text-[8px] font-bold tracking-wider text-white/90 uppercase">
                {artist.split(" ").slice(0, 2).join(" ")}
              </p>
            </div>

            {/* Spindle Hole */}
            <div
              className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/90"
              style={{
                boxShadow: "0 0 0 2px rgba(0,0,0,0.35)",
              }}
            />


            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-black/20" />
          </motion.div>
        </motion.div>
      </div>

      {/* Playing Indicator  */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 z-40 flex items-center gap-2 max-sm:right-6 sm:left-6"
          >
            <div className="absolute flex items-end gap-1">
              <div className="audio-bar audio-bar-1 w-1 rounded-tl-full rounded-tr-full bg-orange-500" />
              <div className="audio-bar audio-bar-2 w-1 rounded-tl-full rounded-tr-full bg-orange-500" />
              <div className="audio-bar audio-bar-3 w-1 rounded-tl-full rounded-tr-full bg-orange-500" />
            </div>
            <span className="ml-7 text-xs font-medium text-white/80">
              Now Playing
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── D-pad hint overlay ── */}
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-8">
        {/* Track info */}
        <div className="mb-2 text-center">
          <p className="truncate text-xs font-semibold text-white">{trackTitle}</p>
          <p className="truncate text-[10px] text-white/55">{artist}</p>
        </div>

        {/* D-pad hint + counter */}
        <div className="flex items-center justify-between">
          <p className="text-[9px] text-white/30">
            {totalSongs > 0 ? `${songIndex + 1} / ${totalSongs}` : ""}
          </p>
          <div className="flex items-center gap-2 text-[8px] text-white/30">
            <span>← prev</span>
            <span>·</span>
            <span>↓ play</span>
            <span>·</span>
            <span>→ next</span>
            <span>·</span>
            <span>↑ shuffle</span>
          </div>
        </div>
      </div>


      <AudioOnlyPlayer isPlaying={isPlaying} url={src} />
    </div>
  );
};

export default MusicPlayer;
