<template>
    <div>
        <home-slider/>
        <shord-guide />
        <half-page-introduction />
        <news-slider />
    </div>
</template>

<script>
  import HomeSlider from '@/components/HomeSlider.vue'
  import ShordGuide from '@/components/ShortGuide.vue'
  import HalfPageIntroduction from '@/components/HalfPageIntroduction.vue'
  import NewsSlider from '@/components/NewsSlider.vue'

  export default {
    name: 'home',
    components: {
      ShordGuide,
      HomeSlider,
      HalfPageIntroduction,
      NewsSlider
    }
  }
</script>

