// Application configuration
export const appConfig = {};

// Vite configuration
export const viteConfig = {
  // Enable Tailwind CSS V4
  useTailwind: true,

  // Port for Vite development server
  port: 3000,

  // Proxy settings for Innovator Server
  arasProxy: {
    server: "https://aras.example.com/innovatorserver",
    useSSL: true,
    openArasOnStart: true,
  },
};
