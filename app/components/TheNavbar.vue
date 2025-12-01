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
            :title="locale === 'en' ? 'Switch to French' : 'Passer en anglais'"
          >
            {{ currentLanguage }}
          </button>

          <!-- GitHub Icon -->
          <a
            href="https://github.com/Samfouss"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
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
            :title="locale === 'en' ? 'Switch to French' : 'Passer en anglais'"
          >
            Language / Langue: {{ currentLanguage }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Menu } from "lucide-vue-next";

const mobileMenuOpen = ref(false);
const { locale, setLocale } = useI18n();

// Get current language display name
const currentLanguage = computed(() => {
  return locale.value === "en" ? "FR" : "EN";
});

// Switch language function
const switchLanguage = () => {
  const newLocale = locale.value === "en" ? "fr" : "en";
  setLocale(newLocale);
};
</script>

<style scoped>
@import "tailwindcss" @reference;

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
