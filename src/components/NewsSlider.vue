<template>
    <div class="container mt-5">
        <div class="d-flex justify-content-center">
            <h1 class="title">GÜNCEL HABERLER</h1>

        </div>
        <div class="d-flex justify-content-center">
            <a class="title" href="#">Bütün haberlere buradan ulaşabilirsiniz</a>
        </div>

        <div class="row mt-3">
            <div class="col-sm-4">
                <div class="card" style="padding: 6px">
                    <img class="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Arabulucular yeni hizmet binasında</h5>
                        <p class="card-text"> Lorem ipsum dolor sit amet, vidisse indoctum electram quo an, facilisi
                            explicari
                            duo ei, mutat tantas diceret vix te. Malorum omittam perfecto in qui ...</p>
                        <button type="button" class="btn btn-devam">Devamı</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card" style="padding: 6px">
                    <img class="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Arabulucular yeni hizmet binasında</h5>
                        <p class="card-text"> Lorem ipsum dolor sit amet, vidisse indoctum electram quo an, facilisi
                            explicari
                            duo ei, mutat tantas diceret vix te. Malorum omittam perfecto in qui ...</p>
                        <button type="button" class="btn btn-devam">Devamı</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card" style="padding: 6px">
                    <img class="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Arabulucular yeni hizmet binasında</h5>
                        <p class="card-text"> Lorem ipsum dolor sit amet, vidisse indoctum electram quo an, facilisi
                            explicari
                            duo ei, mutat tantas diceret vix te. Malorum omittam perfecto in qui ...</p>
                        <button type="button" class="btn btn-devam">Devamı</button>
                    </div>
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
