import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Packages from '../views/Packages.vue'
import Dashboard from '../views/Dashboard.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/packages', component: Packages },
  { path: '/dashboard', component: Dashboard },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
