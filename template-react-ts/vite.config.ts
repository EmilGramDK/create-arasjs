import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { viteConfig } from "./app.config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tsconfigPaths(),
    ...(viteConfig.arasProxy.useSSL ? [basicSsl()] : []),
    ...(viteConfig.useTailwind ? tailwindcss() : []),
  ],
  server: {
    port: viteConfig.port,
    open: viteConfig.arasProxy.openArasOnStart ? "/innovatorserver/client" : false,
    proxy: {
      "/innovatorserver": {
        target: viteConfig.arasProxy.server.toLowerCase(),
        secure: false,
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/innovatorserver/, ""),
      },
    },
  },
});
