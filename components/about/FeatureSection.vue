<template>
  <!-- Grille 2 colonnes : un "Placeholder" à gauche et les features à droite -->
  <div class="grid grid-cols-3 w-full mt-5">
    <PlaceHolder class="col-span-1"/>

    <div ref="features" class="col-span-2 mt-20 transition-opacity duration-700" :style="{ opacity: featuresOpacity }">
      <h2 class="text-5xl font-bold mb-16">
        Revolutionize your world with us
      </h2>

      <!-- Grille 2x2 pour nos cartes de fonctionnalités -->
      <div class="grid grid-cols-2 grid-rows-2 gap-y-16 mx-auto">
        <AboutFeatureCard icon="mdi:lock" title="Robust Security" description="Benefit from state-of-the-art security features ensuring your data
                       is protected at every interaction." />

        <AboutFeatureCard icon="mdi:sign-direction" title="Personalized Journeys" description="Immerse yourself in personalized journeys, where our features adapt
                       to your preferences." />

        <AboutFeatureCard icon="mdi:shield-check" title="Ironclad security protocols" description="Rely on our ironclad security protocols, providing you with 
                       peace of mind in every interaction." />

        <AboutFeatureCard icon="mdi:sitemap" title="Seamless integration" description="Our platform seamlessly integrates with your favorite tools
          for enhanced productivity." />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Référence pour la section features
const features = ref(null)
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
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Ajustez les styles si nécessaire */
</style>