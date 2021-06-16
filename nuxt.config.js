import bootstrap from './.nest/nest.js';

const isDev = process.env.NODE_ENV === 'development';
const devServer = `http://localhost:${process.env.DEV_ERVER_PORT || 4000}`;

const config = async () => ({
  srcDir: 'client/',

  server: {
    host: '0.0.0.0',
    port: +process.env.APP_PORT
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'application',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  serverMiddleware: isDev ? [] : [{ path: '/api', handler: await bootstrap() }],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  proxy: {
    '/api': {
      target: isDev ? devServer : '/',
      toProxy: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
});

export default config;
