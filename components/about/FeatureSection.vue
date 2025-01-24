<template>
  <!-- Le conteneur principal, avec opacité liée au scroll -->
  <div ref="features" class="mt-20 transition-opacity duration-700" :style="{ opacity: featuresOpacity }">
    <h2 class="text-3xl sm:text-4xl font-bold mb-16">
      Revolutionize your world with us
    </h2>

    <div class="space-y-16 max-w-2xl">
      <!-- Robust Security -->
      <div>
        <div class="flex items-center mb-4">
          <div class="p-2 rounded-lg bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="ml-4 text-xl font-semibold">Robust Security</h3>
        </div>
        <p class="text-sm text-gray-300">
          Benefit from state-of-the-art security features ensuring your data is
          protected at every interaction.
        </p>
      </div>

      <!-- Personalized Journeys -->
      <div>
        <div class="flex items-center mb-4">
          <div class="p-2 rounded-lg bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 class="ml-4 text-xl font-semibold">Personalized Journeys</h3>
        </div>
        <p class="text-sm text-gray-300">
          Immerse yourself in personalized journeys, where our features adapt to
          your preferences.
        </p>
      </div>

      <!-- Ironclad security protocols -->
      <div>
        <div class="flex items-center mb-4">
          <div class="p-2 rounded-lg bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="ml-4 text-xl font-semibold">Ironclad security protocols</h3>
        </div>
        <p class="text-sm text-gray-300">
          Rely on our ironclad security protocols, providing you with peace of
          mind in every interaction.
        </p>
      </div>

      <!-- Seamless integration -->
      <div>
        <div class="flex items-center mb-4">
          <div class="p-2 rounded-lg bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="ml-4 text-xl font-semibold">Seamless integration</h3>
        </div>
        <p class="text-sm text-gray-300">
          Our platform seamlessly integrates with your favorite tools for
          enhanced productivity.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Référence pour la section Features
const features = ref(null)
// Opacité contrôlée par le scroll
const featuresOpacity = ref(0)

// Gère le défilement pour ajuster l'opacité
const handleScroll = () => {
  if (!features.value) return

  const featuresRect = features.value.getBoundingClientRect()
  const windowHeight = window.innerHeight

  // Calcule un ratio (0 à 1) selon la visibilité dans la fenêtre
  const ratio =
    1 - (featuresRect.top - windowHeight * 0.7) / (windowHeight * 0.3)

  // Clamp la valeur entre 0 et 1
  featuresOpacity.value = Math.min(Math.max(ratio, 0), 1)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Appel initial pour définir l'opacité sans attendre un scroll
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Vous pouvez ajouter ou personnaliser les styles ici si nécessaire. */
</style>