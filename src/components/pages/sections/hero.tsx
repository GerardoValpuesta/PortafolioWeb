"use client";

import Profile from "@/components/profile";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Typewriter } from "@/components/ui/typewriter";
import { clientApi } from "@/lib/client-api";
import { cn } from "@/lib/utils";
import { ArrowDownSquareIcon, ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";

import { useTranslation } from "@/hooks/use-translation";

const Hero = () => {
  const t = useTranslation();

  return (
    <div className="relative flex flex-col justify-center overflow-hidden border-b pt-12">
      <div className="px-4 pb-6 md:px-8 md:pb-14 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12 text-center md:flex-row md:text-left"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-1 rotate-3 rounded-lg border-2" />
              <div className="absolute -inset-1 -rotate-3 rounded-lg border-2" />
              <div className="bg-background relative rounded-lg border-2 p-2">
                <Profile />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="md:flex-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2"
            >
              <div className="bg-background border px-3 py-1">
                <span className="text-foreground/60 font-mono text-xs">
                  {"<"} {t.hero.badge} {"/>"}
                </span>
              </div>
              <div className="h-px w-12 bg-[#e1e1e1]" />
              <span className="text-foreground/50 font-mono text-xs md:text-sm">
                {t.hero.subtitle}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-incognito mb-4 text-3xl leading-tight font-semibold md:text-4xl lg:text-6xl"
            >
              <span className="text-foreground">Hey, I&apos;m </span>
              <span className="relative text-[#8cc2ff] italic">
                <Typewriter
                  text={["Gerardo", "Gelik"]}
                  speed={85}
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar="|"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-foreground/60 max-w-2xl text-sm font-light md:text-base"
            >
              {t.hero.description}
            </motion.p>

            {/* Availability & Language Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-4 flex flex-wrap gap-2 max-md:justify-center"
            >
              <span className="flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                {t.hero.availability}
              </span>
              <span className="flex items-center gap-1.5 rounded-full border bg-foreground/5 px-3 py-1 text-xs text-muted-foreground">
                📍 {t.hero.location}
              </span>
              <span className="flex items-center gap-1.5 rounded-full border bg-foreground/5 px-3 py-1 text-xs text-muted-foreground">
                🇲🇽 {t.hero.langEs}
              </span>
              <span className="flex items-center gap-1.5 rounded-full border bg-foreground/5 px-3 py-1 text-xs text-muted-foreground">
                🇺🇸 {t.hero.langEn}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center gap-3 max-md:justify-center max-md:mx-auto"
            >
              <Button
                asChild
                size="lg"
                className="group/btn font-medium bg-[#25D366] text-white hover:bg-[#20ba5a] border-0 shadow-md"
              >
                <a
                  href="https://wa.me/525584422457?text=Hola%20Gerardo%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte%20%F0%9F%91%8B"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="group/btn border-2 font-medium bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={t.hero.cvFile} download={t.hero.cvFileName}>
                  <Download className="mr-1.5 h-4 w-4 transition-transform group-hover/btn:translate-y-0.5" />
                  {t.hero.downloadCv}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group/btn border-2 font-medium"
              >
                <a href="#projects">
                  <ArrowDownSquareIcon className="size-4 transition-transform group-hover/btn:translate-y-0.5 mr-2" />
                  {t.hero.ctaSecondary}
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/*  Stats Grid */}
      <div className="relative">
        <div className="grid grid-cols-2 border md:max-w-3/4 md:border-0 md:border-t md:border-r lg:grid-cols-4">
          {[

            { label: t.hero.stats.years, value: 4 },
            { label: t.hero.stats.products, value: 16 },
            { label: t.hero.stats.companies, value: 8 },
            { label: t.hero.stats.projectsDelivered, value: 24 },
          ].map((stat, i, arr) => (
            <div
              key={i}
              className={cn(
                "group hover:bg-foreground/5 relative p-8 text-center transition-colors",
                i !== arr.length - 1 && "border-r",
                i < 3 && "border-b lg:border-b-0",
              )}
            >
              <div className="text-foreground mb-2 text-3xl font-bold">
                <NumberTicker value={stat.value} />+
              </div>
              <div className="text-foreground/50 font-mono text-xs tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground absolute right-4 bottom-2 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex">
          {t.hero.scrollDown}
          <ArrowDownSquareIcon className="size-4 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
