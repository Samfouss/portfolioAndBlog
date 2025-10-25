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
            Overview
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/about' }"
          >
            About Me
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

        <!-- Right: GitHub Icon -->
        <div class="flex items-center">
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
            >Overview</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="nav-link-mobile"
            @click="mobileMenuOpen = false"
            >About Me</NuxtLink
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
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Menu, Github } from "lucide-vue-next";

const mobileMenuOpen = ref(false);
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
