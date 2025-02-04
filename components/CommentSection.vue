<template>
  <section ref="globalSectionRef" class="py-24 bg-white opacity-0 transform translate-y-10 transition-all duration-700">
    <div class="flex justify-center px-20 text-center">
      <p class="text-6xl font-black">Discover why people love Azura</p>
    </div>
    <UCarousel ref="carouselRef" :items="items" class="mt-20" :ui="{
      item: 'w-full',
      indicators: {
        wrapper: 'absolute flex items-center justify-center gap-3 -bottom-8 md:-bottom-12 lg:-bottom-12 inset-x-0',
        base: 'rounded-full h-5 w-5',
        active: 'bg-[#3A6A97]',
        inactive: 'bg-gray-600'
      }
    }" indicators>
      <template #default="{ item }">
        <div class="text-center mx-auto">
          <UAvatar size="3xl" :src="item.avatar" alt="Sébastien Chopin" />

          <p class="text-2xl px-40 font-bold mt-10">
            {{ item.comment }}
          </p>

          <div class="mt-10">
            <p class="text-3xl font-black">{{ item.name }}</p>
            <p class="text-lg text-gray-600 mt-3">{{ item.role }}</p>
          </div>
        </div>
      </template>
    </UCarousel>
    <div class="flex justify-center flex-wrap gap-6 mt-20 px-10">
      <UCard v-for="item in stores" :key="item.name"
        class="bg-[#F4F4F4] w-full max-w-[180px] md:max-w-[240px] lg:max-w-[300px] flex flex-col items-center justify-center">
        <div class="flex justify-center items-center">
          <NuxtImg :src="item.logo" sizes="1vw"
            class="h-auto w-[40px] md:w-[60px] lg:w-[80px] aspect-square object-contain" />
          <div class="flex flex-col items-center gap-2 mt-2 mx-5">
            <p class="mr-auto text-2xl font-black">{{ item.name }}</p>
            <div class="flex items-center gap-1">
              <p class="text-lg font-bold">{{ item.rate }}</p>
              <Icon v-for="i in 5" :key="i" name="material-symbols:kid-star" class="text-yellow-400 text-xl" />
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script lang="ts" setup>
const items = [{
  name: 'Sébastien Chopin',
  comment: 'Our passion for customer excellence is just one reason why we are the market leader. We\'ve always worked very hard to give our customers the best experience. Was out laughter raptures returned outweigh. Luckily cheered Colonel I do we attack highest enabled.',
  avatar: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/atinux',
  role: 'Ceo & Co-Founder',
}, {
  name: 'Pooya Parsa',
  comment: 'The team\'s dedication and focus on creating amazing user experiences is unparalleled. Every project feels fresh and aligned with our vision. Could not ask for a better partner.',
  avatar: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/pi0',
  role: 'Lead Developer',
}, {
  name: 'Daniel Roe',
  comment: 'Collaboration and innovation are at the core of their process. Working together has not only boosted our performance but also our confidence in reaching greater heights.',
  avatar: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/danielroe',
  role: 'Technical Advisor',
}, {
  name: 'Anthony Fu',
  comment: 'Their adaptability to changing needs and technology trends is commendable. We\'ve always felt like we\'re in safe hands, and their results consistently exceed our expectations.',
  avatar: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/antfu',
  role: 'Open Source Contributor',
}];

const stores = [
  {
    name: 'Apple Store',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png',
    rate: '4.8'
  },
  {
    name: 'Play Store',
    logo: 'https://cdn.freebiesupply.com/logos/large/2x/google-play-store-logo-png-transparent.png',
    rate: '4.8'
  },
]

// Référence pour la section globale
const globalSectionRef = ref<HTMLElement | null>(null);

const carouselRef = ref()

// Observer la section globale pour appliquer l'animation
onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 5000)

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