<template>
  <UCard :class="[
    isHighlighted ? 'bg-black text-white shadow-xl scale-110 md:scale-120' : 'bg-white shadow-lg',
  ]" class="rounded-3xl py-10 px-6 relative transition-transform duration-300 flex flex-col justify-between h-full">
    <template #header>
      <div class="flex flex-col items-start">
        <UBadge v-if="isHighlighted" class="mb-3 text-md bg-[#3A6A97]" variant="solid">Most popular</UBadge>
        <h3 class="text-3xl font-black my-3">{{ title }}</h3>
        <div class="flex items-baseline gap-1 mb-4">
          <span class="text-4xl md:text-5xl font-bold">{{ price }}</span>
          <span :class="isHighlighted ? 'text-gray-400' : 'text-gray-600'">/month</span>
        </div>
        <p :class="isHighlighted ? 'text-gray-400' : 'text-gray-600'" class="text-lg">{{ description }}</p>
      </div>
    </template>

    <!-- ✅ Liste des fonctionnalités -->
    <ul :class="isHighlighted ? 'text-gray-200' : 'text-gray-700'" class="space-y-4 mt-4">
      <li v-for="feature in features" :key="feature" class="flex items-center gap-3">
        <Icon name="i-heroicons-check-circle" class="text-blue-600 text-lg" />
        {{ feature }}
      </li>
    </ul>

    <template #footer>
      <div class="flex flex-grow items-center justify-center">
        <UButton :color="isHighlighted ? 'white' : 'black'" block class="rounded-full mt-2"
          :class="isHighlighted ? 'text-black hover:bg-[#3A6A97] hover:text-white border-none' : 'text-white hover:bg-white hover:text-black hover:border-black border'">
          Get started
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<script setup>
defineProps({
  title: String,
  price: String,
  description: String,
  features: Array,
  isHighlighted: Boolean
});
</script>