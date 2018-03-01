<template>
  <div>
    <home-slider />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomeSlider from '../components/HomeSlider.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    HomeSlider
  }
}
</script>

