<template>
  <div class="py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t("contact.title") }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ $t("contact.subtitle") }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>

          <div class="space-y-6">
            <div class="flex items-start">
              <Mail
                class="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 mr-4"
              />
              <div>
                <h3 class="font-medium mb-1">Email</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  contact@example.com
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <MapPin
                class="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 mr-4"
              />
              <div>
                <h3 class="font-medium mb-1">Location</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Available for remote collaboration worldwide
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <Clock
                class="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 mr-4"
              />
              <div>
                <h3 class="font-medium mb-1">Response Time</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Usually within 24-48 hours
                </p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-semibold mb-4">Connect on Social Media</h3>
            <div class="flex space-x-4">
              <a href="#" class="social-link">
                <Github class="h-6 w-6" />
              </a>
              <a href="#" class="social-link">
                <Linkedin class="h-6 w-6" />
              </a>
              <a href="#" class="social-link">
                <Twitter class="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div class="card p-8">
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
                  <div class="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail, MapPin, Clock } from "lucide-vue-next";

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
  title: () => `${$t("contact.title")} - Portfolio`,
  meta: [{ name: "description", content: () => $t("contact.subtitle") }],
});
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-200;
}

.social-link {
  @apply p-3 bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200;
}
</style>
