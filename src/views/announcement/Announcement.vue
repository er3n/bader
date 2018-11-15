<template>
    <div>
        <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img class="d-block img-fluid" src="../../assets/aboutus.jpg">
                </div>
                <div class="carousel-caption d-none d-md-block">
                    <h1 style="opacity: 0.3">Duyurular</h1>
                </div>
            </div>
        </div>

        <div class="container mt-5">
        <image-galery :images="images" folder="duyurular" />

        </div>

    </div>
</template>

<script>
import VueGallery from "vue-gallery";
import ImageGalery from '@/components/ImageGalery'
import imageContent from '../../assets/json/announcement.json'

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