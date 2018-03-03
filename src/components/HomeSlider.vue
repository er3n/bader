<template>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img class="d-block" src="../assets/handshake.jpg" alt="First slide">
                <div class="container">
                    <div class="carousel-caption d-none d-md-block carousel-item-left" id="wrapper">
                    <h1 class="">Arabuluculuk</h1>

                    <h1 class="font-weight-bold" style="font-size: 50px">Ekonomik, Hızlı, Gizli ve Gönüllü Çözüm</h1>
                    <p>Hukuk uyuşmazlıklarında arabulucuk faaliyetlerini tanıtmak yaygınlaştırmak, faaliyetlere ilişkin yönetim ve standardı belirlemek.</p>
                    <button type="button" class="btn aboutusbutton">Derneğimiz</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'HomeSlider'

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
        font-size: 28px;

        &:hover {
            background-color: lighten($basecolor, 30) !important;
        }
    }

</style>
