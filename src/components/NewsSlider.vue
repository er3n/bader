<template>
    <div class="container mt-5">
        <div class="d-flex justify-content-center">
            <h1 class="title">GÜNCEL HABERLER</h1>

        </div>
        <div class="d-flex justify-content-center">
            <a class="title" href="/faaliyetlerimiz/etkinlik">Bütün haberlere buradan ulaşabilirsiniz</a>
        </div>

        <div class="row mt-3">
            <div class="col-sm-4">
                <div class="card" style="padding: 6px">
                    <img class="card-img-top" v-lazy="'/img/visits/3a6ea45c-14d6-46dc-a8aa-a7142e02214c.jpg'" alt="Card image cap">
                </div>
                                <div class="card-body">
                    <a type="button" href="/faaliyetlerimiz/etkinlik" class="btn btn-devam">Devamı</a>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card" style="padding: 6px">
                    <img class="card-img-top" v-lazy="'/img/visits/9d4fe89e-ee19-47ba-87bc-899a83730509.jpg'" alt="Card image cap">
                </div>
                <div class="card-body">
                    <a type="button" href="/faaliyetlerimiz/etkinlik" class="btn btn-devam">Devamı</a>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card" style="padding: 6px">
                    <img class="card-img-top" v-lazy="'/img/visits/246a16be-eeda-4c38-a99d-9c919c637a1a.jpg'" alt="Card image cap">
                </div>
                <div class="card-body">
                    <a type="button" href="/faaliyetlerimiz/etkinlik" class="btn btn-devam">Devamı</a>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
  export default {
    name: 'NewsSlider'

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
