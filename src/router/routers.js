import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/demo/About.vue'),
      },
      {
        path: '/Zjxx',
        name: 'Zjxx',
        component: () => import('../views/demo/Zjxx.vue'),
      },
      {
        path: '/Captcha',
        name: 'Captcha',
        component: () => import('../views/demo/Captcha.vue'),
      },
      {
        path: '/upload',
        name: 'Upload',
        component: () => import('../views/demo/Upload.vue'),
      },
      {
        path: '/chat',
        name: 'Chat',
        component: () => import('../views/demo/Chat.vue'),
      },
      {
        path: '/alumni',
        name: 'STD',
        component: () => import('../views/demo/alumni.vue'),
      },
      {
        path: '/virtual',
        name: 'virtual',
        component: () => import('../views/demo/virtual.vue'),
      },
      {
        path: '/echart',
        component: () => import('../views/demo/Echart.vue'),
      },
      {
        path: '/echart2',
        component: () => import('../views/demo/Echart2.vue'),
      },
      {
        path: '/tree',
        component: () => import('../views/demo/Tree.vue'),
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
