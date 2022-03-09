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
  loading: { color: "#46B2C8", height: "4px", duration: 5000 },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-component.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/postcss8",
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-paystack",
    "@nuxtjs/auth-next",
    "@nuxtjs/toast",
  ],

  toast: {
    position: "top-left",
    duration: 2000,
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
          property: "token",
          global: true,
          maxAge: 60 * 60 * 24,
        },
        user: {
          property: 'user',
          autoFetch: false
        },
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          logout: { url: "/auth/logout", method: "get" },
          user: { url: "/auth/user", method: "get" },
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
    baseURL: "https://youstore-server.herokuapp.com/api",
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
