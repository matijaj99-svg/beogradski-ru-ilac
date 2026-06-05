import { copyFileSync, existsSync } from "fs";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

let heroAssetPath: string | undefined;
let entryJsPath: string | undefined;

/** Load built CSS without blocking first paint (Lighthouse render-blocking). */
const asyncStylesheet: Plugin = {
  name: "async-stylesheet",
  apply: "build",
  enforce: "post",
  transformIndexHtml(html) {
    return html.replace(/<link\s+([^>]*?)rel="stylesheet"([^>]*?)>/gi, (tag) => {
      const href = tag.match(/href="([^"]+)"/i)?.[1];
      if (!href) return tag;
      return `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'" />
<noscript>${tag}</noscript>`;
    });
  },
};

/**
 * Discover LCP + entry assets at build time and hoist hints early in <head>
 * (shorter critical path — see network dependency tree insight).
 */
const optimizeCriticalPath: Plugin = {
  name: "optimize-critical-path",
  apply: "build",
  generateBundle(_options, bundle) {
    const file = Object.keys(bundle).find((name) => name.includes("hero-worker") && name.endsWith(".jpg"));
    if (file) heroAssetPath = `/${file}`;

    entryJsPath = Object.keys(bundle).find(
      (name) => name.startsWith("assets/index-") && name.endsWith(".js"),
    );
    if (entryJsPath) entryJsPath = `/${entryJsPath}`;
  },
  transformIndexHtml: {
    order: "post",
    handler(html) {
      const stylePreload = html.match(/<link rel="preload" as="style"[^>]*>/i)?.[0];
      const styleFallback = html.match(/<noscript>[\s\S]*?<\/noscript>/i)?.[0];
      const moduleScript = html.match(/<script type="module"[^>]*><\/script>/i)?.[0];

      if (!stylePreload && !moduleScript) return html;

      let cleaned = html
        .replace(/<link rel="preload" as="image"[^>]*>\s*/i, "")
        .replace(/<link rel="preload" as="style"[^>]*>\s*/i, "")
        .replace(/<noscript>[\s\S]*?<\/noscript>\s*/i, "")
        .replace(/<script type="module"[^>]*><\/script>\s*/i, "");

      const hints = [
          `<link rel="icon" href="/favicon.ico" sizes="any" />`,
          `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />`,
          `<link rel="apple-touch-icon" sizes="64x64" href="/favicon-64x64.png" />`,
        heroAssetPath && 
          `<link rel="preload" as="image" href="${heroAssetPath}" fetchpriority="high" />`
        stylePreload,
        entryJsPath && `<link rel="modulepreload" crossorigin href="${entryJsPath}" />`,
        styleFallback,
        moduleScript,
      ]
        .filter(Boolean)
        .join("\n    ");

      return cleaned.replace("</head>", `    ${hints}\n  </head>`);
    },
  },
};

const copyCnameToDist: Plugin = {
  name: "copy-cname-to-dist",
  apply: "build",
  closeBundle() {
    const cname = path.resolve(__dirname, "CNAME");
    if (existsSync(cname)) {
      copyFileSync(cname, path.resolve(__dirname, "dist/CNAME"));
    }
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" && asyncStylesheet,
    mode !== "development" && optimizeCriticalPath,
    mode !== "development" && copyCnameToDist,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
}));
