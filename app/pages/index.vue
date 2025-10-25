<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column: Text Content -->
          <div class="text-left">
            <p class="text-xl mb-4 text-gray-900">Hello, I'm Fousseni SAMA,</p>
            <h1
              class="text-5xl text-gray-900 md:text-7xl font-bold mb-8 leading-tight"
            >
              Data science &<br /><span class="text-red-800"
                >Bioinformatics</span
              >
            </h1>
            <p class="text-lg text-gray-600 mb-8 max-w-2xl">
              Transforming data into actionable insights through innovative
              technology solutions and data-driven approaches.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn-primary">
                Contact Me
              </NuxtLink>
              <NuxtLink to="/projects" class="btn-secondary">
                View Projects
              </NuxtLink>
            </div>
          </div>

          <!-- Right Column: Profile Image -->
          <div class="flex justify-center lg:justify-end">
            <div
              class="w-80 h-96 bg-gray-600 rounded-2xl flex items-center justify-center"
            >
              <div
                class="w-64 h-80 bg-gray-500 rounded-xl flex items-center justify-center"
              >
                <div
                  class="w-48 h-64 bg-gray-400 rounded-lg flex items-center justify-center"
                >
                  <div class="text-gray-600 text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-8">
          <h2 class="text-5xl md:text-7xl font-bold mr-8">Overview</h2>
          <div class="flex-1 h-px bg-gray-600"></div>
        </div>
        <div class="max-w-4xl">
          <p class="text-lg leading-relaxed mb-8">
            I specialize in transforming complex data into actionable insights
            through innovative technology solutions. With expertise in
            full-stack development, data science, and machine learning, I help
            organizations unlock the potential of their data to drive informed
            decision-making and business growth.
          </p>
          <p class="text-lg leading-relaxed">
            My approach combines technical excellence with a deep understanding
            of business needs, ensuring that every solution I deliver not only
            meets technical requirements but also provides real value to
            stakeholders.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Bioinformatics-->
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-2">Bioinformatics</h3>
            <p class="text-gray-400">60+ Hours Experience</p>
          </div>

          <!-- Genomics -->
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-2">Genomics</h3>
            <p class="text-gray-400">4 Years Experience</p>
          </div>

          <!-- Data science -->
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-2">Data science</h3>
            <p class="text-gray-400">120+ Hours Experience</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Me Section -->
    <section class="py-20 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-4xl md:text-6xl font-bold mb-8 text-white">
            Get In Touch
          </h2>
          <p class="text-lg text-white mb-12 max-w-2xl mx-auto">
            Ready to transform your data into knowledge? Let's discuss how I can
            help you achieve your goals.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary text-red-400">
              Contact Me
            </NuxtLink>
            <a
              href="https://github.com"
              target="_blank"
              class="btn-secondary text-red-400"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup>
useHead({
  title: "Emadalmagedy - Full Stack Developer",
  meta: [
    {
      name: "description",
      content:
        "Full stack developer with expertise in front-end development, Python, and machine learning.",
    },
  ],
});
</script>
