<template>
  <div class="flex flex-col items-center justify-center text-center p-10">
    <div>
      <UButton color="black" class="text-2xl py-4 px-5" :ui="{ rounded: 'rounded-full' }"> 0{{ props.number }}</UButton>
    </div>
    <h3 class="text-4xl font-bold mt-10">{{ props.title }}</h3>
    <p class="text-md mt-10">{{ props.description }}</p>

    <div class="mt-4">
      <UButton href="/get-started" size="xl" class="getting-started transition-all duration-300 ease-in-out" icon="i-heroicons-arrow-up-right"
        :trailing="true" :ui="{ rounded: 'rounded-full' }">
        <span class="text-lg px-6 py-1">Get Started</span>
      </UButton>
    </div>

  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  number: {
    type: Number,
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
div {
  transition: transform 0.3s ease;
}

.getting-started{
  background-color: #3A6A97;
}

.getting-started:hover{
  background-color: white;
  color: #3A6A97;
  border: solid 1px #3A6A97;
}
</style>