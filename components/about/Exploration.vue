<template>
  <section class="w-full flex items-center text-gray-300">
    <!-- Sous-texte (intro secondaire) -->
    <p class="ml-60 pr-40 text-md">
      Explore a world of possibilities with our innovations. Our story is a testament
      to passion, dedication, and the pursuit of excellence.
    </p>

    <!-- Bouton d’action -->
    <UButton href="/sign-up" color="blue" class="transition ease-in-out delay-100 my-10 mr-40" icon="i-heroicons-arrow-up-right"
      :trailing="true" :ui="{ rounded: 'rounded-full' }">
      <span class="text-lg px-6 py-1">Start Exploring</span>
    </UButton>
  </section>
</template>

<script setup>
// Aucun script requis si vous n'avez pas de logique particulière
</script>

<style scoped>
/* Styles additionnels facultatifs */
</style>