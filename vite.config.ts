import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

export default defineConfig(({ mode }) => {
  const isChrome: boolean = mode === "chrome";

  const manifestFile: string = isChrome
    ? "public/manifest.chrome.json"
    : "public/manifest.firefox.json";

  const outDir: string = isChrome ? "build/chrome" : "build/firefox";

  return {
    publicDir: false,
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          { src: manifestFile, dest: ".", rename: "manifest.json" },
          { src: "public/icons", dest: "." },
        ],
      }),
    ],
    build: {
      outDir,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
          background: path.resolve(__dirname, "src/background/index.ts"),
          content: path.resolve(__dirname, "src/content/index.ts"),
        },
        output: {
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === "background") return "background.js";
            if (chunkInfo.name === "content") return "content.js";
            return "assets/[name]-[hash].js";
          },
        },
      },
    },
  };
});
