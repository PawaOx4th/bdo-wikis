export default {
   // Global page headers: https://go.nuxtjs.dev/config-head
   head: {
      title: 'bdo-wiki',
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { hid: 'description', name: 'description', content: '' },
      ],
      link: [
         { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
         { rel: 'preconnect', href: "https://fonts.gstatic.com" },
         { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;500;700&display=swap" }
      ],
   },

   // Global CSS: https://go.nuxtjs.dev/config-css
   css: [
      './assets/scss/font.scss',
      './assets/scss/global.scss',
   ],

   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   plugins: [],

   // Auto import components: https://go.nuxtjs.dev/config-components
   components: true,

   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: [
      // https://go.nuxtjs.dev/typescript
      '@nuxt/typescript-build',
   ],

   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
      // https://go.nuxtjs.dev/bootstrap
      'bootstrap-vue/nuxt',
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      // https://go.nuxtjs.dev/pwa
      '@nuxtjs/pwa',
   ],
   bootstrapVue: {
      components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BTable', 'BModal', 'BNavbar', 'BNavbarNav', 'BNavbarBrand', 'BNavbarToggle', 'BInputGroup', 'BInputGroupAppend', 'BInputGroupText', 'BInputGroupAddon', 'BInputGroupPrepend', 'BCard', 'BCardHeader', 'BCardFooter', 'BCardBody', 'BCardTitle', 'BCardSubTitle', 'BCardImg', 'BCardImgLazy', 'BCardText', 'BCardGroup'],
      directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy'],
      componentPlugins: [
         'LayoutPlugin',
         'FormPlugin',
         'FormCheckboxPlugin',
         'FormInputPlugin',
         'FormRadioPlugin',
         'ToastPlugin',
         'ModalPlugin',
         'NavbarPlugin',
         'InputGroupPlugin',
         'CardPlugin'
      ],
   },

   // Axios module configuration: https://go.nuxtjs.dev/config-axios
   axios: {},

   // PWA module configuration: https://go.nuxtjs.dev/pwa
   pwa: {
      manifest: {
         lang: 'en',
      },
   },

   // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {},
   router: {
      base: '/',
      routeNameSplitter: '/'
   }
}
