<template>
  <div class="hero-marquee-container">
    <div class="hero-marquee-wrap overflow-hidden transform origin-top-left">
      <!-- Première liste de textes -->
      <div class="hero-marquee-list flex space-x-10" :style="transformStyle">
        <div v-for="(text, index) in marqueeTexts" :key="'list1-' + index" class="hero-marquee-text whitespace-nowrap">
          {{ text }}
        </div>
      </div>

      <!-- Deuxième liste pour l'effet de boucle -->
      <div class="hero-marquee-list flex space-x-10" :style="transformStyle">
        <div v-for="(text, index) in marqueeTexts" :key="'list2-' + index" class="hero-marquee-text whitespace-nowrap">
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Données pour les textes défilants
 */
const marqueeTexts = ref([
  'Redefining Excellence',
  'Convenience',
  'Personalization',
  'Enhanced User Experience',
  'Offline Access',
  'Push Notifications',
  'Streamlined Processes',
  'Regular Updates and Improvements'
])

/**
 * État pour gérer la position de défilement
 */
const offset = ref(0)
const transformStyle = computed(() => ({
  transform: `translate3d(${offset.value}px, 0, 0)`,
  willChange: 'transform'
}))

/**
 * Gérer le défilement
 */
onMounted(() => {
  const speed = 1 // Vitesse de défilement
  const listWidth = 400 // Largeur d'une liste
  const loop = () => {
    offset.value -= speed
    if (Math.abs(offset.value) >= listWidth) {
      offset.value = 0 // Réinitialiser pour boucle infinie
    }
    requestAnimationFrame(loop)
  }
  loop()
})
</script>

<style scoped>
.hero-marquee-container {
  position: absolute;
  /* Positionnement absolu nécessaire pour coller au bord */
  /* Centré verticalement par rapport à son parent */
  transform: rotate(15deg) translateY(50%);
  /* Rotation + alignement vertical */
  background-color: #3A6A97;
  width: 80%;
  /* Ajustez la largeur selon vos besoins */
  height: 40px;
  /* Hauteur de la barre */
}

.hero-marquee-wrap {

  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* Aligner le texte verticalement */
  overflow: hidden;
  /* Inclinaison ajoutée */
  transform-origin: top left;
  /* Point d'origine pour la rotation */
}

.hero-marquee-list {
  display: flex;
  position: absolute;
  height: auto;
  /* Ajuste la hauteur selon le contenu */
  will-change: transform;
}

.hero-marquee-text {
  font-size: 1rem;
  /* Ajustez selon vos besoins */
  font-weight: bold;
  color: white;
  /* Couleur du texte */
  white-space: nowrap;
  padding: 0 20px;
  /* Espacement entre les textes */
  line-height: 1.2;
  /* Contrôle de la hauteur du texte */
}
</style>