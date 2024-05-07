import { createRouter, createWebHistory } from 'vue-router'
import Login from './Login.vue'
import Register from './Register.vue'
import IndexProducts from './IndexProducts.vue'
import GetProduct from './GetProduct.vue'


const routes = [
    { path: '/api/v1/login', component: Login },
    { path: '/api/v1/register', component: Register },
    { path: '/api/v1/products', component: IndexProducts },
    { path: '/api/v1/products/:id', component: GetProduct },
    // { path: '/api/v1/users', component:  },
    // { path: '/api/v1/users/:id', component:  },
    // { path: '/api/v1/categories  ', component:  },
    // { path: '/api/v1/categories/:id', component:  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router