<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">
      Projects
      <span v-if="selectedFilter === 'Bioinformatics'">
        : {{ $t("blog.bioinformatics") }}</span
      >
      <span v-if="selectedFilter === 'Data Science'">
        : {{ $t("blog.dataScience") }}</span
      >
      <span v-if="selectedFilter === 'Data Science & health'">
        : Data Science & health</span
      >
    </h1>

    <!-- Filter buttons -->
    <div class="flex flex-wrap gap-3 mb-8">
      <button
        v-for="filter in filters"
        :key="filter"
        @click="selectedFilter = filter"
        :class="[
          'px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer',
          selectedFilter === filter
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        ]"
      >
        {{ filter }}
      </button>
    </div>

    <div class="text-center mb-16" v-if="selectedFilter === 'Bioinformatics'">
      <div class="flex items-center justify-center mb-4">
        <Dna class="h-12 w-12 text-green-600 dark:text-green-400 mr-4" />
      </div>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {{ $t("home.bioinformaticsDescription") }}
      </p>
    </div>

    <div
      class="text-center mb-16"
      v-else-if="selectedFilter === 'Data Science'"
    >
      <div class="flex items-center justify-center mb-4">
        <BarChart3 class="h-12 w-12 text-blue-600 dark:text-blue-400 mr-4" />
      </div>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {{ $t("home.dataScienceDescription") }}
      </p>
    </div>

    <div class="text-center mb-16" v-else>
      <div class="flex items-center justify-center mb-4">
        <BarChart3 class="h-12 w-12 text-blue-600 dark:text-blue-400 mr-4" />
        <Plus class="h-12 w-12 text-blue-600 dark:text-blue-400 mr-4" />
        <Dna class="h-12 w-12 text-green-600 dark:text-green-400 mr-4" />
      </div>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {{ $t("home.dataScienceDescription") }}
      </p>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="project in filteredProjects"
        :key="project._path"
        @click="navigateTo(project._path)"
        class="card overflow-hidden hover:shadow-xl transition-shadow duration-300 rounded-lg shadow-md cursor-pointer"
      >
        <div class="h-48 overflow-hidden">
          <img
            :src="getProjectImage(project)"
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6">
          <div
            class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2"
          >
            <Calendar class="h-4 w-4 mr-1" />
            <time>{{ formatDate(project.date) }}</time>
          </div>
          <h2
            class="text-xl font-semibold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <NuxtLink :to="project._path">
              {{ project.title }}
            </NuxtLink>
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ project.description }}
          </p>
          <div class="flex items-center justify-between">
            <div class="flex space-x-2">
              <span
                v-for="tag in getCategoryTags(project)"
                :key="tag"
                class="px-2 py-1 text-xs font-semibold rounded"
                :class="getTagClass(tag)"
              >
                {{ tag }}
              </span>
            </div>

            <NuxtLink
              :to="project.github"
              class="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              View on GitHub →
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>

    <!-- No projects message -->
    <div v-if="filteredProjects.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">No projects found for this filter.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Dna, BarChart3, Calendar, Plus } from "lucide-vue-next";
import image1 from "~/assets/images/data science.png";
import image2 from "~/assets/images/genomics.png";
import image3 from "~/assets/images/health.png";

// Available filters
const filters = [
  "All",
  "Data Science",
  "Bioinformatics",
  "Data Science & health",
];
const selectedFilter = ref("All");

// Mock projects data - replace with actual data fetching
const projects = ref([
  {
    _path: "/projects/algorithms-for-Sequencing-from-scratch-with-R",
    title: "De zero aux algorithmes de séquençage de l'ADN avec R",
    description:
      "Dans ce projet, nous allons apprendre ensemble comment fonctionne les algorithmes de séquençage de l'ADN avec le logiciel R de zero.",
    date: "2024-02-01",
    tags: ["bioinformatics", "genomics", "R", "statistics"],
    category: "bioinformatics",
    github: "https://github.com/yourusername/genome-analysis",
  },
]);

// Computed property to filter projects based on selected filter
const filteredProjects = computed(() => {
  if (selectedFilter.value === "All") {
    return projects.value;
  }

  if (selectedFilter.value === "Data Science") {
    return projects.value.filter(
      (project) => project.category === "data-science"
    );
  }

  if (selectedFilter.value === "Bioinformatics") {
    return projects.value.filter(
      (project) => project.category === "bioinformatics"
    );
  }

  if (selectedFilter.value === "Data Science & health") {
    return projects.value.filter((project) =>
      project.tags.some((tag) =>
        [
          "data-science",
          "bioinformatics",
          "machine-learning",
          "genomics",
        ].includes(tag)
      )
    );
  }

  return projects.value;
});

// Helper function to get category tags for display
function getCategoryTags(project: any): string[] {
  const displayTags: string[] = [];

  if (
    project.category === "data-science" ||
    project.tags.includes("data-science")
  ) {
    displayTags.push("Data Science");
  }
  if (
    project.category === "bioinformatics" ||
    project.tags.includes("bioinformatics")
  ) {
    displayTags.push("Bioinformatics");
  }

  return displayTags;
}

// Helper function to get tag CSS classes
function getTagClass(tag: string): string {
  const classes: Record<string, string> = {
    "Data Science": "bg-blue-100 text-blue-800",
    Bioinformatics: "bg-green-100 text-green-800",
  };

  return classes[tag] || "bg-gray-100 text-gray-800";
}

// Helper function to get project image based on category
function getProjectImage(project: any): string {
  // Check if it's a Data Science & health project (has both data-science and bioinformatics tags)
  const hasDataScience =
    project.category === "data-science" ||
    project.tags?.includes("data-science");
  const hasBioinformatics =
    project.category === "bioinformatics" ||
    project.tags?.includes("bioinformatics");

  if (hasDataScience && hasBioinformatics) {
    return image1;
  } else if (hasBioinformatics) {
    return image2;
  } else if (hasDataScience) {
    return image1;
  }

  return image3;
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Navigate function
function navigateTo(path: string) {
  // In a real Nuxt app, this would use useRouter or navigateTo
  window.location.href = path;
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
