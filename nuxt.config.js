import { mdiOpenInNew } from "@mdi/js"; // For remark-external-links

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jain Songs',
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
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: ""
      },
      {
        rel: "preconnect",
        href: "https://www.google-analytics.com",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollactive.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    // '@nuxt/image',
    // '@nuxtjs/vuetify', // https://vuetifyjs.com/en/getting-started/installation/#nuxt-install
    "@nuxtjs/svg"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // '@nuxtjs/sitemap'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    dir: `jainsongs-content`,
    markdown: {
      remarkPlugins: [
        ['remark-breaks'],
        ['remark-autolink-headings', { behavior: 'append' }],
        ['remark-external-links', {
          target: '_blank',
          rel: 'noopener noreferrer',
          content: {
            type: "element",
            tagName: "svg",
            properties: {
              'aria-hidden': "true",
              className: ["tw-w-4", "tw-h-4", "tw-ml-1", "tw-fill-current"],
              role: "img",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
            children: [
              {
                type: "element",
                tagName: "path",
                properties: { d: mdiOpenInNew }
              }
            ]
          },
          contentProperties: {
            'aria-hidden': "true",
            className: ["tw-inline-flex", "tw-justify-center", "tw-items-center", "tw-align-middle", "tw-text-gray-600"]
          },
        }],
        ['@silvenon/remark-smartypants', { dashes: 'oldschool' }],
      ],
    },
    liveEdit: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/nuxt/nuxt.js/issues/4552#issuecomment-761786540
    // https://philipwalton.com/articles/deploying-es2015-code-in-production-today/
    // https://web.dev/codelab-serve-modern-code/
    babel: {
      presets({ isClient }, preset) {
        if (isClient) {
          preset[1].targets = {
            browsers: [
              'Chrome >= 60',
              'Safari >= 10.1',
              'iOS >= 10.3',
              'Firefox >= 54',
              'Edge >= 15',
            ]
          }
        }
        return [preset]
      }
    },
    filenames: {
      app: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[name].[contenthash:7]${isModern ? '.modern' : ''}.js`,
      chunk: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[name].[contenthash:7]${isModern ? '.modern' : ''}.js`,
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[name].[contenthash:7].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[contenthash:7].[ext]'
    },
  },

  generate: {
    fallback: '404.html',
  }
}
