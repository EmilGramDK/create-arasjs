// Application configuration
export const appConfig = {};

// Vite configuration
const arasViteConfig = {
  // Enable Tailwind CSS V4
  useTailwind: true,

  // Port for Vite development server
  port: 3456,

  // Open Aras Innovator on start
  openAras: true,

  // Aras Innovator server settings
  innovatorServer: "https://aras.example.com/innovatorserver",

  // Use SSL for Aras Innovator server (Enable this if your Aras Innovator server uses HTTPS)
  useSSL: true,
};






/* Vite Config down below */
/* Edit if needed. */
/* If your InnovatorServer is not /innovatorserver, you need to change the proxy rewrite function. */
/*##############################################################################################################*/
/*##############################################################################################################*/
/*##############################################################################################################*/
/*##############################################################################################################*/







import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

const { useTailwind = true, port = 3456, innovatorServer, useSSL = true, openAras = false } = arasViteConfig;

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tsconfigPaths(),
    ...(useSSL ? [mkcert()] : []),
    ...(useTailwind ? tailwindcss() : []),
  ],
  server: {
    port,
    open: openAras ? "/innovatorserver/client" : false,
    proxy: {
      "/innovatorserver": {
        target: formatServerUrl(innovatorServer, useSSL),
        secure: false,
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/innovatorserver/, ""),
      },
    },
  },
});

function formatServerUrl(serverUrl: string, useSSL: boolean) {
  let server = serverUrl;
  server = server.toLowerCase();
  server = useSSL ? server.replace("http://", "https://") : server.replace("https://", "http://");
  return server;
}
