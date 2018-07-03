<template>
  <div class="col-12">
     <gallery :images="images" :index="index" @close="index = null"></gallery>
     <div class="row">
      <div class="col-12 col-md-4" v-for="(image, imageIndex) in images" :key=imageIndex @click="index = imageIndex" >
        <img v-lazy="image" class="img-fluid mt-4" v-if="image.src == undefined"/>
        <a :href="image.href" target="_blank" v-if="image.src != undefined"><img v-lazy="image.src" class="img-fluid mt-4" v-if="image.src != undefined" /></a>
      </div>
     </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  props: ["images"],
  data: function() {
    return {
      index: null
    };
  },
  components: {
    gallery: VueGallery
  }
};
</script>


<style lang="scss">


.close, .next {
    color: white !important
}

</style>
