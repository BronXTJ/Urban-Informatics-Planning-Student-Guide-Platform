import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

/** Must match the GitHub repo name segment in the Pages URL (with leading and trailing slashes). */
const GITHUB_PAGES_BASE_DEFAULT = "/Urban-Informatics-Planning-Student-Guide-Platform/";

function normalizeBase(raw: string): string {
  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

export default defineConfig(({ mode }) => {
  const envOverride = process.env.VITE_BASE_PATH?.trim();
  const base =
    envOverride && envOverride !== "/"
      ? normalizeBase(envOverride)
      : mode === "development"
        ? "/"
        : GITHUB_PAGES_BASE_DEFAULT;

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    envDir: path.resolve(import.meta.dirname),
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      port: 3000,
      strictPort: false,
      host: true,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
