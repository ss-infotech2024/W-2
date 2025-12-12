import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,

    // FIXED: allow root, client, shared
    fs: {
      allow: [
        path.resolve(__dirname, "./"),        // root folder
        path.resolve(__dirname, "./client"),  // client
        path.resolve(__dirname, "./shared"),  // shared
      ],
      deny: [
        ".env",
        ".env.*",
        "*.{crt,pem}",
        "**/.git/**",
        "server/**",
      ],
    },
  },

  build: {
    outDir: "dist/spa",
  },

  plugins: [
    react(),
    expressPlugin(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

// -----------------------------------------------------
// Express Plugin (Attaches backend to Vite dev server)
// -----------------------------------------------------
function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // dev mode only
    configureServer(server) {
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}
