"use client";

import { cn } from "@/lib/utils";
import { XIcon, MenuIcon, Volume2Icon, VolumeXIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggleButton2 } from "../../theme-toggle";
import { Logo } from "../../ui/logo";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { useIsSoundEnabled } from "@/store/use-sound-enabled";
import { useLanguage } from "@/store/use-language";
import { useIsClient } from "@uidotdev/usehooks";

const NAV_LINKS = [
  { id: "home", labelEn: "Home", labelEs: "Inicio" },
  { id: "projects", labelEn: "Projects", labelEs: "Proyectos" },
  { id: "catalog", labelEn: "Websites", labelEs: "Sitios" },
  { id: "experience", labelEn: "Experience", labelEs: "Trayectoria" },
  { id: "about", labelEn: "About", labelEs: "Sobre mí" },
  { id: "contact", labelEn: "Contact", labelEs: "Contacto" },
] as const;

type NavId = (typeof NAV_LINKS)[number]["id"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<NavId>("home");
  const { isSoundEnabled, toggleSoundEnabled } = useIsSoundEnabled();
  const { language, toggleLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const activeTabRef = useRef<HTMLAnchorElement | null>(null);

  // Update active tab from URL hash & Scroll Spy
  useEffect(() => {
    const ids = NAV_LINKS.map((x) => x.id);
    const setFromHash = () => {
      const hash =
        (typeof window !== "undefined" && window.location.hash) || "";
      const id = (hash.replace("#", "") || "home") as NavId;
      if (ids.includes(id)) setActive(id);
    };
    setFromHash();
    window.addEventListener("hashchange", setFromHash);

    const scrollContainer = document.querySelector(".portfolio-container");

    const handleScroll = () => {
      const scrollTop = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
      if (scrollTop < 80) {
        setActive("home");
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    // Scroll spy observer for sections
    const observerOptions: IntersectionObserverInit = {
      root: scrollContainer || null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id") as NavId;
          if (id && ids.includes(id)) {
            setActive(id);
          }
        }
      });
    }, observerOptions);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", setFromHash);
      observer.disconnect();
    };
  }, []);

  // Compute clip-path for animated tabs highlight
  const updateClip = () => {
    const container = overlayRef.current;
    const target = activeTabRef.current;
    if (!container || !target) return;

    const cRect = container.getBoundingClientRect();
    const tRect = target.getBoundingClientRect();

    // Position of the active tab relative to the overlay container
    let left = tRect.left - cRect.left;
    let right = cRect.right - tRect.right;

    // Small padding so the highlight looks cushioned
    const pad = 6;
    left = Math.max(0, left - pad);
    right = Math.max(0, right - pad);

    const leftPct = (left / cRect.width) * 100;
    const rightPct = (right / cRect.width) * 100;

    container.style.clipPath = `inset(0 ${rightPct.toFixed(2)}% 0 ${leftPct.toFixed(2)}% round 17px)`;
  };

  useEffect(() => {
    // Update after layout settles
    const id = requestAnimationFrame(updateClip);
    window.addEventListener("resize", updateClip);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", updateClip);
    };
  }, [active, language]);

  const handleNavClick = (id: NavId, e?: React.MouseEvent) => {
    e?.preventDefault();
    setActive(id);

    const targetElement = document.getElementById(id);
    const scrollContainer = document.querySelector(".portfolio-container") || window;

    if (targetElement) {
      const containerEl = scrollContainer instanceof HTMLElement ? scrollContainer : null;
      // If mobile sheet was open, its height inflated targetTop. Subtract it to avoid overshooting after collapse.
      const sheetEl = document.querySelector(".mobile-menu-sheet");
      const sheetHeight = open && sheetEl ? sheetEl.getBoundingClientRect().height : 0;

      const containerTop = containerEl ? containerEl.getBoundingClientRect().top : 0;
      const targetTop = targetElement.getBoundingClientRect().top;
      const currentScrollTop = containerEl ? containerEl.scrollTop : window.scrollY;

      // Base sticky navbar height (~65px) so section titles & hero are cleanly positioned below header
      const navOffset = 65;
      const targetY = currentScrollTop + (targetTop - containerTop) - sheetHeight - navOffset;

      setOpen(false);

      if (containerEl) {
        containerEl.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      } else {
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md px-4 py-2.5 md:px-8 transition-all duration-300 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          className="group relative inline-flex items-center"
          onClick={(e) => handleNavClick("home", e)}
        >
          <div className="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 duration-200 group-hover:-top-1 group-hover:-left-1" />
          <Logo className="w-14" hover />
          <div className="absolute -right-2 -bottom-2 h-4 w-4 border-r-2 border-b-2 duration-200 group-hover:-right-1 group-hover:-bottom-1" />
        </a>

        {/* Desktop Nav */}
        <div className="bg-background/50 font-incognito relative hidden items-center backdrop-blur-sm md:flex">
          {/* Overlay layer  */}
          <div
            ref={overlayRef}
            className="pointer-events-none absolute inset-1.5 z-10 w-full overflow-hidden rounded-full [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]"
          >
            <div className="bg-foreground/10 relative flex gap-1 rounded-full border px-2 py-1">
              {NAV_LINKS.map((x) => (
                <div
                  key={x.id}
                  className="text-foreground flex items-center rounded-full px-4 py-1.5 text-sm font-medium opacity-0"
                >
                  {language === "en" ? x.labelEn : x.labelEs}
                </div>
              ))}
            </div>
          </div>

          {/* Clickable layer */}
          <div className="relative z-20 flex items-center gap-1 rounded-full border px-4 py-1.5">
            {NAV_LINKS.map((x) => {
              const isActive = x.id === active;
              return (
                <a
                  key={x.id}
                  ref={isActive ? activeTabRef : null}
                  href={`#${x.id}`}
                  onClick={(e) => handleNavClick(x.id, e)}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                    isActive ? "" : "opacity-70 hover:opacity-100",
                  )}
                >
                  {language === "en" ? x.labelEn : x.labelEs}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Actions */}
        <div className="inline-flex items-center gap-3">
          <div className="bg-background/50 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-foreground/60 hover:text-foreground flex items-center gap-1 font-mono text-xs font-medium transition-all duration-200 hover:scale-105"
              aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
            >
              <span>{language === "en" ? "🇺🇸" : "🇲🇽"}</span>
              <span>{language === "en" ? "EN" : "ES"}</span>
            </button>

            <div className="bg-border h-4 w-px" />

            {/* Sound Toggle */}
            <button
              onClick={() => toggleSoundEnabled()}
              className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110"
              aria-label={isSoundEnabled ? "Mute sounds" : "Enable sounds"}
            >
              {isSoundEnabled ? (
                <Volume2Icon className="size-5" />
              ) : (
                <VolumeXIcon className="size-5" />
              )}
            </button>

            <div className="bg-border h-4 w-px" />

            {/* Theme Toggle */}
            {isClient && (
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="transition-transform duration-200 hover:scale-110"
                aria-label="Toggle theme"
              >
                <ThemeToggleButton2 className="size-5" theme={resolvedTheme} />
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="hover:bg-foreground/5 inline-flex size-9 items-center justify-center rounded-md border transition-colors md:hidden"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XIcon className="size-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon className="size-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mobile-menu-sheet overflow-hidden md:hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="bg-background/50 mt-2 grid gap-1 rounded-xl border p-2 backdrop-blur-sm"
            >
              {NAV_LINKS.map((x, index) => (
                <motion.a
                  key={x.id}
                  href={`#${x.id}`}
                  onClick={(e) => handleNavClick(x.id, e)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "group font-incognito relative overflow-hidden rounded-lg px-4 py-3 text-sm transition-all duration-200",
                    x.id === active
                      ? "bg-foreground/10 font-semibold shadow-sm"
                      : "hover:bg-foreground/5 opacity-80 hover:opacity-100",
                  )}
                >
                  {/* Active indicator */}
                  {x.id === active && (
                    <motion.div
                      layoutId="mobile-nav-indicator"
                      className="bg-foreground absolute top-0 bottom-0 left-0 w-1 rounded-r-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover gradient effect */}
                  <div className="pointer-events-none from-foreground/0 via-foreground/5 to-foreground/0 absolute inset-0 translate-x-[-100%] bg-gradient-to-r transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />

                  <div className="relative flex items-center justify-between">
                    <span>{language === "en" ? x.labelEn : x.labelEs}</span>
                    {x.id === active && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-foreground/50 size-2 rounded-full"
                      />
                    )}
                  </div>
                </motion.a>
              ))}

              <div className="bg-border my-1 h-px" />

              <div className="grid grid-cols-3 gap-2 px-2 py-1">
                {/* Language Toggle (mobile) */}
                <button
                  onClick={toggleLanguage}
                  className="hover:bg-foreground/5 group flex flex-col items-center gap-1.5 rounded-lg py-2 transition-colors"
                >
                  <span className="text-foreground/60 group-hover:text-foreground text-xl transition-colors">
                    {language === "en" ? "🇺🇸" : "🇲🇽"}
                  </span>
                  <span className="text-foreground/60 group-hover:text-foreground text-[10px] font-medium font-mono">
                    {language === "en" ? "EN" : "ES"}
                  </span>
                </button>

                <button
                  onClick={() => toggleSoundEnabled()}
                  className="hover:bg-foreground/5 group flex flex-col items-center gap-1.5 rounded-lg py-2 transition-colors"
                >
                  {isSoundEnabled ? (
                    <Volume2Icon className="text-foreground/60 group-hover:text-foreground size-5 transition-colors" />
                  ) : (
                    <VolumeXIcon className="text-foreground/60 group-hover:text-foreground size-5 transition-colors" />
                  )}
                  <span className="text-foreground/60 group-hover:text-foreground text-[10px] font-medium">
                    {isSoundEnabled ? "Sound" : "Muted"}
                  </span>
                </button>

                {isClient && (
                  <button
                    onClick={() =>
                      setTheme(resolvedTheme === "dark" ? "light" : "dark")
                    }
                    className="hover:bg-foreground/5 group flex flex-col items-center gap-1.5 rounded-lg py-2 transition-colors"
                  >
                    <ThemeToggleButton2
                      className="text-foreground/60 group-hover:text-foreground size-5"
                      theme={resolvedTheme}
                    />
                    <span className="text-foreground/60 group-hover:text-foreground text-[10px] font-medium">
                      Theme
                    </span>
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
