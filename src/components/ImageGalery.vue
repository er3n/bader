<template>
  <div class="col-12">
     <gallery :images="mutableImages" :index="index" @close="index = null"></gallery>
     <div class="row">
      <div class="col-12 col-md-4" v-for="(image, imageIndex) in mutableImages" :key=imageIndex @click="index = imageIndex" >
        <img v-lazy="image" class="img-fluid mt-4" v-if="image.src == undefined"/>
        <a :href="image.href" target="_blank" v-if="image.src != undefined"><img v-lazy="image.src" class="img-fluid mt-4" v-if="image.src != undefined" /></a>
      </div>
     </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import axios from "axios";
import getImage from "@/util/ImageRepository";

export default {
  props: ["images", "folder"],
  data: function() {
    return {
      index: null,
      mutableImages: []
    };
  },
  components: {
    gallery: VueGallery
  },
  created() {
    this.mutableImages = this.images

    getImage(this.folder).then(res => {
      this.mutableImages = res.data.concat(this.mutableImages)
    });
  },
  watch: {
    images: function(newQuestion, oldQuestion) {
      this.mutableImages = this.images
    }
  }
};
</script>


<style lang="scss">
.close,
.next {
  color: white !important;
}
</style>
