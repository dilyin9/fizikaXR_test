import { createRouter, createWebHashHistory } from "vue-router"
import AppMainPage from './components/AppMainPage.vue'
import AppSecondPage from './components/AppSecondPage.vue'
const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: AppMainPage
  },
  {
    path: '/second',
    component: AppSecondPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;