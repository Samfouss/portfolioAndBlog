<template>
  <div class="py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Passionate about bridging the gap between biology and computation
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2">
          <div class="prose-custom">
            <h2>Background</h2>
            <p>
              I'm a computational biologist with a passion for extracting meaningful insights from complex biological data. 
              My work spans across genomics, proteomics, and systems biology, utilizing cutting-edge data science techniques 
              to address fundamental questions in life sciences.
            </p>
            
            <h2>Research Interests</h2>
            <ul>
              <li>Genomic data analysis and interpretation</li>
              <li>Machine learning applications in biology</li>
              <li>Phylogenetic analysis and evolution</li>
              <li>Biomarker discovery and validation</li>
              <li>Multi-omics data integration</li>
            </ul>
            
            <h2>Education & Experience</h2>
            <p>
              With a strong foundation in both computer science and biology, I bring a unique perspective to 
              interdisciplinary research. My experience includes working with large-scale genomic datasets, 
              developing computational pipelines, and collaborating with wet-lab researchers to translate 
              computational findings into biological insights.
            </p>
          </div>
        </div>
        
        <div>
          <div class="card p-6 mb-8">
            <h3 class="text-lg font-semibold mb-4">Technical Skills</h3>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium">Python</span>
                  <span class="text-sm text-gray-500">95%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 95%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium">R</span>
                  <span class="text-sm text-gray-500">90%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium">Machine Learning</span>
                  <span class="text-sm text-gray-500">85%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium">Genomics</span>
                  <span class="text-sm text-gray-500">88%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div class="bg-indigo-600 h-2 rounded-full" style="width: 88%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card p-6">
            <h3 class="text-lg font-semibold mb-4">Tools & Technologies</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Python</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">R</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">TensorFlow</span>
              <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">PyTorch</span>
              <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Pandas</span>
              <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">Bioconductor</span>
              <span class="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">BLAST</span>
              <span class="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About - Portfolio',
  meta: [
    { name: 'description', content: 'Learn more about my background in data science and bioinformatics.' }
  ]
})
</script>