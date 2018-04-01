import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/about/About.vue'
import Statues from './views/about/Statues.vue'
import Directors from './views/about/Directors.vue'
import Supervisory from './views/about/Supervisory.vue'
import Purpose from './views/about/Purpose.vue'
import Mediation from './views/mediation/Mediation.vue'
import WhatMediation from './views/mediation/WhatMediation'
import Faq from './views/mediation/Faq'
import MediationLibrary from './views/mediation/MediationLibrary'
import SubscriptionTerms from './views/subscription/SubscriptionTerms'
import BankInfo from './views/subscription/BankInfo'
import Subscription from './views/subscription/Subscription'
import Activities from './views/activities/Activities'
import Visits from './views/activities/Visits'
import Seminars from './views/activities/Seminars'
import Articles from './views/activities/Articles'
import Press from '@/views/press/Press'
import TVPrograms from './views/press/TVPrograms'
import RadioPrograms from './views/press/RadioPrograms'
import OtherPrograms from './views/press/OtherPrograms'
import Contact from './views/contact/Contact'
import Legislation from './views/legislation/Legislation'
import Pricing from './views/legislation/Pricing'
import Slides from './views/activities/Slides'

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
        },
        {
          path: 'denetim-kurulu',
          component: Supervisory
        },
        {
          path: 'tuzugumuz',
          component: Statues
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
      path: '/mevzuat',
      component: Legislation,
      children: [
        {
          path: 'ucretlendirme',
          component: Pricing
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
        },
        {
          path: 'banka-bilgileri',
          component: BankInfo
        }
      ]
    },
    {
      path: '/faaliyetlerimiz',
      component: Activities,
      children: [
        {
          path: 'ziyaret',
          component: Visits
        },
        {
          path: 'etkinlik',
          component: Seminars
        },
        {
          path: 'makaleler',
          component: Articles
        },
        {
          path: 'egitim-sunumlari',
          component: Slides
        }
      ]
    },
    {
      path: '/basin',
      component: Press,
      children: [
        {
          path: 'tv-programlari',
          component: TVPrograms
        },
        {
          path: 'radyo-programlari',
          component: RadioPrograms
        },
        {
          path: 'yazili-basin',
          component: OtherPrograms
        }
      ]
    },
    {
      path: '/iletisim',
      component: Contact
    }
  ]
})
