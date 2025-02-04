<template>
  <div class="flex items-center justify-center">
    <div
      class="relative inline-flex h-12 w-80 bg-gray-200 px-2 py-2 items-center rounded-full cursor-pointer transition-all duration-500 ease-in-out"
      @click="toggleSwitch"
    >
      <!-- Background actif qui s'adapte au texte -->
      <div
        class="absolute h-10 w-[47%] rounded-full transition-all duration-500 ease-in-out flex items-center justify-center"
        :class="isChecked ? 'translate-x-full bg-[#3A6A97]' : 'translate-x-0 bg-[#3A6A97]'"
      ></div>

      <!-- Conteneur du texte pour s'assurer qu'il est centré -->
      <div class="relative z-10 flex w-full">
        <!-- Texte gauche (Monthly) -->
        <span
          class="w-1/2 text-center text-lg font-medium transition-all duration-500 ease-in-out"
          :class="isChecked ? 'text-black' : 'text-white'"
        >
          {{ leftLabel }}
        </span>

        <!-- Texte droite (Yearly) -->
        <span
          class="w-1/2 text-center text-lg font-medium transition-all duration-500 ease-in-out"
          :class="isChecked ? 'text-white' : 'text-black'"
        >
          {{ rightLabel }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  leftLabel: {
    type: String,
    default: 'Monthly'
  },
  rightLabel: {
    type: String,
    default: 'Yearly (20% off)'
  }
});

const emit = defineEmits(['update:modelValue']);

const isChecked = ref(props.modelValue);

const toggleSwitch = () => {
  isChecked.value = !isChecked.value;
  emit('update:modelValue', isChecked.value);
};

// Synchroniser avec la prop parent
watch(() => props.modelValue, (newValue) => {
  isChecked.value = newValue;
});
</script>