<template>
    <div>
        <home-slider/>
        <shord-guide />
    </div>
</template>

<script>
  import HomeSlider from '@/components/HomeSlider.vue'
  import ShordGuide from '@/components/ShortGuide.vue'

  export default {
    name: 'home',
    components: {
      ShordGuide,
      HomeSlider
    }
  }
</script>

