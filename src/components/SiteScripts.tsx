"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SCRIPTS = [
  "/assets/js/jquery.min.js",
  "/assets/js/popper.min.js",
  "/assets/js/bootstrap.min.js",
  "/assets/js/bootstrap-dropdown-ml-hack.min.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/js/parallaxie.js",
  "/assets/js/parallax-scroll.js",
  "/assets/js/wow.min.js",
  "/assets/js/magnific-popup.min.js",
  "/assets/js/appear.min.js",
  "/assets/js/odometer.min.js",
  "/assets/js/ticker.min.js",
  "/assets/js/main.js",
];

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-eco-src="${src}"]`) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "true") resolve();
      else existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.ecoSrc = src;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export default function SiteScripts() {
  const pathname = usePathname();
  const loaded = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function boot() {
      if (!loaded.current) {
        for (const src of SCRIPTS) {
          if (cancelled) return;
          try {
            await loadScript(src);
          } catch {
            // continue loading remaining vendor scripts
          }
        }
        loaded.current = true;
      }

      // Re-init template behaviours after client navigation
      const w = window as Window & { jQuery?: (sel?: unknown) => { trigger: (e: string) => void } };
      if (w.jQuery) {
        w.jQuery(window).trigger("resize");
        // Soft re-init sticky / wow if available
        const wow = (window as unknown as { WOW?: new () => { init: () => void } }).WOW;
        if (wow) {
          try {
            new wow().init();
          } catch {
            /* ignore */
          }
        }
      }
    }

    boot();
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
