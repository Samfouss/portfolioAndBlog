<template>
  <div class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="flex items-center justify-center mb-4">
          <Dna class="h-12 w-12 text-green-600 dark:text-green-400 mr-4" />
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white">{{ $t('blog.bioinformatics') }}</h1>
        </div>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('home.bioinformaticsDescription') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article class="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-green-400 to-emerald-600"></div>
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <Calendar class="h-4 w-4 mr-1" />
              <time>January 20, 2024</time>
            </div>
            <h2 class="text-xl font-semibold mb-3 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              <NuxtLink to="/blog/bioinformatics/genome-assembly-techniques">
                Modern Genome Assembly Techniques
              </NuxtLink>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Comparing different genome assembly algorithms and their applications in de novo sequencing projects.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex space-x-2">
                <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Genomics</span>
                <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Assembly</span>
              </div>
              <NuxtLink to="/blog/bioinformatics/genome-assembly-techniques" class="text-green-600 dark:text-green-400 hover:underline text-sm font-medium">
                {{ $t('blog.readMore') }} →
              </NuxtLink>
            </div>
          </div>
        </article>

        <article class="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-teal-400 to-teal-600"></div>
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <Calendar class="h-4 w-4 mr-1" />
              <time>December 15, 2023</time>
            </div>
            <h2 class="text-xl font-semibold mb-3 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              <NuxtLink to="/blog/bioinformatics/phylogenetic-analysis">
                Phylogenetic Analysis and Tree Construction
              </NuxtLink>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Understanding evolutionary relationships through computational phylogenetics and molecular clock analysis.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex space-x-2">
                <span class="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded text-xs">Phylogenetics</span>
                <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Evolution</span>
              </div>
              <NuxtLink to="/blog/bioinformatics/phylogenetic-analysis" class="text-green-600 dark:text-green-400 hover:underline text-sm font-medium">
                {{ $t('blog.readMore') }} →
              </NuxtLink>
            </div>
          </div>
        </article>

        <article class="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600"></div>
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <Calendar class="h-4 w-4 mr-1" />
              <time>November 25, 2023</time>
            </div>
            <h2 class="text-xl font-semibold mb-3 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              <NuxtLink to="/blog/bioinformatics/protein-structure-prediction">
                Protein Structure Prediction with AI
              </NuxtLink>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Exploring AlphaFold and other AI-based approaches to protein structure prediction and their impact on drug discovery.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex space-x-2">
                <span class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded text-xs">Proteins</span>
                <span class="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">AI</span>
              </div>
              <NuxtLink to="/blog/bioinformatics/protein-structure-prediction" class="text-green-600 dark:text-green-400 hover:underline text-sm font-medium">
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
import { Dna, Calendar } from 'lucide-vue-next'

useHead({
  title: () => `${$t('blog.bioinformatics')} - Portfolio`,
  meta: [
    { name: 'description', content: () => $t('home.bioinformaticsDescription') }
  ]
})
</script>