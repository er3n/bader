import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import ClickOutside from 'vue-click-outside'
import VueLazyload from 'vue-lazyload';


Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.directive('clickOutside', ClickOutside)

Vue.use(VueLazyload)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')