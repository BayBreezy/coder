export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  generate: {
    fallback: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Coder",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/codemirror.client.js", "~/plugins/split.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxtjs/color-mode", "@nuxtjs/pwa"],
  colorMode: {
    classSuffix: "",
  },

  pwa: {
    meta: {
      name: "Coder",
      author: "Behon Baker",
      description: "Code once, share everywhere",
      theme_color: "#000000",
      ogTitle: "Coder",
      twitterCard: "summary_large_image",
      twitterCreator: "@iAm_BayBreezy",
    },
    manifest: {
      lang: "en",
      name: "Coder",
      short_name: "Parabot",
      description: "Code once, share everywhere",
      theme_color: "#000000",
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
