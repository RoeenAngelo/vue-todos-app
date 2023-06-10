import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '../views/TodosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodosView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // this is best practice
      component: () => import('../views/AboutView.vue')
      // component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')

    },
  ]
})

export default router
