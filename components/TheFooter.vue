<template>
  <footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Portfolio</h3>
          <p class="text-gray-600 dark:text-gray-400">
            Exploring the intersection of data science and bioinformatics to unlock insights from complex biological data.
          </p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/about" class="footer-link">About</NuxtLink></li>
            <li><NuxtLink to="/blog/data-science" class="footer-link">Data Science</NuxtLink></li>
            <li><NuxtLink to="/blog/bioinformatics" class="footer-link">Bioinformatics</NuxtLink></li>
            <li><NuxtLink to="/contact" class="footer-link">Contact</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Connect</h3>
          <div class="flex space-x-4">
            <a href="#" class="footer-social">
              <Github class="h-5 w-5" />
            </a>
            <a href="#" class="footer-social">
              <Linkedin class="h-5 w-5" />
            </a>
            <a href="#" class="footer-social">
              <Mail class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
</script>

<style scoped>
.footer-link {
  @apply text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200;
}

.footer-social {
  @apply text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200;
}
</style>