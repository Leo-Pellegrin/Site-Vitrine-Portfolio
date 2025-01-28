<template>
  <div class="relative flex flex-col justify-center items-center px-20">
    <div class="p-8 mb-10 space-y-4 text-center">
      <h2 class="text-4xl md:text-7xl font-bold">User Guide</h2>
      <p class="text-gray-600 text-2xl">
        Learn step by step how to use our platform and make the most of its features.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div 
        v-for="(card, index) in cards" 
        :key="index" 
        ref="cardRefs"
        :class="['opacity-0 transform translate-y-10 transition-all duration-700 ease-out', isVisible[index] ? 'opacity-100 translate-y-0' : '']"
        class="bg-white shadow-lg hover:shadow-xl hover:scale-120 p-6 rounded-lg"
      >
        <UserGuideCard :title="card.title" :description="card.description" :number="index + 1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

// Les données pour chaque carte
const cards = [
  { title: "Discover our platform", description: "Start your journey by exploring our user-friendly platform." },
  { title: "Customize to your liking", description: "Make it yours. Customize to create a personalized experience." },
  { title: "Enjoy performance", description: "Experience unparalleled performance to achieve more." },
  { title: "Support and grow", description: "Rest assured with our dedicated support team." }
];

// Références pour observer les cartes
const cardRefs = ref([]);
const isVisible = ref(Array(cards.length).fill(false));
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = cardRefs.value.indexOf(entry.target);
      if (index !== -1) {
        isVisible.value[index] = entry.isIntersecting;
      }
    });
  }, { threshold: 0.2, rootMargin: "0px" });

  // Observer chaque carte
  cardRefs.value.forEach((card: any) => {
    if (card) observer!.observe(card);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
/* Ajout de classes pour une animation douce */
.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.translate-y-10 {
  transform: translateY(40px);
}

.translate-y-0 {
  transform: translateY(0);
}
</style>