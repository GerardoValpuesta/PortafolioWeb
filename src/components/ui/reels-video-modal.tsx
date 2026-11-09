"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Cpu,
  Layers,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Smartphone,
} from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

export interface ReelDemo {
  id: string;
  title: string;
  badge: string;
  description: string;
  videoSrc: string;
  techHighlights: string[];
  duration: string;
}

export const REEL_DEMOS: ReelDemo[] = [
  {
    id: "unslop-skill",
    title: "Unslop: Limpia interfaces hechas con IA",
    badge: "Animado (Mascota)",
    description:
      "Reel animado con personaje y voz neuronal en español explicando cómo eliminar patrones genéricos, degradados morados y clichés de IA en interfaces web.",
    videoSrc: "/projects/gelik-reels/videos/unslop-limpia-interfaz.mp4",
    techHighlights: [
      "Motor animado con avatar modular",
      "Subtítulos cinéticos palabra por palabra",
      "Voz local Kokoro TTS en español (0$ API)",
    ],
    duration: "0:45",
  },
  {
    id: "agent-browser",
    title: "agent-browser: Navegador para Agentes IA",
    badge: "Explicativo Tech",
    description:
      "Reel explicativo sobre agent-browser (Vercel Labs), demostrando cómo un agente autónomo navega, interactúa y extrae datos en la web.",
    videoSrc: "/projects/gelik-reels/videos/agent-browser-vercel.mp4",
    techHighlights: [
      "Estilo explicativo con UI reactiva",
      "Sincronización con navegador y terminal",
      "Pipeline Remotion a 60 FPS",
    ],
    duration: "0:50",
  },
  {
    id: "lazydocker",
    title: "LazyDocker: Gestión de Docker en Terminal",
    badge: "Estilo Pixel Art",
    description:
      "Reel con estética Pixel Art y TUI terminal, enseñando a monitorear y gestionar contenedores Docker en el HomeLab sin memorizar comandos.",
    videoSrc: "/projects/gelik-reels/videos/lazydocker-homelab.mp4",
    techHighlights: [
      "Motor gráfico Pixel Art en React",
      "Sonidos SFX retro 8-bit sincronizados",
      "Renderizado headless en Docker",
    ],
    duration: "0:38",
  },
  {
    id: "3-repos-agentes",
    title: "3 Repos Clave: Goose, Mem0 y FastMCP",
    badge: "Pantalla Partida",
    description:
      "Formato de pantalla partida analizando repositorios de IA esenciales para memoria contextual (Mem0) y servidores MCP (FastMCP).",
    videoSrc: "/projects/gelik-reels/videos/3-repos-agentes-mcp.mp4",
    techHighlights: [
      "Diseño Split-Screen reactivo",
      "Alineación fonética Whisper a nivel palabra",
      "Cortes dinámicos con zoom procedural",
    ],
    duration: "0:55",
  },
];

interface ReelsVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReelsVideoModal: React.FC<ReelsVideoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<ReelDemo>(REEL_DEMOS[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Auto-play when opened
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = "";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle play/pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Handle mute toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Change active demo
  const handleSelectDemo = (demo: ReelDemo) => {
    setSelectedDemo(demo);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md transition-all"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 flex h-full max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl shadow-black/40"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-5 py-4 md:px-6">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Smartphone className="size-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-incognito text-lg md:text-xl font-bold tracking-tight text-foreground">
                      Pipeline de Reels en HomeLab · Demos en Video
                    </h3>
                    <Badge variant="outline" className="hidden sm:inline-flex border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[10px]">
                      Remotion + n8n + Kokoro
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Videos verticales 9:16 generados y renderizados programáticamente a costo $0.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="rounded-lg border border-border/60 p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Cerrar modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 no-scrollbar">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
                {/* Left Column: Smartphone Video Player (5 cols) */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-[280px] sm:w-[300px] aspect-[9/16] overflow-hidden rounded-[36px] border-[5px] border-neutral-800 bg-black shadow-2xl shadow-emerald-500/10">
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-2.5 left-1/2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />

                    {/* HTML5 Video Element */}
                    <video
                      ref={videoRef}
                      key={selectedDemo.videoSrc}
                      src={selectedDemo.videoSrc}
                      playsInline
                      loop
                      muted={isMuted}
                      autoPlay
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      className="size-full object-cover"
                    />

                    {/* Video Overlay Controls */}
                    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 bg-gradient-to-b from-black/40 via-transparent to-black/70">
                      {/* Top indicator */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="rounded-full bg-black/60 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400 backdrop-blur">
                          ● 60 FPS
                        </span>
                        <span className="rounded-full bg-black/60 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300 backdrop-blur">
                          {selectedDemo.badge}
                        </span>
                      </div>

                      {/* Bottom Controls */}
                      <div className="pointer-events-auto flex items-center justify-between pb-1">
                        <button
                          onClick={togglePlay}
                          className="flex size-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition-transform active:scale-95 hover:bg-black"
                          aria-label={isPlaying ? "Pausar" : "Reproducir"}
                        >
                          {isPlaying ? (
                            <Pause className="size-4 fill-current" />
                          ) : (
                            <Play className="size-4 fill-current ml-0.5" />
                          )}
                        </button>

                        <button
                          onClick={toggleMute}
                          className="flex size-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition-transform active:scale-95 hover:bg-black"
                          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                        >
                          {isMuted ? (
                            <VolumeX className="size-4 text-red-400" />
                          ) : (
                            <Volume2 className="size-4 text-emerald-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Demo Selector & Architecture Specs (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                      Selecciona un estilo de Reel generado:
                    </h4>

                    {/* Demos List */}
                    <div className="mt-2.5 space-y-2.5">
                      {REEL_DEMOS.map((demo) => {
                        const isSelected = selectedDemo.id === demo.id;
                        return (
                          <button
                            key={demo.id}
                            onClick={() => handleSelectDemo(demo)}
                            className={cn(
                              "w-full text-left rounded-xl border p-3.5 transition-all",
                              isSelected
                                ? "border-emerald-500/50 bg-emerald-500/10 shadow-sm"
                                : "border-border/70 bg-muted/20 hover:border-border hover:bg-muted/40"
                            )}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className={cn(
                                  "flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                                  isSelected ? "bg-emerald-500 text-black" : "bg-muted text-muted-foreground"
                                )}>
                                  {isSelected ? "▶" : "•"}
                                </span>
                                <span className="font-semibold text-sm text-foreground">
                                  {demo.title}
                                </span>
                              </div>
                              <span className="font-mono text-[10px] rounded-md border border-border/60 bg-background/80 px-2 py-0.5 text-muted-foreground">
                                {demo.badge}
                              </span>
                            </div>
                            <p className="mt-1.5 pl-7 text-xs leading-relaxed text-muted-foreground">
                              {demo.description}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tech Specs Box */}
                  <div className="rounded-xl border border-border/70 bg-muted/30 p-4">
                    <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                      <Cpu className="size-3.5 text-emerald-400" />
                      Ficha de Infraestructura &amp; Costos
                    </h5>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-3 font-mono">
                      <div className="rounded-lg border border-border/50 bg-background/60 p-2">
                        <span className="text-[10px] text-muted-foreground block">RENDER</span>
                        <span className="font-semibold text-foreground">Remotion Docker</span>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-background/60 p-2">
                        <span className="text-[10px] text-muted-foreground block">AUDIO LOCAL</span>
                        <span className="font-semibold text-emerald-400">Kokoro-82M</span>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-background/60 p-2">
                        <span className="text-[10px] text-muted-foreground block">SUBTÍTULOS</span>
                        <span className="font-semibold text-foreground">Whisper Word-Sync</span>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-background/60 p-2">
                        <span className="text-[10px] text-muted-foreground block">RESOLUCIÓN</span>
                        <span className="font-semibold text-foreground">1080×1920 (60fps)</span>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-background/60 p-2">
                        <span className="text-[10px] text-muted-foreground block">ORQUESTADOR</span>
                        <span className="font-semibold text-foreground">n8n HomeLab</span>
                      </div>
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2">
                        <span className="text-[10px] text-emerald-400 block font-bold">COSTO POR VIDEO</span>
                        <span className="font-bold text-emerald-300">$0.00 USD</span>
                      </div>
                    </div>
                  </div>

                  {/* External Link */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-muted-foreground">
                      Pipeline activo y desplegado en producción.
                    </span>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-border text-xs gap-1.5 font-medium"
                    >
                      <a
                        href="https://gelikman.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visitar gelikman.com
                        <ArrowUpRight className="size-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

