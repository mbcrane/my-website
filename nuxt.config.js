module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Michael Crane | Software Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'Michael Crane', content: 'Software Development Portfolio Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
   plugins: ['~plugins/vue-scrollto.js'],
    // bootstrap vue
    modules: [
    'bootstrap-vue/nuxt'
/*
    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
*/
  ],
    
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }

}

