import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexProducts from '../IndexProducts.vue' // Importez votre nouveau composant
import GetProducts from '../GetProducts.vue' // Importez votre nouveau composant


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: 'api/v1/products',
      name: 'products',
      component: IndexProducts
    },
    // {
    //   path: 'api/v1/products/:id',
    //   name: 'products',
    //   component: GetProducts
    // },
  ]
})

export default router
