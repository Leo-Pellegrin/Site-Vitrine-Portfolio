<template>
  <UContainer class="bg-black text-white pt-24 mt-20 rounded-3xl text-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col justify-center gap-12 items-center px-8">

        <h2 class="text-5xl font-bold">
          Get the latest news and updates about our app
          <span class="block text-6xl text-[#3A6A97]">Azura</span>
        </h2>

        <p class="text-gray-300 text-xl">
          Our firmament living to replenish them created after divide said have to give dominion light without days face
          saw wherein.
        </p>

        <!-- Email Subscription Form agrandi -->
        <div class="flex bg-white rounded-full p-3 max-w-2xl w-full">
          <UInput v-model="email" placeholder="Enter Your Email"
            class="flex-1 px-6 py-4 text-black/70 bg-transparent focus:outline-none" variant="none"
            :ui="{ placeholder: 'text-xl', size: 'lg' }" />
          <UButton variant="solid"
            class="bg-[#3A6A97] hover:bg-black transition-colors px-10 py-4 text-lg rounded-full">
            Subscribe!
          </UButton>
        </div>

        <!-- Trusted By Section -->
        <div>
          <p class="text-gray-400 px-16">
            Trusted by <span class="text-[#3A6A97]">1200+</span> leading brands
          </p>
          <SubscriptionMarquee class="my-10"/>
        </div>

      </div>
    </div>
  </UContainer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
</script>