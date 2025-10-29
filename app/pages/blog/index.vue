<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>

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

    <!-- Blog posts grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="post in filteredPosts"
        :key="post._path"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        @click="navigateTo(post._path)"
      >
        <div class="p-6">
          <div class="flex flex-wrap gap-2 mb-3">
            <span
              v-for="tag in getCategoryTags(post)"
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
            {{ post.title }}
          </h2>

          <p class="text-gray-600 mb-4 line-clamp-3">
            {{ post.description }}
          </p>

          <div class="flex items-center text-sm text-gray-500">
            <time :datetime="post.date">
              {{ formatDate(post.date) }}
            </time>
          </div>
        </div>
      </article>
    </div>

    <!-- No posts message -->
    <div v-if="filteredPosts.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">No blog posts found for this filter.</p>
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

// Mock blog posts data - replace with actual data fetching
const posts = ref([
  {
    _path: "/blog/data-science/machine-learning-genomics",
    title: "Machine Learning in Genomics: A Comprehensive Guide",
    description:
      "Exploring how machine learning algorithms can be applied to genomic data analysis, from variant calling to disease prediction.",
    date: "2024-01-15",
    tags: ["machine-learning", "genomics", "python", "data-science"],
    category: "data-science",
  },
  {
    _path: "/blog/bioinformatics/genome-assembly-techniques",
    title: "Modern Genome Assembly Techniques",
    description:
      "Comparing different genome assembly algorithms and their applications in de novo sequencing projects.",
    date: "2024-01-20",
    tags: ["genomics", "assembly", "bioinformatics", "sequencing"],
    category: "bioinformatics",
  },
]);

// Computed property to filter posts based on selected filter
const filteredPosts = computed(() => {
  if (selectedFilter.value === "All") {
    return posts.value;
  }

  if (selectedFilter.value === "Data Science") {
    return posts.value.filter((post) => post.category === "data-science");
  }

  if (selectedFilter.value === "Bioinformatics") {
    return posts.value.filter((post) => post.category === "bioinformatics");
  }

  if (selectedFilter.value === "Data Science & health") {
    return posts.value.filter((post) =>
      post.tags.some((tag) =>
        [
          "data-science",
          "bioinformatics",
          "machine-learning",
          "genomics",
        ].includes(tag)
      )
    );
  }

  return posts.value;
});

// Helper function to get category tags for display
function getCategoryTags(post: any): string[] {
  const displayTags: string[] = [];

  if (post.category === "data-science") {
    displayTags.push("Data Science");
  }
  if (post.category === "bioinformatics") {
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
