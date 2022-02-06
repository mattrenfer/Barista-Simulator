import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brew',
    name: 'Brew',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Brew.vue')
  },
  {
    path: '/clock-in',
    name: 'Clock In',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ClockIn.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Orders.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Settings.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Shop.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
