<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <NuxtLink to="/" class="text-xl font-bold text-blue-600 dark:text-blue-400">
          Portfolio
        </NuxtLink>
        
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <div class="relative group">
            <button class="nav-link flex items-center">
              Blog
              <ChevronDown class="ml-1 h-4 w-4" />
            </button>
            <div class="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <NuxtLink to="/blog/data-science" class="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg">
                Data Science
              </NuxtLink>
              <NuxtLink to="/blog/bioinformatics" class="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded-b-lg">
                Bioinformatics
              </NuxtLink>
            </div>
          </div>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          <button @click="toggleColorMode" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <Sun v-if="$colorMode.value === 'dark'" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
          </button>
        </div>
        
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
          <Menu class="h-6 w-6" />
        </button>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col space-y-2">
          <NuxtLink to="/" class="nav-link-mobile">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link-mobile">About</NuxtLink>
          <NuxtLink to="/blog/data-science" class="nav-link-mobile">Data Science</NuxtLink>
          <NuxtLink to="/blog/bioinformatics" class="nav-link-mobile">Bioinformatics</NuxtLink>
          <NuxtLink to="/contact" class="nav-link-mobile">Contact</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { Menu, ChevronDown, Sun, Moon } from 'lucide-vue-next'

const colorMode = useColorMode()
const mobileMenuOpen = ref(false)

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200;
}

.nav-link-mobile {
  @apply block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200;
}

.router-link-active {
  @apply text-blue-600 dark:text-blue-400;
}
</style>