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
    path: '/Zjxx',
    name: 'Zjxx',
    component: ()=>import('../views/Zjxx.vue')
  },
  {
    path: '/Captcha',
    name: 'Captcha',
    component: ()=>import('../views/Captcha.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: ()=>import('../views/Upload.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ()=>import('../views/Chat.vue')
  },
  {
    path: '/imgCut',
    name: 'ImgCut',
    component: ()=>import('../views/ImgCut.vue')
  },
  {
    path: '/virtual',
    name: 'virtual',
    component: ()=>import('../views/virtual.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
