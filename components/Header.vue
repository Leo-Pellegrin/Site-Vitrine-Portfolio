<template>
  <header class="sticky w-full" v-if="header">
    <div class="flex justify-between mx-auto mt-8">
      <!-- Header Title -->
      <p class="text-3xl uppercase ml-6">{{ header.title }}</p>

      <!-- Navigation Menu -->
      <div class="flex items-center justify-between">
        <div v-for="(item, index) in header.menu" :key="item.label" class="relative group">
          <!-- Dropdown for Second Item -->
          <template v-if="index === 1">
            <button class="flex items-center my-auto gap-2 text-lg menu-header transition ease-in-out delay-300">
              {{ item.label }}
              <UIcon name="heroicons:chevron-down" />
            </button>
            <div
              class="absolute hidden group-hover:flex z-10 bg-white border-gray-300 rounded-md shadow-lg mt-2 w-40 flex-col opacity-O">
              <ul>
                <li>
                  <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Option 1
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Option 2
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Option 3
                  </a>
                </li>
              </ul>
            </div>
          </template>

          <!-- Regular Button for Other Items -->
          <UButton v-else :href="item.link" variant="ghost"
            class="menu-header mx-2 text-black hover:bg-transparent transition ease-in-out delay-200"
            :ui="{ rounded: 'rounded-full' }">
            <span class="text-lg">{{ item.label }}</span>
          </UButton>
        </div>
      </div>

      <!-- Sign Up Button -->
      <UButton href="/sign-up" class="signup transition ease-in-out delay-100 mr-6" :ui="{ rounded: 'rounded-full' }">
        <span class="text-lg px-6 py-1">Sign up !</span>
      </UButton>
    </div>
  </header>

  <p v-else>Chargement...</p>
</template>

<script setup lang="ts">
interface MenuItem {
  label: string
  link: string
}

interface Header {
  title: string
  menu: MenuItem[]
}

const header = ref<Header | null>(null)

onMounted(async () => {
  try {
    const result = await queryCollection('header').all()
    if (result.length > 0) {
      header.value = result[0].meta.body
      console.log(header.value)
    } else {
      console.warn('Aucun élément trouvé dans la collection "header".')
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données :', error)
  }
})
</script>

<style scoped>
.menu-header:hover {
  color: #3A6A97;
}

.signup {
  background-color: black;
}

.signup:hover {
  background-color: #3A6A97;
}

.group-hover\:flex {
  display: flex;
  opacity: 0;
  /* Départ invisible */
  transform: translateY(-10px);
  /* Position initiale légèrement déplacée */
  transition: all 0.3s ease-in-out;
  /* Transition fluide */
}

.group:hover .group-hover\:flex {
  opacity: 1;
  /* Visible lorsqu'en hover */
  transform: translateY(0);
  /* Retour à sa position finale */
}
</style>