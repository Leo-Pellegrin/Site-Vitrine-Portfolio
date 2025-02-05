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

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

const aboutWrap = ref(null)
const aboutTitleHover = ref(null)
const grayText = ref(null)
const whiteText = ref(null)

const handleScroll = () => {
  if (!aboutWrap.value || !aboutTitleHover.value || !grayText.value || !whiteText.value) return
  
  const rect = aboutWrap.value.getBoundingClientRect()
  
  // Décalage pour commencer l'animation au dernier 1/4 de l'écran
  const offset = 0.75
  const visibleHeight = (window.innerHeight * offset) - rect.top
  let ratio = visibleHeight / rect.height
  if (ratio < 0) ratio = 0
  if (ratio > 1) ratio = 1
  
  // Largeur de la zone "hover" (effet de remplissage)
  aboutTitleHover.value.style.width = `${ratio * 100}%`

  // Au lieu de masquer le texte gris, on ne touche pas sa couleur.
  // On gère uniquement le texte blanc.
  if (ratio > 0.5) {
    whiteText.value.style.color = 'white'
  } else {
    whiteText.value.style.color = 'transparent'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
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
}

/* Le texte gris reste toujours gris */
.gray-text {
  margin: 0;
  color: gray; 
  transition: color 1s ease; /* Transition facultative */
}

/* Le texte blanc est au-dessus, contrôlé par .about-title-hover */
.white-line-text {
  margin: 0;
  color: transparent; /* par défaut, invisible */
  transition: color 1s ease;
}

.about-title-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  transition: width 1s ease;
}
</style>