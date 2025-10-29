<template>
  <nav class="bg-gray-900 border-b border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Left: Brand Name -->
        <NuxtLink
          to="/"
          class="text-xl font-bold text-white hover:text-gray-300 transition-colors duration-200"
        >
          Data2<span class="text-red-400">Knowledge</span>
        </NuxtLink>

        <!-- Center: Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/projects' }"
          >
            Projects
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path.startsWith('/blog') }"
          >
            Blog
          </NuxtLink>
        </div>

        <!-- Right: Language Switcher & GitHub Icon -->
        <div class="flex items-center space-x-4">
          <!-- Language Switcher -->
          <button
            @click="switchLanguage"
            class="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-200 text-sm"
            :title="$i18n.locale === 'en' ? 'Switch to French' : 'Passer en anglais'"
          >
            {{ currentLanguage }}
          </button>

          <!-- GitHub Icon -->
          <a
            href="https://github.com"
            target="_blank"
            class="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <Github class="h-6 w-6" />
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-white"
        >
          <Menu class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden py-4 border-t border-gray-700"
      >
        <div class="flex flex-col space-y-2">
          <NuxtLink
            to="/"
            class="nav-link-mobile"
            @click="mobileMenuOpen = false"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/projects"
            class="nav-link-mobile"
            @click="mobileMenuOpen = false"
            >Projects</NuxtLink
          >
          <NuxtLink
            to="/blog"
            class="nav-link-mobile"
            @click="mobileMenuOpen = false"
            >Blog</NuxtLink
          >
          
          <!-- Language Switcher in Mobile Menu -->
          <button
            @click="switchLanguage"
            class="nav-link-mobile text-left"
            :title="$i18n.locale === 'en' ? 'Switch to French' : 'Passer en anglais'"
          >
            Language / Langue: {{ currentLanguage }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Menu, Github } from "lucide-vue-next";

const mobileMenuOpen = ref(false);
const { locale, locales, setLocale } = useI18n();

// Get current language display name
const currentLanguage = computed(() => {
  return locale.value === 'en' ? 'FR' : 'EN';
});

// Switch language function
const switchLanguage = () => {
  const newLocale = locale.value === 'en' ? 'fr' : 'en';
  setLocale(newLocale);
};
</script>

<style scoped>
.nav-link {
  @apply text-gray-300 hover:text-white font-medium transition-colors duration-200;
}

.nav-link-mobile {
  @apply block px-4 py-2 text-gray-300 hover:text-red-400 hover:bg-gray-800 rounded-lg transition-colors duration-200;
}

.nav-link-active {
  @apply text-red-400 border-b-2 border-red-400 hover:text-red-400;
}
</style>
