<template>
  <div class="col-12 col-md-9">
    <h2>TV Programları</h2>
    <hr>

    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://youtu.be/39szy2TcxHY" allowfullscreen></iframe>
    </div>

    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/llv1z3qmVKU" allowfullscreen></iframe>
    </div>

    <image-galery :images="images" />
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import ImageGalery from '@/components/ImageGalery'
import imageContent from '../../assets/json/tv-programs.json'

export default {
  data: function() {
    return {
      images: imageContent,
      index: null,
      videoId: 'llv1z3qmVKU'
    };
  },
  components: {
    ImageGalery
  },
  methods: {
    ready (player) {
      this.player = player
    }
  }
};
</script>


<style lang="scss" scoped>
.list-group-item:hover {
  background-color: #f6f6f8;
}
</style>
