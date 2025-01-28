<template>
  <div class="relative h-screen flex w-full items-center bg-white z-0">
    <!-- Dégradé bleu en bas -->
    <div
      class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-blue-600/40 to-transparent pointer-events-none z-1">
    </div>
    <div class="absolute w-full -ml-10 z-3" style="bottom: 7em;">
      <HeroMarquee />
    </div>

    <!-- Contenu de la section Hero -->
    <div class="container -mt-20 mx-auto grid md:grid-cols-2 gap-12 relative z-10">
      <!-- Texte de présentation -->
      <div class="space-y-8 animate-fade-in">
        <h1 class="text-5xl md:text-6xl font-bold leading-tight">
          Elevate Your Experience at
          <span class="block">BlueCore</span>
        </h1>
        <p class="text-gray-500 text-lg md:text-xl max-w-lg">
          At BlueCore Solutions, we help SMEs navigate the complexities of the digital world with modern and accessible
          technological solutions.
        </p>
        <div class="flex items-center space-x-6">
          <!-- Bouton Get Started -->
          <UButton href="/sign-up" color="black" class="transition ease-in-out delay-100" icon="i-heroicons-arrow-up-right" :trailing="true"
            :ui="{ rounded: 'rounded-full' }">
            <span class="text-lg px-6 py-1">Get Started</span>
          </UButton>
          <!-- Bouton Join Community -->
          <NuxtLink to="/" class="underline underline-offset-4">
            Join Community
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// Pas besoin de logique complexe ici, tout se base sur Tailwind et les NuxtLink
</script>

<style scoped></style>