import Vue from 'vue'
import VueRouter from 'vue-router'
import AcuteFramework from 'acute-framework';
import Home from '../views/Home.vue'

Vue.use(VueRouter)
Vue.use(AcuteFramework)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/documentation',
    name: 'documentation',

    component: () => import('../views/Documentation.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
