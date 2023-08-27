import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { VueRecaptchaPlugin } from 'vue-recaptcha/head'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
// app.use(VueRecaptchaPlugin, {
//   v3SiteKey: '6Lc-iagnAAAAAKnXsvD3HOyqUBzoUUV-qtCtFQBq'
// })
app.use(pinia)
app.mount('#app')

