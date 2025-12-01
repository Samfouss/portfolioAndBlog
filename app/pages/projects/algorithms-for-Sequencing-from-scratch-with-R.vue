<template>
  <ProjectInProgress
    title="De zero aux algorithmes de séquençage de l'ADN avec R"
    description="Dans ce projet, nous allons apprendre ensemble comment fonctionne les algorithmes de séquençage de l'ADN avec le logiciel R de zero."
  />
</template>

<script setup>
import { Clock, Wrench, ArrowLeft, ArrowRight } from "lucide-vue-next";
import ProjectInProgress from "~/components/ProjectInProgress.vue";

useHead({
  title:
    "De zero aux algorithmes de séquençage de l'ADN avec R - Work in Progress",
  meta: [
    {
      name: "description",
      content:
        "This project is currently under development. Learn about DNA sequencing algorithms implemented from scratch using R programming.",
    },
  ],
});
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
