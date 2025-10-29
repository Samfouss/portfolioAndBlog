<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Projects</h1>

    <!-- Filter buttons -->
    <div class="flex flex-wrap gap-3 mb-8">
      <button
        v-for="filter in filters"
        :key="filter"
        @click="selectedFilter = filter"
        :class="[
          'px-4 py-2 rounded-lg font-medium transition-colors',
          selectedFilter === filter
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        ]"
      >
        {{ filter }}
      </button>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="project in filteredProjects"
        :key="project._path"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        @click="navigateTo(project._path)"
      >
        <div class="p-6">
          <div class="flex flex-wrap gap-2 mb-3">
            <span
              v-for="tag in getCategoryTags(project)"
              :key="tag"
              class="px-2 py-1 text-xs font-semibold rounded"
              :class="getTagClass(tag)"
            >
              {{ tag }}
            </span>
          </div>

          <h2
            class="text-xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition-colors"
          >
            {{ project.title }}
          </h2>

          <p class="text-gray-600 mb-4 line-clamp-3">
            {{ project.description }}
          </p>

          <div class="flex items-center justify-between text-sm text-gray-500">
            <time :datetime="project.date">
              {{ formatDate(project.date) }}
            </time>
            <span
              v-if="project.github"
              class="text-blue-600 hover:text-blue-800"
            >
              View on GitHub →
            </span>
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
    _path: "/projects/genome-analysis-tool",
    title: "Genome Analysis Tool",
    description:
      "A comprehensive tool for analyzing genomic sequences with advanced ML algorithms and statistical methods.",
    date: "2024-02-01",
    tags: ["bioinformatics", "genomics", "python", "machine-learning"],
    category: "bioinformatics",
    github: "https://github.com/yourusername/genome-analysis",
  },
  {
    _path: "/projects/ml-genomics-pipeline",
    title: "ML Genomics Pipeline",
    description:
      "Machine learning pipeline for variant calling and disease prediction using genomic data.",
    date: "2024-01-10",
    tags: ["data-science", "machine-learning", "genomics", "bioinformatics"],
    category: "data-science",
    github: "https://github.com/yourusername/ml-genomics",
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
