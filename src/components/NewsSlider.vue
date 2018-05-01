<template>
    <div class="container mt-5">
        <div class="d-flex justify-content-center">
            <h1 class="title">GÜNCEL HABERLER</h1>

        </div>
        <div class="d-flex justify-content-center">
            <a class="title" href="/faaliyetlerimiz/etkinlik">Bütün haberlere buradan ulaşabilirsiniz</a>
        </div>

        <div class="row mt-3">
            <div class="col-sm-4"  v-for="(content, contentIndex) in contents" :key=contentIndex >
                <div class="card" style="padding: 6px">
                    <img class="card-img-top"
                         :src="content.src"
                         v-if="content.src">
                    <img class="card-img-top"
                         :src="content"
                         v-if="!content.src">
                </div>
                <div class="card-body">
                    <p class="card-text" v-if="content.description">{{content.description}}</p>
                    <a type="button"
                       :href="content.href"
                       v-if="content.href"
                       class="btn btn-devam">Devamı</a>
                    <a type="button"
                       href="/faaliyetlerimiz/etkinlik"
                       v-if="!content.href"
                       class="btn btn-devam">Devamı</a>
                </div>
            </div>

        </div>


    </div>
</template>

<script>

  import content from '../assets/json/news'

  export default {
    name: 'NewsSlider',
    data () {
      return {
        contents: content
      }
    }

  }
</script>

<style lang="scss" scoped>

    $main_font_color: #385EA0;

    .title {
        color: $main_font_color
    }

    .card-title {
        color: $main_font_color !important;
    }

    .btn-devam {
        background-color: $main_font_color
    }

    .btn-devam {
        background-color: $main_font_color !important;
        color: white;
        border-radius: 0;

        &:hover {
            background-color: lighten($main_font_color, 30) !important;
        }
    }

</style>
