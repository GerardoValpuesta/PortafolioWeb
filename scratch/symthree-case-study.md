# SYMTHREE — Digital Product Studio & 3D Interactive WebGL Platform

**Rol:** Lead Engineer & Creative Developer  
**Live Demo:** [symthree.vercel.app](https://symthree.vercel.app)  
**Stack Tecnológico:** Three.js, WebGL, GLSL, TypeScript, SvelteKit, Tailwind CSS, Vercel Edge Network  

---

## 1. Contexto & Desafío de Negocio (Problem)
Las consultoras y agencias de desarrollo de software e inteligencia artificial frecuentemente utilizan páginas de aterrizaje genéricas y estáticas que no demuestran su calibre técnico a prospectos corporativos de alto ticket.

El objetivo era diseñar y desplegar una plataforma digital de grado institucional para un estudio de ingeniería de producto (Software, AI, Automatización) que combine:
- Diseño editorial dark glassmorphic de alta fidelidad.
- Visualización matemática en 3D interactiva en tiempo real sin sacrificar accesibilidad ni rendimiento móvil.
- Herramientas interactivas de conversión y captura comercial B2B.

---

## 2. Solución Técnica & Arquitectura (Architecture & Solution)

### Motor 3D en WebGL (Three.js)
- **Simulación continua de 18,000 partículas** con físicas reactivas al cursor: repulsión volumétrica espacial calculada mediante raycasting y planos proyectados 3D.
- **Metamorfosis geométrica impulsada por scroll:** interpolación suave (`lerp` con curvas `smoothstep`) entre la tríada orbital isométrica y el logotipo corporativo oficial encajado dentro de un cubo isométrico tridimensional.
- **Shaders GLSL a medida:** Renderizado en GPU de ondas radiales en el plano de suelo y textura de ruido fractal SVG procedural sin dependencias externas pesadas.

### Sistema de Navegación Responsive
- **Header flotante tipo cápsula de cristal** con blur backdrop de 28px y microinteracciones de estado activo.
- **Drawer móvil animado de pantalla completa** con gestión de prevención de scroll lock y microinteracciones fluidas a 60 FPS.

### Simulador Interactivo de ROI y Desperdicio Operativo
- **Calculadora reactiva cliente-servidor** que proyecta el costo anual de horas-hombre desperdiciadas en tareas operativas manuales y flujos fragmentados.
- **Generador de cotizaciones automatizadas:** canalización inmediata de prospectos calificados hacia WhatsApp mediante deep links parametrizados con datos del prospecto.

### Infraestructura & Rendimiento
- Arquitectura full-stack sobre **SvelteKit** y **TypeScript**, empaquetada con **Vite** y alojada en **Vercel Edge Network**.
- Tiempos de carga sub-segundo (Lighthouse 95+), carga diferida de assets y renderizado continuo a 60 FPS sin fugas de memoria (garbage collection optimizada en Three.js con buffers reutilizados).

---

## 3. Impacto & Métricas de Negocio (Results)

| Métrica | Resultado |
|---|---|
| **Rendimiento Gráfico** | 60 FPS constantes en escritorio y smartphones con 18,000 partículas |
| **Dependencias de UI** | 0 dependencias pesadas de UI externas (Shaders GLSL nativos) |
| **Tiempo de Carga** | Sub-segundo en Vercel Edge Network con code-splitting automático |
| **Conversión Comercial** | Embudo B2B cuantificado mediante calculadora interactiva y deep links a WhatsApp |

---

## 4. Aspectos Clave de Código (Highlights)

```typescript
// Fragmento de interpolación de partículas Three.js con lerp y smoothstep
function morphParticles(sourcePos: Float32Array, targetPos: Float32Array, progress: number) {
  const t = smoothstep(0.0, 1.0, progress);
  for (let i = 0; i < particleCount * 3; i++) {
    currentPos[i] = lerp(sourcePos[i], targetPos[i], t);
  }
}
```
