export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "youstore-frontend",
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
  //Customize the progress-bar color
  loading: { color: "#46B2C8", height: "3px", duration: 5000 },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-component.js", "~plugins/axios.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  ssr: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/postcss8",
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],
  serverMiddleware: ["~/server/index"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-paystack",
    "@nuxtjs/auth-next",
    "@nuxtjs/toast",
  ],

  toast: {
    position: "top-center",
    duration: 6000,
    theme: "bubble",
    register: [
      // Register custom toasts
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error",
        },
      },
    ],
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "data.token",
          global: true,
          maxAge: 60 * 60 * 24
        },
        user: {
          property: "data",
          // autoFetch: false
        },
        endpoints: {
          login: { url: "/api/users/v1/auth/", method: "post" },
          logout: { url: "/auth/logout", method: "get" },
          user: { url: "/api/users/v1/auth/user", method: "get" },
        },
      },
    },
    token: {
      prefix: "token.",
      global: true,
    },
    localStorage: {
      prefix: "ys.",
    },
    redirect: {
      login: "/auth/login",
      logout: "/",
      callback: "/auth/login",
      home: "/",
    },
  },
  axios: {
    baseURL: "https://api-2445583927843.production.gw.apicast.io",
  },
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
