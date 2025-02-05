// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 📅 Définit une date de compatibilité pour éviter les conflits lors des mises à jour
  compatibilityDate: '2024-11-01',

  // 🔧 Active les outils de développement
  devtools: { enabled: true },

  // 📄 Active la gestion des pages (utile si vous utilisez `pages/`)
  pages: true,

  // 📦 Modules Nuxt
  modules: [
    '@nuxtjs/robots',  // Génère un fichier robots.txt
    '@nuxtjs/sitemap', // Génère un fichier sitemap.xml
    '@nuxt/content',   // Gestion de contenu statique en Markdown
    '@vite-pwa/nuxt',  // PWA (Progressive Web App)
    'nuxt-gtag',       // Google Analytics (GTag)
    '@nuxt/fonts',     // Gestion des polices Google
    '@nuxt/ui',        // Composants UI de Nuxt
    '@nuxt/image',     // Optimisation d'images
    '@nuxthub/core'    // Intégration de Nuxthub (module de gestion)
  ],

  // 🌍 SEO : Configuration des balises Meta globales
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'DigitalWave - Agence Web & SEO',
      meta: [
        { name: 'description', content: 'Agence digitale spécialisée en création de sites web, SEO et marketing digital.' },
        { name: 'keywords', content: 'agence web, création site internet, SEO, marketing digital' },
        { property: 'og:title', content: 'DigitalWave - Agence Web & SEO' },
        { property: 'og:description', content: 'Boostez votre présence en ligne avec notre expertise en développement web et SEO.' },
        { property: 'og:image', content: 'https://digitalwave.com/og-image.jpg' },
        { property: 'og:url', content: 'https://digitalwave.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@digitalwave' }
      ],
    },
  },

  // 🔌 Plugins à charger côté client
  plugins: [
    // { src: '~/plugins/recaptcha.ts', mode: 'client' },
    { src: '~/plugins/auto-animate.ts', mode: 'client' }
  ],

  // 🌐 Configuration du site
  site: {
    url: process.env.SITE_URL || 'https://bluecoresolutions.com',
    name: 'BlueCore Solutions',
  },

  // 🔑 Gestion des variables d’environnement (accessibles côté client)
  runtimeConfig: {
    public: {
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY || 'your-site-key-here',
      GTAG_ID: process.env.GTAG_ID || 'G-XXXXXXXXXX', // Remplacez par votre ID Google Analytics
    },
  },

  // 📝 Configuration du module robots
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private'], // Empêche l’indexation de certaines pages sensibles
      },
    ],
    sitemap: `${process.env.SITE_URL || 'https://bluecoresolutions.com'}/sitemap.xml`,
  },
  // ⚡ Configuration du module PWA
  pwa: {
    manifest: {
      name: 'BlueCore Solutions',
      short_name: 'BlueCore',
      description: 'Votre solution digitale performante',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://bluecoresolutions.com/.*',
          handler: 'NetworkFirst',
          method: 'GET',
        },
      ],
    },
  },

  // 📊 Configuration de Google Analytics (GTag)
  gtag: {
    id: process.env.GTAG_ID || 'G-XXXXXXXXXX', // Remplacez par votre ID Google Analytics
    config: {
      anonymize_ip: true, // Anonymise les IP
      send_page_view: true, // Envoie automatiquement les vues de pages
    },
  },

  // 🖼️ Configuration du module @nuxt/image
  image: {
    dir: 'assets/images',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },

  // 🎨 Fichiers CSS globaux
  css: ['~/assets/css/main.css'],

  // 🔠 Configuration des polices avec Google Fonts
  fonts: {
    families: [
      { name: 'Inter-var', provider: 'google' },
    ],
    provider: 'google',
  },

  // 🚀 Configuration de Nitro (backend)
  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  /** 
   * 🔒 Authentification (Exemple, désactivé)
   */
  /*
  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: 'AUTH_ORIGIN',
    baseURL: process.env.AUTH_BASE_URL || 'http://localhost:3000/api/auth',
    provider: {
      type: 'oauth',
      clientId: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    },
  }
  */
});