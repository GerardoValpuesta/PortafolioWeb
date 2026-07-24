"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { BackgroundNoise } from "../shared/backgrounds";
import { PortfolioBootSplash } from "../shared/portfolio-boot-splash";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import About from "./sections/about";
import Footer from "./sections/footer";
import Contact from "./sections/contact";
import Services from "./sections/services";
import Experience from "./sections/experience";
import Certifications from "./sections/certifications";

const PortfolioPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Trackeamos el scroll del contenedor local de portfolio
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // El Parallax: Hacemos que un fondo abstracto gigante flote en Y desde 0% hasta -30% 
  // a medida que bajamos. Se mueve más lento que la página. Real Parallax.
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  // Hacemos que la opacidad aparezca sutilmente después de que el usuario baje del Hero
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <>
      <div
        ref={containerRef}
        className="no-scrollbar portfolio-container relative size-full max-md:snap-none md:snap-y md:snap-proximity overflow-y-scroll overflow-x-hidden"
      >
        {/* === CAPA PARALLAX GLOBAL (Se renderiza atrás de todo, z-0) === */}
        <motion.div
          style={{ y: backgroundY, opacity: backgroundOpacity }}
          className="pointer-events-none absolute left-0 top-0 z-0 h-[150vh] w-full max-md:hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(103,208,230,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(103,208,230,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute top-0 left-1/2 h-full w-px bg-cyan-200/10" />
          <div className="absolute top-[18%] left-[8%] h-px w-72 bg-gradient-to-r from-cyan-200/0 via-cyan-200/25 to-cyan-200/0" />
          <div className="absolute top-[42%] right-[12%] h-px w-80 bg-gradient-to-r from-emerald-200/0 via-emerald-200/20 to-emerald-200/0" />
          <div className="absolute bottom-[18%] left-[22%] h-px w-64 bg-gradient-to-r from-[#F6EAC5]/0 via-[#F6EAC5]/15 to-[#F6EAC5]/0" />
        </motion.div>
        {/* ============================================================== */}

        {/* El ruido de fondo viejo que tenías. Opcional bajarle opacidad si choca. */}
        <BackgroundNoise className="z-50 opacity-10 mix-blend-overlay max-md:opacity-5" />

        <div className="h-dvh md:snap-start relative z-10">
          <PortfolioBootSplash />
        </div>

        {/* Main encapsulado en z-10 para quedar sobre el Parallax */}
        <main className="before:border-border after:border-border relative z-10 min-h-screen md:snap-start before:absolute before:top-0 before:left-0 before:h-full before:w-12 before:border-r before:bg-[linear-gradient(-135deg,_var(--color-border)_25%,_transparent_25%,_transparent_50%,_var(--color-border)_50%,_var(--color-border)_75%,_transparent_75%,_transparent)] before:bg-[length:5px_5px] after:absolute after:top-0 after:right-0 after:h-full after:w-12 after:border-l after:bg-[linear-gradient(135deg,_var(--color-border)_25%,_transparent_25%,_transparent_50%,_var(--color-border)_50%,_var(--color-border)_75%,_transparent_75%,_transparent)] after:bg-[length:5px_5px] max-md:before:hidden max-md:after:hidden md:px-12">
          <Navbar />

          <div className="min-h-[calc(100vh-4rem)] md:px-8">
            {/* Si querés que se note bien el fondo de las luces pasando por detrás, 
                acá le metí un fondo traslúcido con un blureado piola para q se luzca el parallax. */}
            <div className="min-h-[calc(100vh-4rem)] md:border-r md:border-l bg-background/40 max-md:backdrop-blur-none md:backdrop-blur-[2px] transition-colors">
              <Hero />
              <Services />
              <Projects />
              <Experience />
              <About />
              <Certifications />
              <Contact />
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PortfolioPage;
