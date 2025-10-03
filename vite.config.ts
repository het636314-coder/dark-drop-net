import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 12000,
    allowedHosts: ["work-1-bdbidltyljalkpmw.prod-runtime.all-hands.dev", "work-2-bdbidltyljalkpmw.prod-runtime.all-hands.dev", "localhost", "127.0.0.1"],
    strictPort: false,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "X-Frame-Options": "ALLOWALL",
    },
    hmr: {
      host: "0.0.0.0",
      port: 12000,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: "globalThis",
  },
}));
