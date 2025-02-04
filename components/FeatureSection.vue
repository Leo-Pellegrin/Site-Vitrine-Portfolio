<template>
  <section ref="globalSectionRef" class="py-24 bg-white opacity-0 transform translate-y-10 transition-all duration-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-6xl font-bold text-center px-40 mb-20">Spotlight on distinctive features</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Bloc 1 : Worldwide Users -->
        <div class="bg-black text-white rounded-3xl p-8 flex flex-col justify-between shadow-md -rotate-3">
          <div class="flex flex-col ml-auto">
            <h3 class="text-6xl font-bold"><span style="color:#3A6A97">></span>12K</h3>
            <p class="text-gray-300">Worldwide users</p>
          </div>
          <div class="flex flex-col space-x-2 mt-32">
            <UAvatarGroup size="md" :max="3">
              <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
              <UAvatar src="https://avatars.githubusercontent.com/u/904724?v=4" alt="Atinux" />
              <UAvatar src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="smarroufin" />
            </UAvatarGroup>
            <span class="text-md mt-2">Available users that always love us</span>
          </div>
        </div>

        <!-- Bloc 2 : Chat Support -->
        <div class="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <h3 class="text-5xl font-black tracking-tighter">24<span style="color:#3A6A97">/</span>7</h3>
            <p class="text-gray-800 font-semibold mt-3">Fast chat support</p>
          </div>
          <div class="mt-10 flex flex-col">
            <div class="flex items-center space-x-3 pr-14">
              <UAvatar size="md" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
              <p class="bg-black text-white px-6 py-4 rounded-ss-full rounded-se-full rounded-ee-full">Hey there! I'm
                here to help you.</p>
            </div>
            <div class="flex ml-auto items-center space-x-3 mt-2 pl-12">
              <p class="bg-white text-black px-6 py-4 rounded-ss-full rounded-se-full rounded-es-full border">How do I
                install gulp ?</p>
              <UAvatar size="md" src="https://avatars.githubusercontent.com/u/904724?v=4" alt="Atinux" />
            </div>
          </div>
        </div>

        <!-- Bloc 3 : Integration -->
        <div
          class="bg-gradient-to-t from-[#8AA6C0] via-[#AFC2D5] to-[#FBFCFD] rounded-3xl px-6 pt-10 flex flex-col justify-between lg:row-span-2">
          <div class="items-start">
            <h3 class="text-center text-3xl font-black">Integrate smoothly with other apps</h3>
            <p class="text-left text-gray-600 text-md mt-8">Experience a new level of connectivity and unlock the full
              potential of your digital ecosystem.</p>
          </div>
          <div class="flex mt-4">
            <Placeholder class="h-20" />
          </div>
        </div>

        <!-- Bloc 4 : Application Features -->
        <div class="bg-gray-100 rounded-3xl p-8 lg:col-span-2 flex flex-col justify-between">
          <h3 class="text-4xl font-black pr-32">Unlock features with our iOS and Android apps</h3>
          <div class="flex items-center space-x-4 mt-4">
            <NuxtImg class="w-40 hover:translate-y-1 transition-all delay-200"
              src="https://help.opportunitynetwork.com/hs-fs/hubfs/apple.png?width=400&name=apple.png" alt="App Store"
              placeholder />
            <NuxtImg class="w-36 hover:translate-y-1 transition-all delay-200"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play" />
          </div>
          <div class="flex mt-4">
            <div class="justify-start">
              <p class="text-3xl text-black tracking-tighter">4.5 / 5.0</p>
              <Icon v-for="i in 5" :key="i" name="material-symbols:kid-star" class="text-[#3A6A97] text-xl mt-4" />
            </div>
            <div class="mx-auto">
              <p class="text-4xl text-black">1.5<span class="text-[#3A6A97]">M</span></p>
              <p class="text-gray-800 text-lg mt-3">app downloaded</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Bouton Explore -->
      <div class="mt-12 flex justify-center">
        <UButton color="black" class="p-5 rounded-2xl hover:bg-[#3A6A97] transition-colors">
          <span class="text-xl">Explore all features</span>
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Référence pour la section globale
const globalSectionRef = ref < HTMLElement | null > (null);

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