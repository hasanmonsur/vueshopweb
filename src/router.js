import { createRouter, createWebHistory } from 'vue-router'
import Default from './components/Home.vue'
import Login from './components/Login.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Default },
    { path: '/login', component: Login },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
  ]
})

export default router
