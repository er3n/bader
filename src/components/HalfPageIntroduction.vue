<template>
    <div class="pageRoot container-fluid mt-3" style="min-height: 400px">
        <div class="container">
            <div class="row ">
                <div class="col-md-6 text-white pt-5">
                    <h1>Bağımsız Arabulucular Derneği</h1>
                    <p>
                        Lorem ipsum dolor sit amet, vidisse indoctum electram quo an, facilisi explicari duo ei, mutat tantas diceret vix te. Malorum omittam perfecto in qui, vix id ignota probatus. Sed ut esse assum. Facer fierent in vim. Veniam fuisset postulant pro cu, aperiam suscipiantur sea et.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, vidisse indoctum electram quo an, facilisi explicari duo ei, mutat tantas diceret vix te. Malorum omittam perfecto in qui, vix id ignota probatus. Sed ut esse assum. Facer fierent in vim. Veniam fuisset postulant pro cu, aperiam suscipiantur sea et.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
  export default {
    name: 'HalfPageIntroduction'

  }
</script>

<style lang="scss" scoped>

    $main_font_color: #385EA0;

    @import '../../node_modules/bootstrap/scss/bootstrap.scss';

    .pageRoot {
        background: #2A3244
    }

    @include media-breakpoint-up(sm) {
        .pageRoot {
            background: #2A3244 url(../assets/halfpageimage.jpg);
            background-size:     cover;
            background-repeat:   no-repeat;
            background-position: center center;
        }
    }

</style>
