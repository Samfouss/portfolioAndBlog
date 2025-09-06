<template>
  <div class="py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Let's discuss collaboration opportunities, research projects, or just connect!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <Mail class="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 mr-4" />
              <div>
                <h3 class="font-medium mb-1">Email</h3>
                <p class="text-gray-600 dark:text-gray-300">contact@example.com</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <MapPin class="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 mr-4" />
              <div>
                <h3 class="font-medium mb-1">Location</h3>
                <p class="text-gray-600 dark:text-gray-300">Available for remote collaboration worldwide</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <Clock class="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 mr-4" />
              <div>
                <h3 class="font-medium mb-1">Response Time</h3>
                <p class="text-gray-600 dark:text-gray-300">Usually within 24-48 hours</p>
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
          <h2 class="text-2xl font-semibold mb-6">Send a Message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Name *</label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                required
                class="form-input"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email *</label>
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
              <label for="subject" class="block text-sm font-medium mb-2">Subject *</label>
              <select
                v-model="form.subject"
                id="subject"
                required
                class="form-input"
              >
                <option value="">Select a subject</option>
                <option value="collaboration">Research Collaboration</option>
                <option value="consulting">Consulting Opportunity</option>
                <option value="question">General Question</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium mb-2">Message *</label>
              <textarea
                v-model="form.message"
                id="message"
                rows="6"
                required
                class="form-input"
                placeholder="Tell me about your project or question..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </span>
              <span v-else>Send Message</span>
            </button>
          </form>
          
          <div v-if="submitMessage" class="mt-4 p-4 rounded-lg" :class="submitSuccess ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'">
            {{ submitMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', form.value)
    
    submitSuccess.value = true
    submitMessage.value = 'Thank you for your message! I\'ll get back to you soon.'
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Contact - Portfolio',
  meta: [
    { name: 'description', content: 'Get in touch for collaboration opportunities, research projects, or general inquiries.' }
  ]
})
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-200;
}

.social-link {
  @apply p-3 bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200;
}
</style>