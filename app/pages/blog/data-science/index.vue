<template>
  <div class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="flex items-center justify-center mb-4">
          <BarChart3 class="h-12 w-12 text-blue-600 dark:text-blue-400 mr-4" />
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white">{{ $t('blog.dataScience') }}</h1>
        </div>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('home.dataScienceDescription') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article class="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <Calendar class="h-4 w-4 mr-1" />
              <time>January 15, 2024</time>
            </div>
            <h2 class="text-xl font-semibold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <NuxtLink to="/blog/data-science/machine-learning-genomics">
                Machine Learning in Genomics: A Comprehensive Guide
              </NuxtLink>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Exploring how machine learning algorithms can be applied to genomic data analysis, from variant calling to disease prediction.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex space-x-2">
                <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Machine Learning</span>
                <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Genomics</span>
              </div>
              <NuxtLink to="/blog/data-science/machine-learning-genomics" class="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                {{ $t('blog.readMore') }} →
              </NuxtLink>
            </div>
          </div>
        </article>

        <article class="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <Calendar class="h-4 w-4 mr-1" />
              <time>December 28, 2023</time>
            </div>
            <h2 class="text-xl font-semibold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <NuxtLink to="/blog/data-science/statistical-analysis-clinical-data">
                Statistical Analysis of Clinical Trial Data
              </NuxtLink>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Best practices for analyzing clinical trial data, including power analysis, hypothesis testing, and handling missing data.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex space-x-2">
                <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Statistics</span>
                <span class="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">Clinical Data</span>
              </div>
              <NuxtLink to="/blog/data-science/statistical-analysis-clinical-data" class="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                {{ $t('blog.readMore') }} →
              </NuxtLink>
            </div>
          </div>
        </article>

        <article class="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <Calendar class="h-4 w-4 mr-1" />
              <time>November 10, 2023</time>
            </div>
            <h2 class="text-xl font-semibold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <NuxtLink to="/blog/data-science/data-visualization-python">
                Advanced Data Visualization with Python
              </NuxtLink>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Creating compelling visualizations for biological data using matplotlib, seaborn, and plotly to communicate insights effectively.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex space-x-2">
                <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Python</span>
                <span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">Visualization</span>
              </div>
              <NuxtLink to="/blog/data-science/data-visualization-python" class="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                {{ $t('blog.readMore') }} →
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BarChart3, Calendar } from 'lucide-vue-next'

useHead({
  title: () => `${$t('blog.dataScience')} - Portfolio`,
  meta: [
    { name: 'description', content: () => $t('home.dataScienceDescription') }
  ]
})
</script>