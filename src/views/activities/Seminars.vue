<template>
  <div class="col-12 col-md-9">
    <h2>Etkinliklerimiz</h2>
    <hr>
    <image-galery :images="images" />
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import ImageGalery from '@/components/ImageGalery'
import imageContent from '../../assets/json/seminar-galery.json'

export default {
  data: function() {
    return {
      images: imageContent,
      index: null
    };
  },
  components: {
    ImageGalery
  }
};
</script>


<style lang="scss" scoped>
.list-group-item:hover {
  background-color: #f6f6f8;
}
</style>
