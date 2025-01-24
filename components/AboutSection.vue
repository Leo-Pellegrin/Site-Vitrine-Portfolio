<template>
  <section class="relative bg-black text-white py-24 sm:py-32">
    <!-- Exemple d'utilisation d'un composant AnimatedTitle -->
    <div class="w-full">
      <AnimatedTitle text="We started with a simple idea and a big dream to" />
    </div>

    <!-- On insère le composant Features -->
    <Features />
  </section>
</template>

<script setup>
import AnimatedTitle from '~/components/about/AnimatedText.vue'
import Features from '~/components/about/FeatureSection.vue'
</script>

<style scoped>
/* Personnalisez vos styles pour la section About, si nécessaire */
</style>