
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'shortcut icon', href: 'images/favicon.png' },
      { rel: 'apple-touch-icon', href: 'images/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes:'72x72', href: 'images/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes:'114x114', href: 'images/apple-touch-icon-114x114.png' },
      { rel: 'stylesheet', href: 'css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'css/et-line-icons.css' },
      { rel: 'stylesheet', href: 'css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'css/themify-icons.css' },
      { rel: 'stylesheet', href: 'css/swiper.min.css' },
      { rel: 'stylesheet', href: 'css/justified-gallery.min.css' },
      { rel: 'stylesheet', href: 'css/magnific-popup.css' },
      { rel: 'stylesheet', type:'text/css', href: 'revolution/css/settings.css', media:'screen' },
      { rel: 'stylesheet', type:'text/css', href: 'revolution/css/layers.css' },
      { rel: 'stylesheet', type:'text/css', href: 'revolution/css/navigation.css' },
      { rel: 'stylesheet', href: 'css/bootsnav.css' },
      { rel: 'stylesheet', href: 'css/style.css' },
      { rel: 'stylesheet', href: 'css/responsive.css' },
      { rel: 'stylesheet', href: 'css/animate.css' },
    ],
    script: [
      { src: 'js/jquery.js', body: true },
      { src: 'js/modernizr.js', body: true },
      { src: 'js/bootstrap.min.js', body: true },
      { src: 'js/jquery.easing.1.3.js', body: true },
      { src: 'js/skrollr.min.js', body: true },
      { src: 'js/smooth-scroll.js', body: true },
      { src: 'js/jquery.appear.js', body: true },
      { src: 'js/bootsnav.js', body: true },
      { src: 'js/jquery.nav.js', body: true },
      { src: 'js/wow.min.js', body: true },
      { src: 'js/page-scroll.js', body: true },
      { src: 'js/swiper.min.js', body: true },
      { src: 'js/jquery.count-to.js', body: true },
      { src: 'js/jquery.stellar.js', body: true },
      { src: 'js/jquery.magnific-popup.min.js', body: true },
      { src: 'js/isotope.pkgd.min.js', body: true },
      { src: 'js/imagesloaded.pkgd.min.js', body: true },
      { src: 'js/classie.js', body: true },
      { src: 'js/hamburger-menu.js', body: true },
      { src: 'js/counter.js', body: true },
      { src: 'js/jquery.fitvids.js', body: true },
      { src: 'js/equalize.min.js', body: true },
      { src: 'js/skill.bars.jquery.js', body: true },
      { src: 'js/justified-gallery.min.js', body: true },
      { src: 'js/jquery.easypiechart.min.js', body: true },
      { src: 'js/instafeed.min.js', body: true },
      { src: 'js/retina.min.js', body: true },
      { src: 'revolution/js/jquery.themepunch.tools.min.js', body: true },
      { src: 'revolution/js/jquery.themepunch.revolution.min.js', body: true },
      { src: 'js/main.js', body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
