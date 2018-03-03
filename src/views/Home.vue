<template>
    <div>
        <home-slider/>
        <shord-guide />
        <half-page-introduction />
        <shord-guide />
    </div>
</template>

<script>
  import HomeSlider from '@/components/HomeSlider.vue'
  import ShordGuide from '@/components/ShortGuide.vue'
  import HalfPageIntroduction from '@/components/HalfPageIntroduction.vue'

  export default {
    name: 'home',
    components: {
      ShordGuide,
      HomeSlider,
      HalfPageIntroduction
    }
  }
</script>

