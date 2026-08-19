const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const EDGE_PATH = `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"`;

const css = `
@page {
  size: letter;
  margin: 14mm 16mm 14mm 16mm;
}
body {
  font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
  color: #1a1a1a;
  line-height: 1.35;
  font-size: 9.5pt;
  margin: 0;
  padding: 0;
  background: #ffffff;
}
h1 {
  font-size: 18pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 2px 0;
  letter-spacing: -0.3px;
  text-transform: uppercase;
}
.subtitle {
  font-size: 10.5pt;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.2px;
}
.contact-info {
  font-size: 8.5pt;
  color: #4b5563;
  margin-bottom: 12px;
  border-bottom: 1.5px solid #2563eb;
  padding-bottom: 6px;
}
.contact-info a {
  color: #1d4ed8;
  text-decoration: none;
}
.section-title {
  font-size: 10pt;
  font-weight: 700;
  color: #1e3a8a;
  text-transform: uppercase;
  border-bottom: 1px solid #cbd5e1;
  padding-bottom: 2px;
  margin-top: 10px;
  margin-bottom: 6px;
  letter-spacing: 0.3px;
}
p {
  margin: 0 0 5px 0;
  text-align: justify;
}
ul {
  margin: 0 0 6px 0;
  padding-left: 15px;
}
li {
  margin-bottom: 3.5px;
  text-align: justify;
}
.job-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 6px;
  margin-bottom: 2px;
}
.job-title {
  font-weight: 700;
  font-size: 9.8pt;
  color: #0f172a;
}
.job-meta {
  font-size: 8.5pt;
  color: #64748b;
  font-weight: 500;
}
.job-desc {
  font-style: italic;
  color: #334155;
  margin-bottom: 4px;
  font-size: 9pt;
}
.strong {
  font-weight: 700;
}
.project-item {
  margin-bottom: 5px;
}
.project-title {
  font-weight: 700;
  color: #0f172a;
}
.page-break {
  page-break-before: always;
}
`;

const htmlES = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>${css}</style>
</head>
<body>

<h1>GERARDO NÚÑEZ VALPUESTA</h1>
<div class="subtitle">FULL-STACK ENGINEER | SVELTE, SVELTEKIT, TYPESCRIPT & LIDERAZGO TÉCNICO</div>
<div class="contact-info">
  México (GMT-6) | Remoto / Híbrido | +52 55 8442 2457 | <a href="mailto:valpuestagerardo@gmail.com">valpuestagerardo@gmail.com</a> | <a href="https://linkedin.com/in/gerardovalpuesta">linkedin.com/in/gerardovalpuesta</a> | <a href="https://gerardovalpuesta.vercel.app/">gerardovalpuesta.vercel.app</a>
</div>

<div class="section-title">PERFIL PROFESIONAL</div>
<p>
Ingeniero Full-Stack con más de 6 años de experiencia desarrollando plataformas SaaS empresariales, módulos ERP, paneles analíticos y soluciones de automatización con IA, combinando desarrollo hands-on con liderazgo técnico de equipo. Experiencia comprobable con Svelte 5 y SvelteKit —incluyendo la migración productiva de una plataforma interna de Svelte 2 a Svelte 5— además de Angular, TypeScript, Node.js, Express.js, SQL Server y Docker. He coordinado equipos de desarrollo, realizado code reviews previos a integración de ramas, participado en estimaciones y planeación técnica, identificado riesgos de seguridad, y construido agentes de IA, automatizaciones n8n e integraciones API. Enfocado en rendimiento, arquitectura mantenible y resultados de negocio medibles.
</p>

<div class="section-title">IMPACTO DESTACADO</div>
<ul>
  <li><strong>Migré Chronos</strong>, la plataforma interna de gestión de productividad y tickets de la compañía (tipo Asana, usada por todo el equipo), de Svelte 2 a Svelte 5 con SvelteKit, modernizando su sistema de ruteo y reactividad sin interrumpir su uso diario.</li>
  <li><strong>Desarrollé e implementé un agente SAT autónomo</strong> multicompañía y multi-RFC (SvelteKit, Svelte, Tauri y Node.js/Express.js) que automatiza flujos de CFDI de extremo a extremo: autenticación CIEC/e.firma, resolución de CAPTCHA con IA, procesos batch programados de descarga y conciliación de archivos, y entrega de paquetes listos para contabilidad —reduciendo el tiempo de procesamiento en 95% (de días a ~5 minutos por sesión). Incluí un copiloto de IA para detectar pendientes y riesgos fiscales, apoyar la conciliación bancaria y generar reportes contables y ejecutivos para el cierre mensual.</li>
</ul>

<div class="section-title">COMPETENCIAS TÉCNICAS</div>
<p><strong>Full Stack y Frontend:</strong> Svelte 5, SvelteKit, Angular, TypeScript, JavaScript, React, Next.js, React Native, Vite, HTML5, CSS, Tailwind CSS, RxJS, PWA (IndexedDB, offline-first), Lazy Loading, Code Splitting, Web Performance Optimization.</p>
<p><strong>Backend y datos:</strong> Node.js, Express.js, REST APIs, SQL Server, MongoDB, SQLite, Firebase, autenticación JWT, Role-Based Access Control (RBAC), procesos batch y jobs programados.</p>
<p><strong>Mapas y reportes:</strong> Mapbox, Leaflet, generación de reportes en PDF y Excel.</p>
<p><strong>IA y automatización:</strong> AI Automation, AI Agents, n8n, LLMOps, Large Language Models (GPT-4, Claude, Gemini), Model Context Protocol (MCP), Prompt Engineering, Workflow Automation, API Integration, RPA.</p>
<p><strong>DevOps y herramientas:</strong> Docker, Git, GitHub, Vercel, Railway, Playwright, Tauri, Agile / Scrum.</p>
<p><strong>Liderazgo técnico:</strong> Coordinación de equipos de desarrollo, code reviews, estimaciones y planeación técnica, identificación de riesgos, definición de buenas prácticas de control de versiones.</p>

<div class="section-title">EXPERIENCIA PROFESIONAL</div>

<div class="job-header">
  <span class="job-title">Líder Técnico / Full-Stack | Ximplify</span>
  <span class="job-meta">2022 - Presente | México | Remoto | Tiempo completo</span>
</div>
<div class="job-desc">Desarrollo y liderazgo técnico de plataformas SaaS empresariales, módulos ERP, agentes de IA y automatizaciones, coordinando un equipo de 2 desarrolladores y participando directamente en el desarrollo de funcionalidades complejas.</div>
<ul>
  <li>Lideré la migración de Chronos, plataforma interna de productividad tipo Asana, de Svelte 2 a Svelte 5 con SvelteKit y Vite, incorporando TypeScript, Tailwind CSS y SQL Server como base de datos, y adoptando el nuevo sistema de reactividad (runes) y el ruteo nativo del framework.</li>
  <li>Rediseñé y reconstruí XAMAI Client Portal 2.0 (gestión de clientes y habilitación de accesos a Conta-e, Facture-e y plataformas relacionadas) con SvelteKit, Svelte, TypeScript, CSS, Bootstrap, Tailwind CSS, SQL Server y autenticación JWT, logrando 90% de mejora en satisfacción de usuarios y 85% de reducción en tiempo de carga inicial mediante lazy loading y code splitting.</li>
  <li>Desarrollé el SAT Agent, un agente de IA autónomo empaquetado con Tauri (SvelteKit, Svelte, TypeScript, Tailwind CSS en el frontend; Node.js/Express.js y SQLite en el backend, todo containerizado con Docker), usando Playwright para automatizar el navegador (login CIEC/e.firma, resolución de CAPTCHA y descarga de archivos) dentro de procesos batch programados de descarga, conciliación y carga de comprobantes fiscales, reduciendo el tiempo de procesamiento 95% y los faltantes de comprobantes en 100%.</li>
  <li>Coordiné y di seguimiento técnico a un equipo de 2 desarrolladores durante 2.5 años: realicé code reviews en GitHub previos a cada integración de ramas, participé en estimaciones de esfuerzo y planeación de sprints bajo metodología Scrum, e identifiqué riesgos de seguridad (posibles fugas en rutas/endpoints) antes de despliegue a producción.</li>
  <li>Lideré la migración de Angular 12 a Angular 17 con RxJS, sin downtime ni regresiones para usuarios; actualmente realizo la migración de Conta-e de Angular a Svelte, componente por componente.</li>
  <li>Reduje hasta 50% del trabajo operativo manual mediante pipelines de automatización con n8n, MCP e integraciones con LLMs (GPT-4, Claude, Gemini).</li>
</ul>

<div class="job-header">
  <span class="job-title">Desarrollador Frontend | Stan Semper Crasol</span>
  <span class="job-meta">2020 - 2022 | México | Contrato</span>
</div>
<div class="job-desc">Desarrollo de interfaces administrativas, landing pages, aplicaciones Android y dashboards en tiempo real para proyectos de videovigilancia y logística.</div>
<ul>
  <li>Construí 3 landing pages en HTML5, CSS y JavaScript con puntuaciones de 95+ en todas las categorías de Lighthouse.</li>
  <li>Desarrollé una app Android en Kotlin para reportes de campo con fotos, GPS, números de serie y sincronización automática mediante Firebase, generando reportes en PDF y Excel en tiempo real; proyecto ganador de la licitación C5 en 2021.</li>
  <li>Integré APIs REST y pasarelas de pago como Stripe y OpenPay, mapas interactivos con Mapbox, además de dashboards de logística en tiempo real con WebSockets y Bootstrap.</li>
</ul>

<div class="section-title">PROYECTOS SELECCIONADOS</div>
<div class="project-item"><strong>CRM de WhatsApp con IA:</strong> Desarrollé y validé un CRM para WhatsApp integrado con IA y desplegado en Vercel, diseñado para centralizar conversaciones, automatizar la atención inicial y dar seguimiento a prospectos mediante flujos conversacionales.</div>
<div class="project-item"><strong>Bolddy - Red Social Deportiva:</strong> Desarrollo activo de una aplicación móvil full-stack en TypeScript para descubrir y unirse a actividades deportivas, con backend en Node.js, MongoDB y Railway, API REST, autenticación JWT, geolocalización y mapas con Leaflet, notificaciones push y gamificación.</div>
<div class="project-item"><strong>StudioKin - Portafolio de Agencia Creativa:</strong> Desarrollé un portafolio interactivo para una agencia creativa con demostraciones funcionales de proyectos de clientes, usando Next.js, React y TypeScript.</div>
<div class="project-item"><strong>Herramientas PWA (uso propio):</strong>
  <ul>
    <li><strong>Expense Tracker:</strong> PWA en TypeScript y Tailwind CSS para control de gastos con categorías, gráficas y presupuesto mensual; almacenamiento offline-first con IndexedDB, sincronización automática al recuperar conexión e instalable como app nativa.</li>
    <li><strong>TO-DO conectado a Chronos:</strong> PWA ligera (SvelteKit) para registrar actividades y tareas por sprint sin necesidad de entrar a la plataforma web completa, agilizando el registro diario del equipo.</li>
  </ul>
</div>

<div class="section-title">EDUCACIÓN Y FORMACIÓN</div>
<p><strong>Ingeniería en Sistemas Computacionales</strong> | Universidad UTEL | 2022</p>
<p><strong>Técnico en Programación</strong> | Universidad UTEL | 2015</p>
<p><strong>Cursos relevantes:</strong> Agentes IA con n8n, MCP, WhatsApp y Voz; Chatbots e Inteligencia Artificial; Angular; JavaScript Moderno; Tailwind CSS, Next.js y Svelte; SQL Server Transact-SQL; Android con Kotlin; Go para Backend.</p>

<div class="section-title">IDIOMAS</div>
<p><strong>Español:</strong> Nativo | <strong>Inglés:</strong> Intermedio (B1)</p>

<div class="section-title">PORTAFOLIO</div>
<p><a href="https://gerardovalpuesta.vercel.app/">https://gerardovalpuesta.vercel.app/</a></p>

</body>
</html>
`;

const htmlEN = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>${css}</style>
</head>
<body>

<h1>GERARDO NÚÑEZ VALPUESTA</h1>
<div class="subtitle">FULL-STACK ENGINEER | SVELTE, SVELTEKIT, TYPESCRIPT & TECHNICAL LEADERSHIP</div>
<div class="contact-info">
  Mexico (GMT-6) | Remote / Hybrid | +52 55 8442 2457 | <a href="mailto:valpuestagerardo@gmail.com">valpuestagerardo@gmail.com</a> | <a href="https://linkedin.com/in/gerardovalpuesta">linkedin.com/in/gerardovalpuesta</a> | <a href="https://gerardovalpuesta.vercel.app/">gerardovalpuesta.vercel.app</a>
</div>

<div class="section-title">PROFESSIONAL SUMMARY</div>
<p>
Full-Stack Engineer with 6+ years of experience building enterprise SaaS platforms, ERP modules, analytics dashboards, and AI automation solutions, combining hands-on development with technical team leadership. Proven track record with Svelte 5 and SvelteKit —including the production migration of an internal platform from Svelte 2 to Svelte 5— alongside Angular, TypeScript, Node.js, Express.js, SQL Server, and Docker. Coordinated engineering teams, conducted pre-merge GitHub code reviews, estimated technical effort, identified security risks, and built autonomous AI agents, n8n automations, and API integrations. Focused on performance, maintainable architecture, and measurable business ROI.
</p>

<div class="section-title">HIGHLIGHTED IMPACT</div>
<ul>
  <li><strong>Migrated Chronos</strong>, the company's internal ticket & productivity management platform (Asana-like, used by the entire team), from Svelte 2 to Svelte 5 with SvelteKit, modernizing its routing and reactivity system without interrupting daily operations.</li>
  <li><strong>Engineered and deployed an autonomous desktop SAT Tax AI Agent</strong> multi-company and multi-RFC (SvelteKit, Svelte, Tauri, Node.js/Express.js) that automates end-to-end CFDI tax voucher workflows: CIEC/e.firma auth, AI CAPTCHA solving, scheduled batch downloads/reconciliation, and accounting-ready package delivery —reducing processing time by 95% (from days to ~5 mins per session). Included an AI Copilot to detect tax risks, assist in bank reconciliation, and generate executive monthly closing reports.</li>
</ul>

<div class="section-title">TECHNICAL SKILLS</div>
<p><strong>Full Stack & Frontend:</strong> Svelte 5, SvelteKit, Angular, TypeScript, JavaScript, React, Next.js, React Native, Vite, HTML5, CSS, Tailwind CSS, RxJS, PWA (IndexedDB, offline-first), Lazy Loading, Code Splitting, Web Performance Optimization.</p>
<p><strong>Backend & Data:</strong> Node.js, Express.js, REST APIs, SQL Server, MongoDB, SQLite, Firebase, JWT Auth, Role-Based Access Control (RBAC), scheduled batch jobs.</p>
<p><strong>Maps & Reports:</strong> Mapbox, Leaflet, PDF & Excel report generation.</p>
<p><strong>AI & Automation:</strong> AI Automation, AI Agents, n8n, LLMOps, Large Language Models (GPT-4, Claude, Gemini), Model Context Protocol (MCP), Prompt Engineering, Workflow Automation, API Integration, RPA.</p>
<p><strong>DevOps & Tools:</strong> Docker, Git, GitHub, Vercel, Railway, Playwright, Tauri, Agile / Scrum.</p>
<p><strong>Technical Leadership:</strong> Team coordination, code reviews, sprint estimation & technical planning, security risk identification, version control best practices.</p>

<div class="section-title">PROFESSIONAL EXPERIENCE</div>

<div class="job-header">
  <span class="job-title">Technical Lead / Full-Stack | Ximplify</span>
  <span class="job-meta">2022 - Present | Mexico | Remote | Full-time</span>
</div>
<div class="job-desc">Technical leadership and development of enterprise SaaS platforms, ERP modules, AI agents, and automations, leading a 2-developer team while driving hands-on implementation of complex features.</div>
<ul>
  <li>Led the migration of Chronos, internal Asana-like productivity platform, from Svelte 2 to Svelte 5 with SvelteKit & Vite, integrating TypeScript, Tailwind CSS, and SQL Server, while adopting runes reactivity and native framework routing.</li>
  <li>Redesigned and rebuilt XAMAI Client Portal 2.0 (client management and access enabling for Conta-e, Facture-e) with SvelteKit, Svelte, TypeScript, CSS, Bootstrap, Tailwind CSS, SQL Server, and JWT, achieving a 90% boost in user satisfaction and an 85% initial load speedup via lazy loading and code splitting.</li>
  <li>Developed the SAT Agent, an autonomous AI desktop agent built with Tauri (SvelteKit, Svelte, TypeScript, Tailwind CSS on frontend; Node.js/Express.js and SQLite on backend, containerized with Docker), using Playwright to automate browser workflows (CIEC/e.firma login, CAPTCHA solving, file downloads) in scheduled batch jobs, cutting processing time by 95% and missing vouchers by 100%.</li>
  <li>Coordinated and provided technical mentorship for a 2-developer team over 2.5 years: conducted GitHub code reviews before branch merges, participated in effort estimation under Scrum, and identified security risks (endpoint/route leaks) prior to production deployment.</li>
  <li>Led framework migration from Angular 12 to Angular 17 with RxJS without downtime or user regressions; currently migrating Conta-e from Angular to Svelte component by component.</li>
  <li>Reduced manual operational overhead by up to 50% by building n8n automation pipelines, MCP servers, and LLM integrations (GPT-4, Claude, Gemini).</li>
</ul>

<div class="job-header">
  <span class="job-title">Frontend Developer | Stan Semper Crasol</span>
  <span class="job-meta">2020 - 2022 | Mexico | Contract</span>
</div>
<div class="job-desc">Development of admin interfaces, high-performance landing pages, Android field apps, and real-time logistics dashboards for surveillance and logistics projects.</div>
<ul>
  <li>Constructed 3 client landing pages in HTML5, CSS, and JavaScript scoring 95+ across all Lighthouse audit categories.</li>
  <li>Developed an offline-first Kotlin Android app for field inspection reports with photo capture, GPS, serial number tracking, and automated Firebase sync generating real-time PDF/Excel reports; winning project for the C5 government tender in 2021.</li>
  <li>Integrated REST APIs, payment gateways (Stripe, OpenPay), Mapbox interactive maps, and real-time logistics dashboards via WebSockets and Bootstrap.</li>
</ul>

<div class="section-title">SELECTED PROJECTS</div>
<div class="project-item"><strong>AI WhatsApp CRM:</strong> Developed and validated an AI-powered WhatsApp CRM deployed on Vercel to centralize conversations, automate initial qualification, and execute conversational follow-up flows with prospects.</div>
<div class="project-item"><strong>Bolddy - Sports Social Network:</strong> Active full-stack development of a cross-platform mobile app in TypeScript for discovering and joining athletic activities, with Node.js, MongoDB, and Railway backend, REST API, JWT auth, Leaflet maps, push notifications, and gamification.</div>
<div class="project-item"><strong>StudioKin - Creative Agency Portfolio:</strong> Developed an interactive portfolio for a creative agency with functional client project web demos using Next.js, React, and TypeScript.</div>
<div class="project-item"><strong>PWA Tools (Personal Use):</strong>
  <ul>
    <li><strong>Expense Tracker:</strong> Offline-first PWA in TypeScript and Tailwind CSS with IndexedDB storage, category charts, and monthly budget management.</li>
    <li><strong>TO-DO connected to Chronos:</strong> Lightweight SvelteKit PWA for logging sprint tasks without accessing the full web platform, speeding up daily team logging.</li>
  </ul>
</div>

<div class="section-title">EDUCATION & FORMATION</div>
<p><strong>B.S. in Computer Systems Engineering</strong> | UTEL University | 2022</p>
<p><strong>Software Programming Technician</strong> | UTEL University | 2015</p>
<p><strong>Relevant Courses:</strong> AI Agents with n8n, MCP, WhatsApp & Voice; Chatbots & Artificial Intelligence; Angular; Modern JavaScript; Tailwind CSS, Next.js & Svelte; SQL Server Transact-SQL; Android with Kotlin; Go for Backend.</p>

<div class="section-title">LANGUAGES</div>
<p><strong>Spanish:</strong> Native | <strong>English:</strong> Intermediate (B1)</p>

<div class="section-title">PORTFOLIO</div>
<p><a href="https://gerardovalpuesta.vercel.app/">https://gerardovalpuesta.vercel.app/</a></p>

</body>
</html>
`;

const scratchDir = path.join(__dirname);
const publicDir = path.join(__dirname, '..', 'public');

const esHtmlPath = path.join(scratchDir, 'cv_es.html');
const enHtmlPath = path.join(scratchDir, 'cv_en.html');

fs.writeFileSync(esHtmlPath, htmlES);
fs.writeFileSync(enHtmlPath, htmlEN);

const esPdfPath = path.join(publicDir, 'Gerardo_Nunez_Valpuesta_CV.pdf');
const enPdfPath = path.join(publicDir, 'Gerardo_Nunez_Valpuesta_CV_EN.pdf');

console.log('Generating ES PDF...');
execSync(`${EDGE_PATH} --headless --no-pdf-header-footer --print-to-pdf="${esPdfPath}" "${esHtmlPath}"`);
console.log('Generated:', esPdfPath);

console.log('Generating EN PDF...');
execSync(`${EDGE_PATH} --headless --no-pdf-header-footer --print-to-pdf="${enPdfPath}" "${enHtmlPath}"`);
console.log('Generated:', enPdfPath);
