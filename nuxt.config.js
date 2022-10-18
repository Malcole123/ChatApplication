export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ChatApplication',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //Auth
    '@nuxtjs/auth-next'
  ],

  auth:{
    redirect:{
      login:'/auth/login',
      home:'/'
    },
    strategies: {
      local: {
        token: {
          property: 'authToken',
          global: true,
          required: true,
          name:'Authorization',
          type: 'Bearer',
        },
        localStorage: {
          prefix: 'auth.'
        },
        user: {
          property: 'user',
          autoFetch: true,
          autoLogout:true,
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/me', method: 'get' },
          callback: '/',
        },
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL:process.env.NUXT_APP_AXIOS_BASE_URL,
  },
  serverMiddleware:[
    { path: '/api', handler: '~/api/index.js' }
  ],



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
