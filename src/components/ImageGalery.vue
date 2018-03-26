<template>
  <div class="col-12">
     <gallery :images="images" :index="index" @close="index = null"></gallery>
     <div class="row">
      <div class="col-12 col-md-4" v-for="(image, imageIndex) in images" :key=imageIndex @click="index = imageIndex" >
        <img v-lazy="image" class="img-fluid mt-4" />
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


<style lang="scss" scoped>
.list-group-item:hover {
  background-color: #f6f6f8;
}
</style>
