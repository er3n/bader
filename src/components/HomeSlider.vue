<template>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img class="d-block img-fluid" v-lazy="handshakeImg" alt="First slide" >
                <div class="container">
                    <div class="carousel-caption d-none d-md-block" id="wrapper">
                    <h1 class="">Arabuluculuk</h1>
                    <h1 class="font-weight-bold">Ekonomik, Hızlı, Gizli ve Gönüllü Çözüm</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import HandshakeImg from '../assets/handshake.jpg'

  export default {
    name: 'HomeSlider',
    data() {
        return {
            handshakeImg: HandshakeImg
        }
    }

  }
</script>

<style lang="scss" scoped>

    $basecolor: #276BA6;

    .carousel-caption {
        top: auto;
        bottom: 20px;
        right: auto;
    }

    #wrapper {
        width: 500px;
        margin: 0 auto;
        text-align: left;
    }

    .aboutusbutton {
        background-color: $basecolor !important;
        color: white;
        border-radius: 0;

        &:hover {
            background-color: lighten($basecolor, 30) !important;
        }
    }

</style>
