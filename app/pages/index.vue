<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column: Text Content -->
          <div class="text-left">
            <h1
              class="text-5xl text-gray-900 md:text-7xl font-bold mb-8 leading-tight"
            >
              {{ $t("home.title1") }}
              <span class="text-red-800">{{ $t("home.title2") }}</span>
            </h1>

            <p class="text-xl text-gray-600 mb-8 max-w-2xl">
              {{ $t("home.title0") }}
            </p>
            <p class="text-lg text-gray-600 mb-8 max-w-2xl">
              {{ $t("home.presentation") }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#contact" class="btn-primary"> Contact Me </a>
              <NuxtLink to="/projects" class="btn-secondary">
                View Projects
              </NuxtLink>
            </div>
          </div>

          <!-- Right Column: Profile Image -->
          <div class="flex justify-center lg:justify-end">
            <div class="w-96 h-[32rem] rounded-2xl overflow-hidden shadow-lg">
              <img
                :src="sam1Image"
                alt="Profile picture"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-8">
          <h2 class="text-5xl md:text-7xl font-bold mr-8">
            {{ $t("home.overviewTitle") }}
          </h2>
          <div class="flex-1 h-px bg-gray-600"></div>
        </div>
        <div class="max-w-4xl">
          <p class="text-lg leading-relaxed mb-8">
            {{ $t("home.overview") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-12">
          <h2 class="text-5xl md:text-7xl font-bold mr-8 text-white">
            {{ $t("home.skillsTitle") }}
          </h2>
          <div class="flex-1 h-px bg-gray-600"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Technical Skills -->
          <div class="card p-6">
            <h3 class="text-2xl font-semibold mb-6">
              {{ $t("home.skillsTitle") }}
            </h3>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium">Python</span>
                  <span class="text-sm text-gray-500">90%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-blue-600 h-2 rounded-full"
                    style="width: 90%"
                  ></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium">R</span>
                  <span class="text-sm text-gray-500">95%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-green-600 h-2 rounded-full"
                    style="width: 95%"
                  ></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium">{{
                    $t("home.apprentissageMachine")
                  }}</span>
                  <span class="text-sm text-gray-500">100%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-purple-600 h-2 rounded-full"
                    style="width: 100%"
                  ></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium">Genomics</span>
                  <span class="text-sm text-gray-500">40%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-indigo-600 h-2 rounded-full"
                    style="width: 40%"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools & Technologies -->
          <div class="card p-6">
            <h3 class="text-2xl font-semibold mb-6">Tools & Technologies</h3>
            <div class="flex flex-wrap gap-3">
              <span
                class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >Python</span
              >
              <span
                class="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                >R</span
              >
              <span
                class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                >TensorFlow</span
              >
              <span
                class="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium"
                >PyTorch</span
              >
              <span
                class="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                >Pandas</span
              >
              <span
                class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                >Bioconductor</span
              >
              <span
                class="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium"
                >BLAST</span
              >
              <span
                class="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                >Docker</span
              >
              <span
                class="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium"
                >SQL</span
              >
              <span
                class="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                >Git</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-12">
          <h2 class="text-5xl md:text-7xl font-bold mr-8">
            {{ $t("home.educations") }}
          </h2>
          <div class="flex-1 h-px bg-gray-600"></div>
        </div>

        <div class="max-w-4xl space-y-6">
          <div class="card p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold mb-1">
                  {{ $t("home.education1.degree") }}
                </h3>
                <p class="text-blue-600 font-medium">
                  {{ $t("home.education1.institution") }}
                </p>
              </div>
              <span class="text-sm text-gray-500">
                {{ $t("home.education1.period") }}
              </span>
            </div>
            <p class="text-gray-600">
              {{ $t("home.education1.focus") }}
            </p>
          </div>

          <div class="card p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold mb-1">
                  {{ $t("home.education2.degree") }}
                </h3>
                <p class="text-blue-600 font-medium">
                  {{ $t("home.education2.institution") }}
                </p>
              </div>
              <span class="text-sm text-gray-500">
                {{ $t("home.education2.period") }}
              </span>
            </div>
            <p class="text-gray-600">
              {{ $t("home.education2.focus") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-12">
          <h2 class="text-5xl md:text-7xl font-bold mr-8 text-white">
            {{ $t("home.experiences") }}
          </h2>
          <div class="flex-1 h-px bg-gray-600"></div>
        </div>

        <div
          class="flex flex-col justify-center divide-y divide-gray-600 [&>*]:py-16"
        >
          <div class="w-full max-w-3xl">
            <div class="">
              <div class="relative pl-4 sm:pl-4 py-6 group">
                <!-- Purple label -->
                <div
                  class="font-caveat font-medium text-2xl text-indigo-400 mb-1 sm:mb-0"
                >
                  {{ $t("home.experience1.title") }}
                </div>
                <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 w-full group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-600 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-400 after:border-4 after:box-content after:border-gray-800 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5"
                >
                  <div
                    class="text-xl font-bold text-white mb-2 sm:mb-0 flex-shrink-0"
                  >
                    {{ $t("home.experience1.company") }} |
                    {{ $t("home.experience1.location") }}
                  </div>
                  <time
                    class="inline-flex items-center justify-center text-sm font-semibold px-3 py-1 min-w-fit text-emerald-300 bg-emerald-900 rounded-full whitespace-nowrap flex-shrink-0"
                    >{{ $t("home.experience1.period") }}</time
                  >
                </div>
                <!-- Content -->
                <div class="text-gray-300">
                  {{ $t("home.experience1.description") }}
                </div>
              </div>
              <div class="relative pl-4 sm:pl-4 py-6 group">
                <!-- Purple label -->
                <div
                  class="font-caveat font-medium text-2xl text-indigo-400 mb-1 sm:mb-0"
                >
                  {{ $t("home.experience2.title") }}
                </div>
                <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 w-full group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-600 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-400 after:border-4 after:box-content after:border-gray-800 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5"
                >
                  <div
                    class="text-xl font-bold text-white mb-2 sm:mb-0 flex-shrink-0"
                  >
                    {{ $t("home.experience2.company") }} |
                    {{ $t("home.experience2.location") }}
                  </div>
                  <time
                    class="inline-flex items-center justify-center text-sm font-semibold px-3 py-1 min-w-fit text-emerald-300 bg-emerald-900 rounded-full whitespace-nowrap flex-shrink-0"
                    >{{ $t("home.experience2.period") }}</time
                  >
                </div>
                <!-- Content -->
                <div class="text-gray-300">
                  {{ $t("home.experience2.description") }}
                </div>
              </div>
              <div class="relative pl-4 sm:pl-4 py-6 group">
                <!-- Purple label -->
                <div
                  class="font-caveat font-medium text-2xl text-indigo-400 mb-1 sm:mb-0"
                >
                  {{ $t("home.experience3.title") }}
                </div>
                <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 w-full group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-600 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-400 after:border-4 after:box-content after:border-gray-800 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5"
                >
                  <div
                    class="text-xl font-bold text-white mb-2 sm:mb-0 flex-shrink-0"
                  >
                    {{ $t("home.experience3.company") }} |
                    {{ $t("home.experience3.location") }}
                  </div>
                  <time
                    class="inline-flex items-center justify-center text-sm font-semibold px-3 py-1 min-w-fit text-emerald-300 bg-emerald-900 rounded-full whitespace-nowrap flex-shrink-0"
                    >{{ $t("home.experience3.period") }}</time
                  >
                </div>
                <!-- Content -->
                <div class="text-gray-300">
                  {{ $t("home.experience3.description") }}
                </div>
              </div>
              <div class="relative pl-4 sm:pl-4 py-6 group">
                <!-- Purple label -->
                <div
                  class="font-caveat font-medium text-2xl text-indigo-400 mb-1 sm:mb-0"
                >
                  {{ $t("home.experience4.title") }}
                </div>
                <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 w-full group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-600 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-400 after:border-4 after:box-content after:border-gray-800 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5"
                >
                  <div
                    class="text-xl font-bold text-white mb-2 sm:mb-0 flex-shrink-0"
                  >
                    {{ $t("home.experience4.company") }} |
                    {{ $t("home.experience4.location") }}
                  </div>
                  <time
                    class="inline-flex items-center justify-center text-sm font-semibold px-3 py-1 min-w-fit text-emerald-300 bg-emerald-900 rounded-full whitespace-nowrap flex-shrink-0"
                    >{{ $t("home.experience4.period") }}</time
                  >
                </div>
                <!-- Content -->
                <div class="text-gray-300">
                  {{ $t("home.experience4.description") }}
                </div>
              </div>
              <div class="relative pl-4 sm:pl-4 py-6 group">
                <!-- Purple label -->
                <div
                  class="font-caveat font-medium text-2xl text-indigo-400 mb-1 sm:mb-0"
                >
                  {{ $t("home.experience5.title") }}
                </div>
                <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 w-full group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-600 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-400 after:border-4 after:box-content after:border-gray-800 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5"
                >
                  <div
                    class="text-xl font-bold text-white mb-2 sm:mb-0 flex-shrink-0"
                  >
                    {{ $t("home.experience5.company") }} |
                    {{ $t("home.experience5.location") }}
                  </div>
                  <time
                    class="inline-flex items-center justify-center text-sm font-semibold px-3 py-1 min-w-fit text-emerald-300 bg-emerald-900 rounded-full whitespace-nowrap flex-shrink-0"
                    >{{ $t("home.experience5.period") }}</time
                  >
                </div>
                <!-- Content -->
                <div class="text-gray-300">
                  {{ $t("home.experience5.description") }}
                </div>
              </div>
              <div class="relative pl-4 sm:pl-4 py-6 group">
                <!-- Purple label -->
                <div
                  class="font-caveat font-medium text-2xl text-indigo-400 mb-1 sm:mb-0"
                >
                  {{ $t("home.experience6.title") }}
                </div>
                <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 w-full group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-600 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-400 after:border-4 after:box-content after:border-gray-800 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5"
                >
                  <div
                    class="text-xl font-bold text-white mb-2 sm:mb-0 flex-shrink-0"
                  >
                    {{ $t("home.experience6.company") }} |
                    {{ $t("home.experience6.location") }}
                  </div>
                  <time
                    class="inline-flex items-center justify-center text-sm font-semibold px-3 py-1 min-w-fit text-emerald-300 bg-emerald-900 rounded-full whitespace-nowrap flex-shrink-0"
                    >{{ $t("home.experience6.period") }}</time
                  >
                </div>
                <!-- Content -->
                <div class="text-gray-300">
                  {{ $t("home.experience6.description") }}
                </div>
              </div>
            </div>
            <!-- End: Vertical Timeline #1 -->
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-12">
          <h2 class="text-5xl md:text-7xl font-bold mr-8">Projects</h2>
          <div class="flex-1 h-px"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-2">
              Algorithms de séquençage avec R
            </h3>
            <p class="text-gray-600 mb-4">
              De zero aux algorithmes de séquençage de l'ADN avec R.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                >R</span
              >
              <span
                class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs"
                >Bioinformatics</span
              >
            </div>
            <a
              href="/projects/algorithms-for-Sequencing-from-scratch-with-R"
              class="text-blue-600 hover:text-blue-800 font-medium"
              >View Project →</a
            >
          </div>
        </div>

        <div class="text-center mt-8">
          <NuxtLink to="/projects" class="btn-primary">
            View All Projects
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Other Section (Certifications, etc.) -->
    <section class="py-20 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-12">
          <h2 class="text-5xl md:text-7xl font-bold mr-8 text-white">
            {{ $t("home.certifications") }}
          </h2>
          <div class="flex-1 h-px bg-gray-600"></div>
        </div>

        <!-- Genomic Data Science Section -->
        <div class="mb-12">
          <h3 class="text-3xl font-bold mb-6 text-white">
            {{ $t("home.courseraSpecialization.title") }}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.courseraSpecialization.course1.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.courseraSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.courseraSpecialization.course1.number") }} ·
                {{ $t("home.courseraSpecialization.course1.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.courseraSpecialization.course2.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.courseraSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.courseraSpecialization.course2.number") }} ·
                {{ $t("home.courseraSpecialization.course2.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.courseraSpecialization.course3.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.courseraSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.courseraSpecialization.course3.number") }} ·
                {{ $t("home.courseraSpecialization.course3.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.courseraSpecialization.course4.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.courseraSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.courseraSpecialization.course4.number") }} ·
                {{ $t("home.courseraSpecialization.course4.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.courseraSpecialization.course5.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.courseraSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.courseraSpecialization.course5.number") }} ·
                {{ $t("home.courseraSpecialization.course5.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.courseraSpecialization.course6.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.courseraSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.courseraSpecialization.course6.number") }} ·
                {{ $t("home.courseraSpecialization.course6.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>
          </div>
        </div>

        <!-- Bioinformatics Section -->
        <div>
          <h3 class="text-3xl font-bold mb-6 text-white">
            {{ $t("home.bioinformaticsSpecialization.title") }}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.bioinformaticsSpecialization.course1.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.bioinformaticsSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.bioinformaticsSpecialization.course1.number") }} ·
                {{ $t("home.bioinformaticsSpecialization.course1.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.bioinformaticsSpecialization.course2.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.bioinformaticsSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.bioinformaticsSpecialization.course2.number") }} ·
                {{ $t("home.bioinformaticsSpecialization.course2.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.bioinformaticsSpecialization.course3.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.bioinformaticsSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.bioinformaticsSpecialization.course3.number") }} ·
                {{ $t("home.bioinformaticsSpecialization.course3.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.bioinformaticsSpecialization.course4.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.bioinformaticsSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.bioinformaticsSpecialization.course4.number") }} ·
                {{ $t("home.bioinformaticsSpecialization.course4.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.bioinformaticsSpecialization.course5.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.bioinformaticsSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.bioinformaticsSpecialization.course5.number") }} ·
                {{ $t("home.bioinformaticsSpecialization.course5.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.bioinformaticsSpecialization.course6.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.bioinformaticsSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.bioinformaticsSpecialization.course6.number") }} ·
                {{ $t("home.bioinformaticsSpecialization.course6.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2 text-white">
                {{ $t("home.bioinformaticsSpecialization.course7.name") }}
              </h3>
              <p class="text-blue-400 mb-2">
                {{ $t("home.bioinformaticsSpecialization.provider") }}
              </p>
              <p class="text-sm text-gray-400 mb-4">
                {{ $t("home.bioinformaticsSpecialization.course7.number") }} ·
                {{ $t("home.bioinformaticsSpecialization.course7.status") }}
              </p>
              <a
                href="#"
                class="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                {{ $t("home.viewCertificate") }} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-5xl md:text-7xl font-bold mb-4">Get In Touch</h2>
          <p class="text-lg text-gray-600">
            Ready to transform your data into knowledge? Let's discuss how I can
            help you achieve your goals.
          </p>
        </div>

        <div class="card p-8">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2"
                >Name</label
              >
              <input
                v-model="form.name"
                type="text"
                id="name"
                required
                class="form-input"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium mb-2"
                >Email</label
              >
              <input
                v-model="form.email"
                type="email"
                id="email"
                required
                class="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium mb-2"
                >Subject</label
              >
              <input
                v-model="form.subject"
                type="text"
                id="subject"
                required
                class="form-input"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium mb-2"
                >Message</label
              >
              <textarea
                v-model="form.message"
                id="message"
                rows="5"
                required
                class="form-input"
                placeholder="Your message..."
              ></textarea>
            </div>

            <div
              v-if="submitMessage"
              :class="submitSuccess ? 'text-green-600' : 'text-red-600'"
              class="text-sm font-medium"
            >
              {{ submitMessage }}
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-primary w-full"
            >
              {{ isSubmitting ? "Sending..." : "Send Message" }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup>
import sam1Image from "~/assets/images/sam2.jpg";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref("");
const submitSuccess = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  submitMessage.value = "";

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", form.value);

    submitSuccess.value = true;
    submitMessage.value =
      "Thank you for your message! I'll get back to you soon.";

    // Reset form
    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  } catch (error) {
    submitSuccess.value = false;
    submitMessage.value =
      "Sorry, there was an error sending your message. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};

useHead({
  title: () => `${$t("home.title0")}`,
  meta: [{ name: "description", content: () => $t("home.title0") }],
});
</script>

<style scoped>
@import "tailwindcss" @reference;

.btn-primary {
  @apply bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block text-center;
}

.btn-secondary {
  @apply border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block text-center;
}

.card {
  @apply bg-white rounded-lg shadow-md;
}

.form-input {
  @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200;
}
</style>
