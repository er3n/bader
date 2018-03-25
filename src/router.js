import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/about/About.vue'
import Directors from './views/about/Directors.vue'
import Purpose from './views/about/Purpose.vue'
import Mediation from './views/mediation/Mediation.vue'
import WhatMediation from './views/mediation/WhatMediation'
import Faq from './views/mediation/Faq'
import MediationLibrary from './views/mediation/MediationLibrary'
import SubscriptionTerms from './views/subscription/SubscriptionTerms'
import Subscription from './views/subscription/Subscription'

Vue.use(Router)

export default new Router({
  //mode: 'history',
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
      path: '/arabuluculuk',
      component: Mediation,
      children: [
        {
          path: 'arabuluculuk-nedir',
          component: WhatMediation
        },
        {
          path: 'sss',
          component: Faq
        },
        {
          path: 'arabuluculuk-kitapligi',
          component: MediationLibrary
        }
      ]
    },
    {
      path: '/uyelik',
      component: Subscription,
      children: [
        {
          path: 'kosullar',
          component: SubscriptionTerms
        }
      ]
    }
  ]
})
