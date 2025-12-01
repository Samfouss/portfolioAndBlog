<template>
  <div class="min-h-screen bg-white">
    <!-- Work in Progress Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Icon and Title -->
        <div class="text-center mb-12">
          <div class="flex justify-center mb-6">
            <div class="relative">
              <div
                class="absolute inset-0 bg-red-100 rounded-full animate-pulse"
              ></div>
              <div class="relative bg-red-900 rounded-full p-6">
                <Clock class="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {{ title }}
          </h1>
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold"
          >
            <Wrench class="h-4 w-4" />
            <span>{{ statusText || "Work in Progress" }}</span>
          </div>
        </div>

        <!-- Content Card -->
        <div
          class="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12"
        >
          <div class="text-center space-y-6">
            <p class="text-xl text-gray-700 leading-relaxed">
              {{ description }}
            </p>

            <div
              v-if="expectations && expectations.length > 0"
              class="pt-8 border-t border-gray-200"
            >
              <h2 class="text-2xl font-semibold mb-4 text-gray-900">
                What to Expect
              </h2>
              <ul class="text-left space-y-3 text-gray-700 max-w-2xl mx-auto">
                <li
                  v-for="(item, index) in expectations"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <div class="flex-shrink-0 mt-1">
                    <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Action Buttons -->
            <div class="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink
                to="/projects"
                class="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft class="h-5 w-5" />
                Back to Projects
              </NuxtLink>
              <NuxtLink
                v-if="showBlogLink"
                to="/blog"
                class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                View Blog
                <ArrowRight class="h-5 w-5" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Progress Indicator -->
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-500">
            {{ footerText || "Check back soon for updates!" }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Clock, Wrench, ArrowLeft, ArrowRight } from "lucide-vue-next";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expectations: {
    type: Array,
    default: () => [],
  },
  statusText: {
    type: String,
    default: "Work in Progress",
  },
  footerText: {
    type: String,
    default: "Check back soon for updates!",
  },
  showBlogLink: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
