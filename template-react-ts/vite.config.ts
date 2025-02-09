import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { viteConfig } from "./app.config";
import tsconfigPaths from "vite-tsconfig-paths";

const { useTailwind, port, arasProxy } = viteConfig;

let server = arasProxy.server;
server = server.toLowerCase();
server = viteConfig.arasProxy.useSSL
  ? server.replace("http://", "https://")
  : server.replace("https://", "http://");

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tsconfigPaths(),
    ...(arasProxy.useSSL ? [basicSsl()] : []),
    ...(useTailwind ? tailwindcss() : []),
  ],
  server: {
    port,
    open: arasProxy.openArasOnStart ? "/innovatorserver/client" : false,

    proxy: {
      "/innovatorserver": {
        target: server,
        secure: false,
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/innovatorserver/, ""),
      },
    },
  },
});
