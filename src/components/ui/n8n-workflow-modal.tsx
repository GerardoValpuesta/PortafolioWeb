"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  Zap,
  Layers,
  Play,
  Globe,
  MessageSquare,
  Github,
  Search,
  BookOpen,
  Table,
  Code2,
  Filter,
  User,
  Info,
} from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import {
  N8N_LIBRARY,
  WORKFLOW_CATEGORIES,
  N8nWorkflow,
} from "@/data/n8n-library";

export type WorkflowItem = N8nWorkflow;

interface N8nWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  workflows?: WorkflowItem[];
}

export const N8nWorkflowModal: React.FC<N8nWorkflowModalProps> = ({
  isOpen,
  onClose,
  workflows: initialWorkflows,
}) => {
  const [mounted, setMounted] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedJsonId, setExpandedJsonId] = useState<string | null>(null);
  const [jsonCache, setJsonCache] = useState<Record<string, string>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedPlatform, setSelectedPlatform] = useState<"all" | "n8n" | "make">("all");

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

  // Combine provided workflows with central library so all workflows are accessible
  const allWorkflows = useMemo(() => {
    const map = new Map<string, WorkflowItem>();
    N8N_LIBRARY.forEach((item) => map.set(item.id, item));

    if (initialWorkflows && initialWorkflows.length > 0) {
      initialWorkflows.forEach((item) => {
        const existing = map.get(item.id);
        if (existing) {
          map.set(item.id, {
            ...existing,
            ...item,
            category: (item as any).category || existing.category || "IA & Agentes",
          });
        } else {
          map.set(item.id, {
            ...item,
            category: (item as any).category || "IA & Agentes",
          } as WorkflowItem);
        }
      });
    }
    return Array.from(map.values());
  }, [initialWorkflows]);

  // Filtered Workflows
  const filteredWorkflows = useMemo(() => {
    return allWorkflows.filter((wf) => {
      // Category filter
      if (selectedCategory !== "Todos" && wf.category !== selectedCategory) {
        return false;
      }
      // Platform filter
      if (selectedPlatform !== "all" && wf.platform !== selectedPlatform) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = wf.name.toLowerCase().includes(q);
        const descMatch = wf.description.toLowerCase().includes(q);
        const tagsMatch = wf.tags.some((t) => t.toLowerCase().includes(q));
        const featuresMatch = wf.features?.some((f) => f.toLowerCase().includes(q));
        return nameMatch || descMatch || tagsMatch || featuresMatch;
      }
      return true;
    });
  }, [allWorkflows, selectedCategory, selectedPlatform, searchQuery]);

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
      setTimeout(() => setCopiedId(null), 3000);
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

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Todos");
    setSelectedPlatform("all");
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-background border-border/80 relative z-10 my-auto flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border shadow-2xl"
          >
            {/* Header */}
            <div className="border-border/60 bg-muted/40 flex items-center justify-between border-b px-5 py-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-incognito flex items-center gap-2 text-lg font-semibold text-foreground">
                    Biblioteca de Automatizaciones & Agentes IA
                    <span className="hidden sm:inline-block rounded-full bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 text-[11px] font-mono text-amber-400 font-normal">
                      {allWorkflows.length} Plantillas
                    </span>
                  </h3>
                  <p className="text-muted-foreground text-xs font-mono">
                    Esquemas importables para n8n y Make.com · Diseñados por Gerardo Nuñez
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Filter & Search Bar */}
            <div className="border-border/60 bg-muted/20 border-b px-5 py-3 space-y-3 shrink-0">
              {/* Row 1: Search input + Platform filter */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Search input */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar por nombre, tecnología (Claude, WhatsApp, MCP, Code)..."
                    className="w-full bg-background border border-border/80 rounded-lg pl-9 pr-8 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                {/* Platform Selector */}
                <div className="flex items-center gap-1 bg-background border border-border/80 rounded-lg p-1 shrink-0 self-start sm:self-auto">
                  <button
                    onClick={() => setSelectedPlatform("all")}
                    className={cn(
                      "px-3 py-1 text-xs font-mono rounded-md transition-colors",
                      selectedPlatform === "all"
                        ? "bg-muted text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => setSelectedPlatform("n8n")}
                    className={cn(
                      "px-3 py-1 text-xs font-mono rounded-md transition-colors flex items-center gap-1",
                      selectedPlatform === "n8n"
                        ? "bg-amber-500/15 border border-amber-500/30 text-amber-400 font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Zap className="h-3 w-3" />
                    n8n
                  </button>
                  <button
                    onClick={() => setSelectedPlatform("make")}
                    className={cn(
                      "px-3 py-1 text-xs font-mono rounded-md transition-colors flex items-center gap-1",
                      selectedPlatform === "make"
                        ? "bg-purple-500/15 border border-purple-500/30 text-purple-400 font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Layers className="h-3 w-3" />
                    Make.com
                  </button>
                </div>
              </div>

              {/* Row 2: Category Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1 pb-0.5">
                <span className="text-[11px] font-mono text-muted-foreground shrink-0 flex items-center gap-1 pr-1">
                  <Filter className="h-3 w-3" />
                  Categoría:
                </span>
                {WORKFLOW_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "whitespace-nowrap px-3 py-1 text-xs rounded-full border font-mono transition-all shrink-0",
                        isActive
                          ? "bg-amber-500/15 border-amber-500/40 text-amber-400 shadow-sm"
                          : "bg-background border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                      )}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Usage Tip */}
            <div className="bg-amber-500/5 border-b border-amber-500/10 px-5 py-2 flex items-center gap-2 text-xs text-amber-400/90 font-mono shrink-0">
              <Info className="h-3.5 w-3.5 shrink-0 text-amber-400" />
              <span>
                <b>Tip de uso:</b> Haz clic en <b>"Copiar JSON"</b>, abre tu canvas en n8n o Make.com y presiona <kbd className="bg-background border border-amber-500/30 px-1 py-0.5 rounded text-[10px] text-amber-300">Ctrl + V</kbd> para pegar el flujo completo.
              </span>
            </div>

            {/* Body / Workflows List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {filteredWorkflows.length === 0 ? (
                <div className="py-12 text-center space-y-3">
                  <Workflow className="h-10 w-10 text-muted-foreground/40 mx-auto" />
                  <p className="text-sm font-medium text-muted-foreground">
                    No se encontraron automatizaciones que coincidan con los filtros.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleResetFilters}
                    className="font-mono text-xs"
                  >
                    Restablecer Filtros
                  </Button>
                </div>
              ) : (
                filteredWorkflows.map((wf) => {
                  const isExpanded = expandedJsonId === wf.id;
                  const isCopied = copiedId === wf.id;
                  const isLoading = loadingId === wf.id;
                  const isMake = wf.platform === "make";

                  return (
                    <div
                      key={wf.id}
                      className="border-border/70 bg-card hover:border-foreground/25 transition-all rounded-xl border p-5 space-y-4 shadow-sm"
                    >
                      {/* Header bar of item */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-1 max-w-2xl">
                          <div className="flex items-center gap-2">
                            {isMake ? (
                              <Layers className="h-4 w-4 text-purple-400 shrink-0" />
                            ) : (
                              <Zap className="h-4 w-4 text-amber-400 shrink-0" />
                            )}
                            <h4 className="font-semibold text-base text-foreground">
                              {wf.name}
                            </h4>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {wf.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5">
                          {isMake ? (
                            <Badge
                              variant="outline"
                              className="border-purple-500/30 bg-purple-500/10 text-purple-400 font-mono text-xs flex items-center gap-1"
                            >
                              <Layers className="h-3 w-3" />
                              Make.com
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs flex items-center gap-1"
                            >
                              <Zap className="h-3 w-3" />
                              n8n
                            </Badge>
                          )}
                          <Badge
                            variant="outline"
                            className="border-border bg-muted/60 text-muted-foreground font-mono text-[11px] flex items-center gap-1"
                          >
                            <Play className="h-3 w-3 text-muted-foreground/70" />
                            {wf.trigger}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-border bg-muted/60 text-muted-foreground font-mono text-[11px]"
                          >
                            {wf.nodesCount} Nodos
                          </Badge>
                          {wf.difficulty && (
                            <Badge
                              variant="outline"
                              className="border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[11px]"
                            >
                              {wf.difficulty}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Author & Category metadata */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                        <span className="flex items-center gap-1 text-foreground/80">
                          <User className="h-3 w-3 text-amber-400" />
                          {wf.author || "Gerardo Nuñez Valpuesta"}
                        </span>
                        <span>•</span>
                        <span className="text-amber-400/90">{wf.category}</span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {wf.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border/50 bg-muted/50 px-2 py-0.5 text-xs font-mono text-muted-foreground"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Features list */}
                      {wf.features && wf.features.length > 0 && (
                        <div className="bg-muted/30 rounded-lg border border-border/50 p-3">
                          <span className="text-xs font-mono font-medium text-foreground/90 flex items-center gap-1.5 mb-2">
                            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                            Funcionalidades clave del flujo:
                          </span>
                          <ul className="grid sm:grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                            {wf.features.map((feat, i) => (
                              <li key={i} className="flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70 shrink-0" />
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
                            "font-mono text-xs gap-1.5 border-2 transition-all",
                            isCopied
                              ? "border-green-500/60 text-green-400 bg-green-500/15 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                              : "hover:border-amber-500/50"
                          )}
                        >
                          {isCopied ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-green-400" />
                              {isMake
                                ? "¡Copiado! Pegar en Make"
                                : "¡Copiado! Pegar en n8n (Ctrl+V)"}
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
                            className="font-mono text-xs gap-1.5 border"
                          >
                            <a
                              href={wf.sheetUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Table className="h-3.5 w-3.5 text-emerald-400" />
                              Google Sheet
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
                            <div className="relative mt-3 rounded-xl border border-border/80 bg-black/70 p-4 font-mono text-xs">
                              <div className="flex justify-between items-center pb-2.5 border-b border-border/60 text-muted-foreground mb-2">
                                <span className="flex items-center gap-1.5 font-medium text-foreground/90">
                                  <FileJson className="h-4 w-4 text-amber-400" />
                                  {wf.id}.json
                                </span>
                                <span className="text-[11px] text-muted-foreground font-mono">
                                  {isMake
                                    ? "Blueprint para Make.com"
                                    : "Esquema importable para n8n"}
                                </span>
                              </div>
                              <pre className="max-h-72 overflow-auto text-amber-200/90 no-scrollbar select-all leading-relaxed">
                                {jsonCache[wf.id] || "Cargando esquema JSON..."}
                              </pre>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              )}

              {/* Footer Links & Info */}
              <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-3">
                <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                  <BookOpen className="h-4 w-4 text-amber-400" />
                  <span>Recursos & Documentación Oficial</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Todas las plantillas están formateadas según la especificación JSON de n8n v1+ y Make.com Blueprints.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href="https://n8n.io/workflows"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background px-3 py-1.5 text-xs font-mono text-foreground hover:bg-muted transition-colors"
                  >
                    <Globe className="h-3.5 w-3.5 text-amber-400" />
                    n8n Official Workflows
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                  <a
                    href="https://www.make.com/en/templates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background px-3 py-1.5 text-xs font-mono text-foreground hover:bg-muted transition-colors"
                  >
                    <Globe className="h-3.5 w-3.5 text-purple-400" />
                    Make.com Templates
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                  <a
                    href="https://community.n8n.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    Comunidad n8n
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                  <a
                    href="https://github.com/topics/n8n-workflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
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
