<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Data Science & 
            <span class="text-blue-600 dark:text-blue-400">Bioinformatics</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Exploring the intersection of computational biology and data science to unlock insights from complex biological data and drive scientific discovery.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/about" class="btn-primary">
              Learn More About Me
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-secondary">
              Get In Touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Work -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Work</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Recent projects and research in data science and bioinformatics
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card p-8">
            <div class="flex items-center mb-4">
              <BarChart3 class="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 class="text-xl font-semibold">Data Science</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Machine learning models, statistical analysis, and data visualization techniques for biological and clinical datasets.
            </p>
            <NuxtLink to="/blog/data-science" class="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Explore Data Science Posts →
            </NuxtLink>
          </div>
          
          <div class="card p-8">
            <div class="flex items-center mb-4">
              <Dna class="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
              <h3 class="text-xl font-semibold">Bioinformatics</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Genomic analysis, sequence alignment, phylogenetic studies, and computational approaches to biological problems.
            </p>
            <NuxtLink to="/blog/bioinformatics" class="text-green-600 dark:text-green-400 font-medium hover:underline">
              Explore Bioinformatics Posts →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Technologies and methodologies I work with
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code class="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-lg font-semibold mb-2">Programming</h3>
            <p class="text-gray-600 dark:text-gray-300">Python, R, JavaScript, SQL</p>
          </div>
          
          <div class="text-center">
            <div class="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database class="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-lg font-semibold mb-2">Data Analysis</h3>
            <p class="text-gray-600 dark:text-gray-300">Pandas, NumPy, Scikit-learn, Bioconductor</p>
          </div>
          
          <div class="text-center">
            <div class="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain class="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 class="text-lg font-semibold mb-2">Machine Learning</h3>
            <p class="text-gray-600 dark:text-gray-300">TensorFlow, PyTorch, Deep Learning</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { BarChart3, Dna, Code, Database, Brain } from 'lucide-vue-next'

useHead({
  title: 'Portfolio - Data Science & Bioinformatics',
  meta: [
    { name: 'description', content: 'Portfolio showcasing data science and bioinformatics projects, research, and expertise.' }
  ]
})
</script>