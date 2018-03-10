import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Faq from './views/Faq.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hakkimizda/:id',
      name: 'about',
      component: About
    },
    {
      path: '/sss',
      name: 'faq',
      component: Faq
    }
  ]
})
