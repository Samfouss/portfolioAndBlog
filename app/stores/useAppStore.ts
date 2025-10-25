import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    theme: 'light' as 'light' | 'dark',
    isLoading: false,
  }),
  
  getters: {
    isDark: (state) => state.theme === 'dark',
  },
  
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
    
    setLoading(loading: boolean) {
      this.isLoading = loading
    },
  },
})
