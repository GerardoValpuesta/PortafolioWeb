import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import Providers from "@/components/providers";
import { geistMono, geistSans, incognito, pixelifySans, dancingScript } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import MotionConfigWrapper from "@/components/motion-config";
import { siteConfig } from "@/config/site";
import Script from "next/script";
import env from "@/config/env";
import FloatingAvatar from "@/components/floating-avatar";
// import FloatingAvatar from "@/components/floating-avatar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0F" },
  ],
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "Gerardo Valpuesta",
    "Gerardo Núñez Valpuesta",
    "Gelik",
    "Fullstack Engineer",
    "AI Builder",
    "Angular developer",
    "Svelte",
    "TypeScript",
    "N8N",
    "MCP",
    "developer Mexico",
    "portafolio desarrollador",
  ],

  openGraph: {
    images: [
      {
        url: "/og-image.png",
        alt: "Portafolio de Gerardo Valpuesta — Fullstack Engineer & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
          incognito.variable,
          pixelifySans.variable,
          dancingScript.variable,
        )}
      >
        <Providers>
          <MotionConfigWrapper>
            <FloatingAvatar />
            {children}
          </MotionConfigWrapper>
        </Providers>

        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      </body>
    </html>
  );
}
