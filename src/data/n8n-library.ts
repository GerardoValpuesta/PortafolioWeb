export interface N8nWorkflow {
  id: string;
  name: string;
  description: string;
  category:
    | "IA & Agentes"
    | "WhatsApp & Chatbots"
    | "CRM & ERP Sync"
    | "Scraping & Data"
    | "Voice & Multimodal"
    | "Finanzas & Facturación";
  tags: string[];
  nodesCount: number;
  trigger: string;
  downloadUrl: string;
  sheetUrl?: string;
  githubUrl?: string;
  features: string[];
  platform: "n8n" | "make";
  author: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  updatedAt: string;
}

export const WORKFLOW_CATEGORIES = [
  "Todos",
  "IA & Agentes",
  "WhatsApp & Chatbots",
  "CRM & ERP Sync",
  "Scraping & Data",
  "Voice & Multimodal",
  "Finanzas & Facturación",
] as const;

export const N8N_LIBRARY: N8nWorkflow[] = [
  {
    id: "linkedin-bot-autentico",
    name: "Linkedin Bot Auténtico (Generador de Posts con IA)",
    description:
      "Bot autónomo programado que consulta un archivo de contexto en Google Sheets, selecciona temas aleatorios, ejecuta un Agente IA con reglas de redacción viral y envía borradores clasificados a Telegram.",
    category: "IA & Agentes",
    tags: ["Schedule", "LangChain AI", "Telegram", "Google Sheets", "n8n Code"],
    nodesCount: 11,
    trigger: "Schedule Trigger (Diario 16:00)",
    downloadUrl: "/workflows/linkedin-bot-autentico.json",
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/1VLehRMvAzDgUiU2DipNCeYqVykxMbM6wUSuqFqJxG6U/edit?usp=sharing",
    platform: "n8n",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Avanzado",
    updatedAt: "2026",
    features: [
      "Extracción de contexto dinámico desde Google Sheets",
      "Agente IA con prompts estructurados para LinkedIn y Twitter/X",
      "Parsing automático de JSON de salida",
      "Notificaciones y entrega directa en Telegram",
    ],
  },
  {
    id: "whatsapp-ai-voice-agent",
    name: "Agente Multimodal de WhatsApp con Voz y Visión (Whisper + Claude 3.5)",
    description:
      "Flujo n8n que recibe notas de voz e imágenes por WhatsApp API, transcribe el audio con OpenAI Whisper, analiza la intención con Claude 3.5 Sonnet y responde en texto o síntesis de voz.",
    category: "WhatsApp & Chatbots",
    tags: ["WhatsApp API", "Whisper", "Claude 3.5", "n8n Webhook", "Node.js"],
    nodesCount: 14,
    trigger: "Webhook (WhatsApp Meta Business API)",
    downloadUrl: "/workflows/whatsapp-ai-voice-agent.json",
    platform: "n8n",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Avanzado",
    updatedAt: "2026",
    features: [
      "Recepción y procesamiento de notas de voz (.ogg / .mp3)",
      "Transcripción ultra-rápida con Whisper API",
      "Razonamiento contextual y visión con Claude 3.5 Sonnet",
      "Respuesta automatizada en WhatsApp API",
    ],
  },
  {
    id: "rag-document-agent-n8n",
    name: "Agente RAG de Documentos PDF & Notion con Vector DB (Supabase + OpenAI)",
    description:
      "Agente IA autónomo en n8n que procesa documentos PDF y páginas de Notion, genera embeddings vectoriales con OpenAI (text-embedding-3) y responde preguntas complejas usando búsqueda semántica RAG en Supabase.",
    category: "IA & Agentes",
    tags: ["RAG", "Vector DB", "Supabase", "OpenAI Embeddings", "n8n AI Chain"],
    nodesCount: 15,
    trigger: "Webhook / HTTP Trigger",
    downloadUrl: "/workflows/rag-document-agent-n8n.json",
    platform: "n8n",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Avanzado",
    updatedAt: "2026",
    features: [
      "Ingesta automática y chunking inteligente de archivos PDF",
      "Generación de embeddings semánticos con OpenAI",
      "Búsqueda por similitud vectorial (Cosine distance) en Supabase",
      "Generación de respuestas fundamentadas sin alucinaciones",
    ],
  },
  {
    id: "telegram-ai-task-manager",
    name: "Bot de Telegram con IA para Gestión de Tareas & Recordatorios Inteligentes",
    description:
      "Bot de Telegram impulsado por Claude 3.5 que interpreta mensajes de voz y texto para agendar reuniones en Google Calendar, crear tareas en Todoist y enviar recordatorios contextuales.",
    category: "IA & Agentes",
    tags: ["Telegram Bot", "Claude 3.5", "Google Calendar", "n8n Code"],
    nodesCount: 10,
    trigger: "Telegram Event Trigger",
    downloadUrl: "/workflows/telegram-ai-task-manager.json",
    platform: "n8n",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Intermedio",
    updatedAt: "2026",
    features: [
      "Interpreta lenguaje natural en español para agendar eventos",
      "Creación automática en Google Calendar con zona horaria local",
      "Generación de recordatorios de seguimiento",
    ],
  },
  {
    id: "prospeccion-leads-chatgpt-make",
    name: "Prospección B2B & Emailing Personalizado (Make.com + OpenAI)",
    description:
      "Escenario de automatización en Make.com que monitorea nuevas filas en Google Sheets, investiga el prospecto con OpenAI / ChatGPT y genera borradores de correo fríos hiper-personalizados.",
    category: "CRM & ERP Sync",
    tags: ["Make.com", "Google Sheets", "ChatGPT / OpenAI", "Email Automation"],
    nodesCount: 5,
    trigger: "Google Sheets (Watch Rows)",
    downloadUrl: "/workflows/prospeccion-leads-chatgpt-make.json",
    platform: "make",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Intermedio",
    updatedAt: "2025",
    features: [
      "Escuchador automático de prospectos en Google Sheets",
      "Análisis y calificación de la empresa objetivo",
      "Generación de emails fríos con tono corporativo o persuasivo",
      "Blueprint .json importable directamente en Make.com",
    ],
  },
  {
    id: "hubspot-crm-lead-enricher",
    name: "Enriquecedor de Leads CRM & Sincronización Automática con HubSpot / Salesforce",
    description:
      "Pipeline n8n que intercepta nuevos registros de formulario web, consulta APIs de datos de empresa, enriquece el perfil del prospecto con IA y crea la oportunidad en HubSpot CRM.",
    category: "CRM & ERP Sync",
    tags: ["HubSpot API", "Clearbit", "OpenAI", "Webhook", "CRM Sync"],
    nodesCount: 12,
    trigger: "Webhook (Form Submission)",
    downloadUrl: "/workflows/hubspot-crm-lead-enricher.json",
    platform: "n8n",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Avanzado",
    updatedAt: "2026",
    features: [
      "Intercepción en tiempo real de leads web",
      "Enriquecimiento de datos de dominio y tamaño de empresa",
      "Calificación de Lead Scoring basada en IA",
      "Sincronización bidireccional con HubSpot CRM",
    ],
  },
  {
    id: "web-scraping-mcp-agent",
    name: "Agente de Investigación Web & Extracción con MCP & Browserless",
    description:
      "Agente autónomo n8n conectado mediante protocolo MCP (Model Context Protocol). Navega sitios dinámicos, extrae estructuradamente competidores, precios o métricas y guarda el resumen analítico en Postgres.",
    category: "Scraping & Data",
    tags: ["MCP Protocol", "Browserless", "Puppeteer", "PostgreSQL", "n8n Code"],
    nodesCount: 16,
    trigger: "Schedule / Webhook Trigger",
    downloadUrl: "/workflows/web-scraping-mcp-agent.json",
    platform: "n8n",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Avanzado",
    updatedAt: "2026",
    features: [
      "Orquestación de navegación headless vía MCP Browser tool",
      "Extracción estructurada con validación Zod / JSON Schema",
      "Almacenamiento persistente en base de datos PostgreSQL",
      "Manejo de errores y reintentos automáticos",
    ],
  },
  {
    id: "github-pr-reviewer-claude",
    name: "Asistente de Revisión Automática de PRs en GitHub con Claude 3.5 Sonnet",
    description:
      "Webhook n8n conectado a GitHub que analiza cada Pull Request nuevo, realiza auditoría de código, detecta vulnerabilidades de seguridad y publica comentarios técnicos directamente en GitHub.",
    category: "IA & Agentes",
    tags: ["GitHub API", "Claude 3.5 Sonnet", "Code Review", "DevOps"],
    nodesCount: 9,
    trigger: "GitHub Pull Request Event",
    downloadUrl: "/workflows/github-pr-reviewer-claude.json",
    platform: "n8n",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Avanzado",
    updatedAt: "2026",
    features: [
      "Auditoría automatizada de diffs de código",
      "Detección de vulnerabilidades OWASP y code smells",
      "Comentarios estructurados directamente en el PR",
    ],
  },
  {
    id: "whatsapp-shopify-support",
    name: "Asistente de Atención al Cliente para E-Commerce con WhatsApp & Shopify",
    description:
      "Chatbot n8n integrado a Shopify y WhatsApp Meta API que responde dudas de inventario, rastrea estados de envío de pedidos y gestiona solicitudes de devoluciones 24/7.",
    category: "WhatsApp & Chatbots",
    tags: ["WhatsApp API", "Shopify GraphQL", "OpenAI GPT-4", "Customer Service"],
    nodesCount: 14,
    trigger: "WhatsApp Webhook",
    downloadUrl: "/workflows/whatsapp-shopify-support.json",
    platform: "n8n",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Avanzado",
    updatedAt: "2026",
    features: [
      "Consulta directa a GraphQL API de Shopify",
      "Respuestas personalizadas sobre número de guía de envío",
      "Atención al cliente instantánea 24/7 sin intervención humana",
    ],
  },
  {
    id: "sistema-automatico-rrss-make",
    name: "Sistema Autónomo Multicanal para Redes Sociales (Make + Perplexity + DALL-E)",
    description:
      "Automatización en Make.com que monitorea URLs en Google Sheets, sintetiza noticias con Perplexity AI (Llama 3), genera gráficos con DALL-E y publica borradores adaptados para Instagram, LinkedIn y Twitter.",
    category: "IA & Agentes",
    tags: ["Make.com", "Perplexity AI", "DALL-E 3", "Social Media", "Google Sheets"],
    nodesCount: 12,
    trigger: "Google Sheets (Watch Rows)",
    downloadUrl: "/workflows/sistema-automatico-rrss-make.json",
    platform: "make",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Intermedio",
    updatedAt: "2025",
    features: [
      "Detección de artículos en Google Sheets",
      "Síntesis de tendencias con Perplexity AI",
      "Adaptación de copy por plataforma (Instagram, Twitter, LinkedIn)",
      "Generación de arte conceptual con DALL-E",
    ],
  },
  {
    id: "receipt-scanner-telegram-notion",
    name: "Extractor & Clasificador de Gastos Financieros con Vision AI (Telegram + Notion)",
    description:
      "Bot de Telegram al que le envías fotos de tickets o facturas físicas. Extrae ítems, impuestos y fecha mediante Claude 3.5 Vision y registra el gasto categorizado en Notion.",
    category: "Finanzas & Facturación",
    tags: ["Telegram Bot", "Claude 3.5 Vision", "Notion API", "Finanzas"],
    nodesCount: 11,
    trigger: "Telegram Photo Message",
    downloadUrl: "/workflows/receipt-scanner-telegram-notion.json",
    platform: "n8n",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Intermedio",
    updatedAt: "2026",
    features: [
      "Procesamiento visual de comprobantes de pago",
      "Desglose de montos, impuestos y categoría de consumo",
      "Inserción limpia en base de datos de control financiero en Notion",
    ],
  },
  {
    id: "invoice-ocr-claude-n8n",
    name: "Procesador Autónomo de Facturas & OCR con Claude 3.5 Sonnet",
    description:
      "Pipeline n8n que recibe archivos PDF/Imágenes de facturas vía Email o Webhook, extrae montos, folios fiscales, ítems e impuestos con visión IA, y actualiza el ERP / CRM.",
    category: "Finanzas & Facturación",
    tags: ["n8n Webhook", "PDF Parsing", "Claude 3.5 Sonnet", "PostgreSQL", "ERP Sync"],
    nodesCount: 13,
    trigger: "IMAP Email Read / Webhook",
    downloadUrl: "/workflows/invoice-ocr-claude-n8n.json",
    platform: "n8n",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Avanzado",
    updatedAt: "2026",
    features: [
      "Extracción de adjuntos PDF/PNG desde correos de proveedores",
      "Lectura OCR con soporte vision de Claude 3.5 Sonnet",
      "Validación de totales, IVA y datos fiscales",
      "Inserción limpia en base de datos ERP / Google Sheets",
    ],
  },
  {
    id: "voice-support-router-n8n",
    name: "Router de Soporte por Voz & Transcripción en Tiempo Real (Groq + ElevenLabs)",
    description:
      "Agente de voz que procesa grabaciones de llamadas telefónicas o mensajes de audio, clasifica el sentimiento y urgencia del cliente con Groq (LLaMA 3.3 70B) y genera respuestas en audio con ElevenLabs.",
    category: "Voice & Multimodal",
    tags: ["Groq LLaMA 3", "ElevenLabs", "n8n Code", "Webhook", "Zendesk API"],
    nodesCount: 15,
    trigger: "Webhook (Twilio / Audio API)",
    downloadUrl: "/workflows/voice-support-router-n8n.json",
    platform: "n8n",
    author: "Gerardo Nuñez Valpuesta",
    difficulty: "Avanzado",
    updatedAt: "2026",
    features: [
      "Transcripción ultra-baja latencia con Groq Whisper",
      "Análisis de sentimiento y enrutamiento inteligente",
      "Síntesis de voz hiper-realista con ElevenLabs API",
      "Creación de ticket automático en helpdesk CRM",
    ],
  },
];
