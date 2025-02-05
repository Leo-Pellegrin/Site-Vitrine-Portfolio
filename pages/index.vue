<template>
  <main>
    <HeroSection />
    <AboutSection />
    <UserGuideSection />
    <FeatureSection />
    <CommentSection />
    <PricingSection />
    <SubscriptionSection />
  </main>
</template>

<script lang="ts" setup>
useSeoMeta({
  // 🌍 Langue principale du site (utile pour le SEO et les moteurs de recherche)
  lang: 'fr',

  // 🏷️ Title et description principale
  title: 'Accueil | DigitalWave - Agence Web & SEO',
  description: 'DigitalWave est une agence spécialisée dans la création de sites web et le référencement SEO.',

  // 📢 Open Graph (Facebook, LinkedIn)
  ogTitle: 'Accueil | DigitalWave - Agence Web & SEO',
  ogDescription: 'Boostez votre présence en ligne avec notre expertise en développement web et SEO.',
  ogImage: 'https://digitalwave.com/og-image.jpg',
  ogUrl: 'https://digitalwave.com',

  // 🐦 Twitter Cards
  twitterTitle: 'Accueil | DigitalWave - Agence Web & SEO',
  twitterDescription: 'Découvrez DigitalWave, une agence experte en création de sites et SEO.',
  twitterImage: 'https://digitalwave.com/twitter-image.jpg',
  twitterCard: 'summary_large_image',
  twitterSite: '@digitalwave',

  // 🤖 Indications pour les moteurs de recherche
  robots: 'index, follow',
  canonical: 'https://digitalwave.com/'
});

// Utilisation de useHead pour d'autres balises personnalisées
useHead({
  htmlAttrs: {
    lang: 'fr' // 🌍 Ajout de l'attribut lang sur la balise <html>
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preload', href: '/assets/images/banner.jpg', as: 'image' }
  ],
});
</script>

<style scoped></style>