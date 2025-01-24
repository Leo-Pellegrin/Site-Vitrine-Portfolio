<template>
  <div ref="aboutWrap" class="about-title-wrap">
    <div ref="grayText" class="gray-text">
      {{ text }}
    </div>
    <div ref="aboutTitleHover" class="about-title-hover">
      <div ref="whiteText" class="white-line-text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue'

/**
 * Définition des props : 
 * - text (String) : le texte à afficher et animer 
 */
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

// Références aux éléments DOM
const aboutWrap = ref(null)
const aboutTitleHover = ref(null)
const grayText = ref(null)
const whiteText = ref(null)

const handleScroll = () => {
  const wrapEl = aboutWrap.value
  const hoverEl = aboutTitleHover.value
  const grayEl = grayText.value
  const whiteEl = whiteText.value
  if (!wrapEl || !hoverEl || !grayEl || !whiteEl) return

  // Récupère la position de l'élément par rapport à la fenêtre
  const rect = wrapEl.getBoundingClientRect()
  
  // Calcule la partie "visible" selon la hauteur de la fenêtre
  const visibleHeight = window.innerHeight - rect.top
  // ratio entre 0 et 1
  const ratio = Math.min(Math.max(visibleHeight / rect.height, 0), 1)

  // Ajuste la largeur de la zone "hover" (effet de remplissage)
  hoverEl.style.width = `${ratio * 100}%`

  // Modifie la couleur des textes en fonction du ratio
  if (ratio > 0.5) {
    grayEl.style.color = 'transparent'
    whiteEl.style.color = 'black'
  } else {
    grayEl.style.color = 'gray'
    whiteEl.style.color = 'transparent'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.about-title-wrap {
  position: relative;
  overflow: hidden;
  display: inline-block;
  font-size: 1.5rem;
}

.gray-text,
.white-line-text {
  margin: 0;
  font-size: 1.5rem;
  color: gray;
  transition: color 0.3s ease;
}

.about-title-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: white; /* Couleur de "remplissage" */
  z-index: 2;
  pointer-events: none;    /* Empêche l’interaction du curseur */
}
</style>