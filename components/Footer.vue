<template>
  <footer class="bg-gradient-to-t from-gray-200 to-white py-12">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-900">
        
        <!-- Logo -->
        <div>
          <h2 class="text-2xl font-bold">AZURA</h2>
        </div>

        <!-- Pages Link -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Pages link</h3>
          <ul class="space-y-2">
            <li v-for="link in pagesLinks" :key="link.name">
              <NuxtLink :to="link.href" class="hover:text-blue-500">{{ link.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Utility Pages -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Utility Pages</h3>
          <ul class="space-y-2">
            <li v-for="link in utilityLinks" :key="link.name">
              <NuxtLink :to="link.href" class="hover:text-blue-500">{{ link.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact us</h3>
          <ul class="space-y-2">
            <li class="flex items-center space-x-2">
              <Icon name="material-symbols:mail-outline" class="text-gray-500" />
              <span>hello@gmail.com</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="material-symbols:call" class="text-gray-500" />
              <span>+124 555 666 99</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Follow us Section -->
      <div class="flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-6">
        <p class="text-gray-500 text-sm">Coded by <NuxtLink to="#" class="underline hover:text-blue-500">Léo Pellegrin</NuxtLink>, Powered by <NuxtLink to='https://nuxt.com' class="underline hover:text-green-500">Nuxt</NuxtLink></p>
        
        <!-- Social Icons -->
        <div class="flex space-x-4">
          <Icon name="uil:instagram" class="w-6 h-6 text-gray-500 hover:text-gray-900" />
          <Icon name="uil:facebook" class="w-6 h-6 text-gray-500 hover:text-gray-900" />
          <Icon name="uil:dribbble" class="w-6 h-6 text-gray-500 hover:text-gray-900" />
          <Icon name="uil:x" class="w-6 h-6 text-gray-500 hover:text-gray-900" />
          <Icon name="uil:linkedin" class="w-6 h-6 text-gray-500 hover:text-gray-900" />
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
const pagesLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#' },
  { name: 'Feature', href: '/#' },
  { name: 'Blog', href: '/#' },
  { name: 'Contact', href: '/#' },
  { name: 'Career', href: '/#' },
  { name: 'Pricing', href: '/#' },
  { name: 'Privacy Policy', href: '/#' }
];

const utilityLinks = [
  { name: 'Style Guide', href: '/#' },
  { name: 'Instructions', href: '/#' },
  { name: 'Licenses', href: '/#' },
  { name: 'Changelog', href: '/#' },
  { name: 'Link in Bio', href: '/#' },
  { name: 'Coming Soon', href: '/#' },
  { name: 'Password Protected', href: '/#' },
  { name: 'Error 404', href: '/#' }
];
</script>

<style scoped>
footer {
  font-family: 'Inter', sans-serif;
}
</style>