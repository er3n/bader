<template>
    <div class="pageRoot container pt-5">
        <div class="row">
            <div class="col-lg-4">
                <div class="guide-logo">
                    <icon name="user" scale="3"/>
                </div>
                <h2>Üyelik</h2>
                <p>Donec sed odio dui. Etiam porta sem maleada magna mollis euismod. Nullam id dolor id nibh ultricies
                    vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                    cursus magna.</p>
                <p><a class="guide-to-continue-link" href="#" role="button">Devamı için tıklayınız »</a></p>
            </div>
            <div class="col-lg-4">
                <div class="guide-logo">
                    <icon name="briefcase" scale="3"/>
                </div>
                <h2>Amaç ve Hedefler</h2>
                <p>Donec sed odio dui. Etiam porta sem maleada magna mollis euismod. Nullam id dolor id nibh ultricies
                    vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                    cursus magna.</p>
                <p><a class="guide-to-continue-link" href="#" role="button">Devamı için tıklayınız »</a></p>
            </div>
            <div class="col-lg-4">
                <div class="guide-logo">
                    <icon name="handshake-o" scale="4"/>
                </div>
                <h2>Arabuluculuk Çözümü</h2>
                <p>Donec sed odio dui. Etiam porta sem maleada magna mollis euismod. Nullam id dolor id nibh ultricies
                    vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                    cursus magna.</p>
                <p><a class="guide-to-continue-link" href="#" role="button">Devamı için tıklayınız »</a></p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ShortGuide'

  }
</script>

<style lang="scss" scoped>

    $main_font_color: #385EA0;

    .pageRoot {
        text-align: center;

        .guide-logo {
            color: $main_font_color;
        }

        .guide-to-continue-link {
            color: $main_font_color;
        }

    }

</style>
