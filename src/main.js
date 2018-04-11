import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import ClickOutside from 'vue-click-outside'
import VueLazyload from 'vue-lazyload';
import VueYouTubeEmbed from 'vue-youtube-embed';

Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.directive('clickOutside', ClickOutside)

Vue.use(VueLazyload)
Vue.use(VueYouTubeEmbed)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')