import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/botones',
    name: 'Botones',
    component: () => import(/* webpackChunkName: "Botones" */ '../views/Botones.vue')
  },
  {
    path: '/tareas-crud',
    name: 'Tareas-CRUD',
    component: () => import(/* webpackChunkName: "Tareas-CRUD" */ '../views/Tareas-CRUD.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
