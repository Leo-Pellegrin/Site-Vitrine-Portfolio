<template>
  <section ref="globalSectionRef" class="py-24 bg-white opacity-0 transform translate-y-10 transition-all duration-700">
    <div class="flex justify-center px-20 text-center">
      <p class="text-6xl font-black">Discover why people love Azura</p>
    </div>
    <UCarousel v-slot="{ item, index }" :items="items" :ui="{ item: 'w-full' }">
      <div class="text-center mx-auto">
        <UAvatar></UAvatar>

        <p class="font-semibold">
          {{ index + 1 }}. {{ item.name }}
        </p>
      </div>
    </UCarousel>
  </section>
</template>

<script lang="ts" setup>
const items = [{
  name: 'Sébastien Chopin',
  to: 'https://github.com/Atinux',
  avatar: { src: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/atinux' }
}, {
  name: 'Pooya Parsa',
  to: 'https://github.com/pi0',
  avatar: { src: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/pi0' }
}, {
  name: 'Daniel Roe',
  to: 'https://github.com/danielroe',
  avatar: { src: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/danielroe' }
}, {
  name: 'Anthony Fu',
  to: 'https://github.com/antfu',
  avatar: { src: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/antfu' }
}]

// Référence pour la section globale
const globalSectionRef = ref<HTMLElement | null>(null);

// Observer la section globale pour appliquer l'animation
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        } else {
          entry.target.classList.remove("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 }
  );

  if (globalSectionRef.value) {
    observer.observe(globalSectionRef.value);
  }
});
</script>

<style scoped></style>