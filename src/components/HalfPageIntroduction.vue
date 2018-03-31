<template>
    <div class="pageRoot container-fluid mt-3" style="min-height: 400px">
        <div class="container">
            <div class="row ">
                <div class="col-md-6 text-white pt-5">
                    <h1>Bağımsız Arabulucular Derneği</h1>


                    <p>
                                BADER olarak; Arabuluculuk mesleğini tanıtmak ve geliştirmek, arabuluculuk mesleğini yürütenler
        arasında yardımlaşma ve işbirliğini sağlamak, gerçek ve tüzel kişileri aralarındaki hukuk
        uyuşmazlıklarının giderilmesi için, tarafsız ve bağımsız üçüncü bir kişi olan Arabulucu
        yardımıyla ve ancak kendi iradelerine dayalı, alternatif bir çözüm için bilgilendirmek ve
        özendirmek, bu şekilde uzlaşı kültürünün yayılmasına vasıta olarak toplumsal barışa katkı
        sağlamak, bilimsel çeşitli görüşme ve müzakere yöntemleri kullanılarak, bireysel ve toplumsal
        farkındalık yaratmak ve arabuluculuk çözüm yöntemi ile diğer tüm alternatif çözüm yollarının
        tanıtımını ve geliştirilmesini sağlamak amaçları ile faaliyette bulunulması ilke edinilmiştir.
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
