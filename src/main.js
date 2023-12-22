import { createApp } from 'vue'
import Router from './app/Router'
import './index.css'
import App from './app/App.vue'
const app = createApp(App)
app.use(Router)
app.mount('#app')
