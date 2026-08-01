"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Download,
  Copy,
  Check,
  ExternalLink,
  FileJson,
  Workflow,
  Sparkles,
  Bot,
  Table,
  Code2,
  BookOpen,
  Zap,
  Layers,
  Play,
  Globe,
  MessageSquare,
  Github,
} from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

export interface WorkflowItem {
  id: string;
  name: string;
  description: string;
  tags: string[];
  nodesCount: number;
  trigger: string;
  downloadUrl: string;
  sheetUrl?: string;
  jsonPath?: string;
  features: string[];
  platform?: "n8n" | "make";
}

interface N8nWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  workflows: WorkflowItem[];
}

export const N8nWorkflowModal: React.FC<N8nWorkflowModalProps> = ({
  isOpen,
  onClose,
  workflows,
}) => {
  const [mounted, setMounted] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedJsonId, setExpandedJsonId] = useState<string | null>(null);
  const [jsonCache, setJsonCache] = useState<Record<string, string>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const fetchJsonContent = async (wf: WorkflowItem) => {
    if (jsonCache[wf.id]) return jsonCache[wf.id];
    try {
      setLoadingId(wf.id);
      const res = await fetch(wf.downloadUrl);
      const data = await res.json();
      const formatted = JSON.stringify(data, null, 2);
      setJsonCache((prev) => ({ ...prev, [wf.id]: formatted }));
      return formatted;
    } catch (err) {
      console.error("Failed to load workflow JSON:", err);
      return null;
    } finally {
      setLoadingId(null);
    }
  };

  const handleCopyJson = async (wf: WorkflowItem) => {
    const jsonStr = await fetchJsonContent(wf);
    if (jsonStr) {
      await navigator.clipboard.writeText(jsonStr);
      setCopiedId(wf.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleTogglePreview = async (wf: WorkflowItem) => {
    if (expandedJsonId === wf.id) {
      setExpandedJsonId(null);
    } else {
      await fetchJsonContent(wf);
      setExpandedJsonId(wf.id);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-background border-border relative z-10 my-auto flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border shadow-2xl"
          >
            {/* Header */}
            <div className="border-border/60 bg-muted/30 flex items-center justify-between border-b px-6 py-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5 text-foreground border border-border/60">
                  <Workflow className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-incognito flex items-center gap-2 text-lg font-semibold text-foreground">
                    Plantillas de Automatización (n8n & Make.com)
                  </h3>
                  <p className="text-muted-foreground text-xs font-mono">
                    Descarga, previsualiza o copia los esquemas JSON para importarlos a tu entorno
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Body / Workflows List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {workflows.map((wf) => {
                const isExpanded = expandedJsonId === wf.id;
                const isCopied = copiedId === wf.id;
                const isLoading = loadingId === wf.id;
                const isMake = wf.platform === "make";

                return (
                  <div
                    key={wf.id}
                    className="border-border/60 bg-muted/10 hover:border-foreground/20 transition-colors rounded-lg border p-5 space-y-4"
                  >
                    {/* Header bar of item */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          {isMake ? (
                            <Layers className="h-4 w-4 text-purple-400" />
                          ) : (
                            <Zap className="h-4 w-4 text-amber-400" />
                          )}
                          <h4 className="font-medium text-base text-foreground">
                            {wf.name}
                          </h4>
                        </div>
                        <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                          {wf.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5">
                        {isMake ? (
                          <Badge variant="outline" className="border-purple-500/30 bg-purple-500/10 text-purple-400 font-mono text-xs flex items-center gap-1">
                            <Layers className="h-3 w-3" />
                            Make.com Scenario
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs flex items-center gap-1">
                            <Zap className="h-3 w-3" />
                            n8n Workflow
                          </Badge>
                        )}
                        <Badge variant="outline" className="border-border bg-foreground/5 text-muted-foreground font-mono text-[11px] flex items-center gap-1">
                          <Play className="h-3 w-3" />
                          {wf.trigger}
                        </Badge>
                        <Badge variant="outline" className="border-border bg-foreground/5 text-muted-foreground font-mono text-[11px]">
                          {wf.nodesCount} Nodos
                        </Badge>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {wf.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border/40 bg-foreground/5 px-2 py-0.5 text-xs font-mono text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Features list */}
                    {wf.features && wf.features.length > 0 && (
                      <div className="bg-background/50 rounded-md border border-border/40 p-3">
                        <span className="text-xs font-mono font-medium text-foreground/80 flex items-center gap-1.5 mb-2">
                          <Sparkles className="h-3.5 w-3.5 text-foreground/60" />
                          Capacidades clave del flujo:
                        </span>
                        <ul className="grid sm:grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                          {wf.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/40">
                      {/* Download JSON */}
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="font-mono text-xs gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <a href={wf.downloadUrl} download={`${wf.id}.json`}>
                          <Download className="h-3.5 w-3.5" />
                          Descargar JSON
                        </a>
                      </Button>

                      {/* Copy JSON */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopyJson(wf)}
                        disabled={isLoading}
                        className={cn(
                          "font-mono text-xs gap-1.5 border-2 transition-colors",
                          isCopied && "border-green-500/50 text-green-400 bg-green-500/10"
                        )}
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-green-400" />
                            {isMake ? "¡Copiado! Importar en Make" : "¡Copiado! Pegar en n8n"}
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            {isMake ? "Copiar JSON Make" : "Copiar JSON n8n"}
                          </>
                        )}
                      </Button>

                      {/* Google Sheet Link */}
                      {wf.sheetUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="font-mono text-xs gap-1.5 border-2"
                        >
                          <a href={wf.sheetUrl} target="_blank" rel="noopener noreferrer">
                            <Table className="h-3.5 w-3.5 text-emerald-400" />
                            Ver Google Sheet
                            <ExternalLink className="h-3 w-3 opacity-70" />
                          </a>
                        </Button>
                      )}

                      {/* Toggle Code Preview */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleTogglePreview(wf)}
                        className="font-mono text-xs gap-1.5 ml-auto text-muted-foreground hover:text-foreground"
                      >
                        <Code2 className="h-3.5 w-3.5" />
                        {isExpanded ? "Ocultar Código" : "Previsualizar JSON"}
                      </Button>
                    </div>

                    {/* Expandable JSON Code Preview */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="relative mt-3 rounded-lg border border-border bg-background p-4 font-mono text-xs">
                            <div className="flex justify-between items-center pb-2 border-b border-border text-muted-foreground mb-2">
                              <span className="flex items-center gap-1.5">
                                <FileJson className="h-3.5 w-3.5 text-foreground/70" />
                                {wf.id}.json
                              </span>
                              <span className="text-[10px] text-muted-foreground font-mono">
                                {isMake ? "Blueprint para Make.com" : "Esquema importable para n8n"}
                              </span>
                            </div>
                            <pre className="max-h-64 overflow-auto text-foreground/90 no-scrollbar select-all">
                              {jsonCache[wf.id] || "Cargando esquema JSON..."}
                            </pre>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Extra Resources Box */}
              <div className="rounded-lg border border-border/80 bg-muted/20 p-4 space-y-3">
                <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>Fuentes y Librerías Oficiales de Automatización</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Para explorar más flujos de automatización para n8n y Make.com:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href="https://n8n.io/workflows"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-mono text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <Globe className="h-3.5 w-3.5 text-amber-400" />
                    n8n Official Library
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                  <a
                    href="https://www.make.com/en/templates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-mono text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <Globe className="h-3.5 w-3.5 text-purple-400" />
                    Make.com Templates
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                  <a
                    href="https://community.n8n.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    n8n Forum
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                  <a
                    href="https://github.com/topics/n8n-workflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub Workflows
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
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
