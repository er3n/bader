import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/about/About.vue'
import Directors from './views/about/Directors.vue'
import Purpose from './views/about/Purpose.vue'
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
      path: '/hakkimizda',
      component: About,
      children: [
        {
          path: 'amac-ilke-deger',
          component: Purpose
        },
        {
          path: 'yonetim-kurulu',
          component: Directors
        }
      ]
    },
    {
      path: '/sss',
      name: 'faq',
      component: Faq
    }
  ]
})
