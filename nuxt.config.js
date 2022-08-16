export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "buser",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/images/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "@/components",
    {
      path: "@/components/templates/",
      prefix: "templates",
      extensions: ["vue"],
    },
    {
      path: "@/components/organisms/",
      prefix: "organisms",
      extensions: ["vue"],
    },
    {
      path: "@/components/molecules/",
      prefix: "molecules",
      extensions: ["vue"],
    },
    {
      path: "@/components/atoms/",
      prefix: "atoms",
      extensions: ["vue"],
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome",
  ],

  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true,
    },
  },

  target: "server",
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/image", "@nuxtjs/sentry"],

  sentry: {
    dsn: process.env.SENTRY_DNS,
    publishRelease: true,
    sourceMapStyle: "hidden-source-map",
    config: {
      release: "1.2.3",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
