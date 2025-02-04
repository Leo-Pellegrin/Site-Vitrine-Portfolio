<template>
  <div class="mr-5">
    <!-- En-tête de la "card" : icône + titre -->
    <div class="flex flex-col items-start mb-4">
      <!-- Conteneur icône -->
      <div class="p-2 mb-5 rounded-lg bg-white/10">       
        <Icon size="3em" :name="icon" />
      </div>

      <!-- Titre -->
      <h3 class="text-3xl font-semibold">
        {{ title }}
      </h3>
    </div>

    <!-- Description -->
    <p class="text-sm text-gray-300">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
/* Styles propres à la carte, si besoin */
</style>