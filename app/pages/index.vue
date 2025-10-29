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
              Hi, I am Fousseni SAMA
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
            My Skills
          </h2>
          <div class="flex-1 h-px bg-gray-600"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Technical Skills -->
          <div class="card p-6">
            <h3 class="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium">Python</span>
                  <span class="text-sm text-gray-500">95%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-blue-600 h-2 rounded-full"
                    style="width: 95%"
                  ></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium">R</span>
                  <span class="text-sm text-gray-500">90%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-green-600 h-2 rounded-full"
                    style="width: 90%"
                  ></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium">Machine Learning</span>
                  <span class="text-sm text-gray-500">85%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-purple-600 h-2 rounded-full"
                    style="width: 85%"
                  ></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium">Genomics</span>
                  <span class="text-sm text-gray-500">88%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-indigo-600 h-2 rounded-full"
                    style="width: 88%"
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
          <h2 class="text-5xl md:text-7xl font-bold mr-8">Education</h2>
          <div class="flex-1 h-px bg-gray-600"></div>
        </div>

        <div class="max-w-4xl space-y-6">
          <div class="card p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold mb-1">
                  Master's in Bioinformatics
                </h3>
                <p class="text-blue-600 font-medium">University Name</p>
              </div>
              <span class="text-sm text-gray-500">2018 - 2020</span>
            </div>
            <p class="text-gray-600">
              Focused on computational biology, genomics analysis, and machine
              learning applications in biological systems.
            </p>
          </div>

          <div class="card p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold mb-1">
                  Bachelor's in Computer Science
                </h3>
                <p class="text-blue-600 font-medium">University Name</p>
              </div>
              <span class="text-sm text-gray-500">2014 - 2018</span>
            </div>
            <p class="text-gray-600">
              Comprehensive study of algorithms, data structures, software
              engineering, and database systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-5xl md:text-7xl font-bold text-white mb-4">
            Experience
          </h2>
        </div>
      </div>

      <div
        class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16"
      >
        <div class="w-full max-w-3xl mx-auto">
          <!-- Vertical Timeline #1 -->
          <div class="-my-6">
            <!-- Item #1 -->
            <div class="relative pl-8 sm:pl-32 py-6 group">
              <!-- Purple label -->
              <div
                class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0"
              >
                The origin
              </div>
              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
              <div
                class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
              >
                <time
                  class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full"
                  >May, 2020</time
                >
                <div class="text-xl font-bold text-slate-900">
                  Acme was founded in Milan, Italy
                </div>
              </div>
              <!-- Content -->
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra pharetra massa
                massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit
                cursus risus.
              </div>
            </div>

            <!-- Item #2 -->
            <div class="relative pl-8 sm:pl-32 py-6 group">
              <!-- Purple label -->
              <div
                class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0"
              >
                The milestone
              </div>
              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
              <div
                class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
              >
                <time
                  class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full"
                  >May, 2021</time
                >
                <div class="text-xl font-bold text-slate-900">
                  Reached 5K customers
                </div>
              </div>
              <!-- Content -->
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra pharetra massa
                massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit
                cursus risus.
              </div>
            </div>

            <!-- Item #3 -->
            <div class="relative pl-8 sm:pl-32 py-6 group">
              <!-- Purple label -->
              <div
                class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0"
              >
                The acquisitions
              </div>
              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
              <div
                class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
              >
                <time
                  class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full"
                  >May, 2022</time
                >
                <div class="text-xl font-bold text-slate-900">
                  Acquired various companies, inluding Technology Inc.
                </div>
              </div>
              <!-- Content -->
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra pharetra massa
                massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit
                cursus risus.
              </div>
            </div>

            <!-- Item #4 -->
            <div class="relative pl-8 sm:pl-32 py-6 group">
              <!-- Purple label -->
              <div
                class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0"
              >
                The IPO
              </div>
              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
              <div
                class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
              >
                <time
                  class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full"
                  >May, 2023</time
                >
                <div class="text-xl font-bold text-slate-900">
                  Acme went public at the New York Stock Exchange
                </div>
              </div>
              <!-- Content -->
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra pharetra massa
                massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit
                cursus risus.
              </div>
            </div>
          </div>
          <!-- End: Vertical Timeline #1 -->
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
            <h3 class="text-xl font-semibold mb-2">Genome Analysis Tool</h3>
            <p class="text-gray-600 mb-4">
              A comprehensive tool for analyzing genomic sequences with advanced
              ML algorithms.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                >Python</span
              >
              <span
                class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs"
                >Bioinformatics</span
              >
            </div>
            <a
              href="/projects"
              class="text-blue-600 hover:text-blue-800 font-medium"
              >View Project →</a
            >
          </div>

          <div class="card p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-2">ML Genomics Pipeline</h3>
            <p class="text-gray-600 mb-4">
              Machine learning pipeline for variant calling and disease
              prediction.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs"
                >TensorFlow</span
              >
              <span class="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs"
                >Genomics</span
              >
            </div>
            <a
              href="/projects"
              class="text-blue-600 hover:text-blue-800 font-medium"
              >View Project →</a
            >
          </div>

          <div class="card p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-2">
              Data Visualization Dashboard
            </h3>
            <p class="text-gray-600 mb-4">
              Interactive dashboard for exploring and visualizing genomic
              datasets.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs"
                >JavaScript</span
              >
              <span class="px-2 py-1 bg-cyan-100 text-cyan-800 rounded text-xs"
                >React</span
              >
            </div>
            <a
              href="/projects"
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
            Certifications
          </h2>
          <div class="flex-1 h-px bg-gray-600"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2 text-white">
              Google Cloud Certified Data Engineer
            </h3>
            <p class="text-blue-400 mb-2">Google Cloud Platform</p>
            <p class="text-sm text-gray-400">2023</p>
          </div>

          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2 text-white">
              AWS Certified Machine Learning
            </h3>
            <p class="text-blue-400 mb-2">Amazon Web Services</p>
            <p class="text-sm text-gray-400">2022</p>
          </div>

          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2 text-white">
              Coursera Bioinformatics Specialization
            </h3>
            <p class="text-blue-400 mb-2">Coursera</p>
            <p class="text-sm text-gray-400">2021</p>
          </div>

          <div class="bg-gray-700 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2 text-white">
              Deep Learning Specialization
            </h3>
            <p class="text-blue-400 mb-2">deeplearning.ai</p>
            <p class="text-sm text-gray-400">2020</p>
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
