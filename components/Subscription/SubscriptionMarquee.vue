<template>
  <div class="brand-marquee-container">
    <!-- Première liste -->
    <div class="brand-marquee-list flex space-x-8" :style="transformStyle">
      <img v-for="(logo, index) in brandLogos" :key="'list1-' + index" :src="logo" alt="Brand Logo"
        class="brand-marquee-logo" />
    </div>

    <!-- Deuxième liste -->
    <div class="brand-marquee-list flex space-x-8" :style="transformStyle">
      <img v-for="(logo, index) in brandLogos" :key="'list2-' + index" :src="logo" alt="Brand Logo"
        class="brand-marquee-logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
const brandLogos = ref([
  '/logos/google.svg',
  '/logos/microsoft.svg',
  '/logos/apple.svg',
  '/logos/amazon.svg',
  '/logos/tesla.svg',
  '/logos/netflix.svg',
  '/logos/adobe.svg',
  '/logos/intel.svg',
  '/logos/ibm.svg',
  '/logos/samsung.svg',
]);

const offset = ref(0);
const logoWidth = 100; // Largeur d'un logo en pixels
const listWidth = brandLogos.value.length * logoWidth; // Largeur totale de la liste
const speed = 1; // Vitesse de défilement (pixels par frame)

// Style calculé pour le défilement
const transformStyle = computed(() => ({
  transform: `translate3d(${offset.value}px, 0, 0)`,
  willChange: 'transform',
}));

// Boucle infinie pour le défilement
onMounted(() => {
  const loop = () => {
    offset.value -= speed;

    // Réinitialiser pour boucle fluide
    if (Math.abs(offset.value) >= listWidth) {
      offset.value = 0;
    }

    requestAnimationFrame(loop);
  };

  loop();
});
</script>

<style scoped>
.brand-marquee-container {
  position: relative;
  width: 100%;
  height: 5em;
  overflow: hidden;
}

.brand-marquee-wrap {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
}

.brand-marquee-list {
  display: flex;
  position: absolute;
  will-change: transform;
}

.brand-marquee-logo {
  height: 3em;
  width: 100px;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
}
</style>