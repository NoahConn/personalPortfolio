import { defineStore } from "pinia";

const useNavigationStore = defineStore('navgiationStore', {
  state: () => ({
    activeTab: 'Home',
    selectedTab: 'Home',
    visible: true,
    allTabs: [
      {
        href: '/about', 
        name: 'About'
      },
      {
        href: '/projects', 
        name: 'Projects'
      },
      {
        href: '/skills', 
        name: 'Skills'
      },
      {
        href: '/photography', 
        name: 'Photography'
      },
      {
        href: '/contact', 
        name: 'Contact'
      }
    ]
  }), 
  getters: {
    getActiveTab: (state) => state.activeTab,
    getSelectedTab: (state) => state.selectedTab,
    getVisible: (state) => state.visible,
    getAllTabs: (state) => state.allTabs, 
  }, 
  actions: {
    selectTab(tabName) {
      this.fadeIn = false
      // fade out current tab
      this.selectedTab = tabName
      this.visible = false
      // set new tab and reset fade
      setTimeout(() => {
        this.activeTab = tabName
      }, 300)
      // fade in new tab
      setTimeout(() => {
        this.visible = true
      }, 301)
    }
  }
})

export default useNavigationStore