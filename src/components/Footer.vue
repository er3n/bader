<template>
    <div class="container-fluid footerRoot bg-dark mt-5">

    <footer class="container py-5">
        <div class="row">
            <div class="col-12 col-md">
                <h5 class="text-white">Hakkımızda</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#/hakkimizda/yonetim-kurulu">Yönetim Kurulu</a></li>
                    <li><a class="text-muted" href="#/hakkimizda/yonetim-kurulu">Denetim Kurulu</a></li>
                    <li><a class="text-muted" href="#/hakkimizda/denetim-kurulu">Denetim Kurulu</a></li>
                    <li><a class="text-muted" href="#/hakkimizda/amac-ilke-deger">Amaç ve Hedefler</a></li>
                    <li><a class="text-muted" href="#/hakkimizda/tuzugumuz" >Tüzüğümüz</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5 class="text-white">Mevzuat</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="http://www.mevzuat.gov.tr/MevzuatMetin/1.5.6325.pdf" >Kanun</a></li>
                    <li><a class="text-muted" href="http://www.adb.adalet.gov.tr/Sayfalar/Teskilat/mevzuat/HukukUyusmazliklarindaArabuluculukKanunuYonetmeligi.pdf" >Yönetmelik</a></li>
                    <li><a class="text-muted" href="http://en.calameo.com/read/0055326178627edf6424d" >Etik Kurallar</a></li>
                    <li><a class="text-muted" href="#/mevzuat/ucretlendirme">Ücret Tarifesi</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5 class="text-white">Arabuluculuk</h5>
                <ul class="list-unstyled text-small">

                    <li><a class="text-muted" href="#/arabuluculuk/arabuluculuk-nedir">Arabuluculuk Nedir?</a></li>
                        <li>    <a class="text-muted" href="#/arabuluculuk/sss" >Sıkça Sorulan Sorular</a></li>
                            <li><a class="text-muted" href="#/arabuluculuk/arabuluculuk-kitapligi">İş Hukukunda Uyuşmazlıkta SSS</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5 class="text-white">Faaliyetlerimiz</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#/faaliyetlerimiz/etkinlik" >Etkinliklerimiz</a></li>
                    <li><a class="text-muted" href="#/faaliyetlerimiz/ziyaret" >Ziyaretlerimiz</a></li>
                    <li><a class="text-muted" href="#/faaliyetlerimiz/makaleler" >Makaleler</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5 class="text-white">Üyelik</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#/uyelik/kosullar">Üyelik Koşulları</a></li>
                    <li><a class="text-muted" href="#/uyelik/form" >Üyelik Formu</a></li>
                    <li><a class="text-muted" href="#/uyelik/banka-bilgileri" >Banka Bilgileri</a></li>
                    <li><a class="text-muted"  href="#/uyelik/uyelerimiz">Üyelerimiz</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5 class="text-white">Basında Biz</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted"  href="#/basin/tv-programlari">TV Programları</a></li>
                    <li><a class="text-muted"  href="#/basin/radyo-programlari" >Radyo Programları</a></li>
                    <li><a class="text-muted"  href="#/basin/yazili-basin">Yazılı Basın</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5 class="text-white">Sosyal</h5>
                <ul class="list-unstyled text-small">
                    <li><a href="https://www.instagram.com/bagimsizarabuluculardernegi/?hl=tr"><icon name="instagram" scale="2" /></a></li>
                    <li><a href="#" ><icon name="facebook"  scale="2" /></a></li>
                    <li><a href="https://twitter.com/BADER_Dernegi/status/929964671884513280"><icon name="twitter" scale="2" /></a></li>
                </ul>
            </div>


            <div class="col-12 text-white" style="text-align: center">
                <small>Bütün hakları saklıdır © {{ new Date().getFullYear() }} - BADER Bağımsız Arabulucular Derneği</small>
            </div>
        </div>
    </footer>
    </div>
</template>

<script>

  export default {
    name: 'PageFooter'

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    $basecolor: #276BA6;

    .footerRoot {
        background-color: #202020;

        .input-group-addon {
            cursor: pointer;

            &:hover {
                background-color: lighten($basecolor, 20) !important;
                color: white !important;
            }
        }

        .social {
            margin-top: 10px !important;
        }

        .social > * {
            color: white;
            margin: 10px
        }

    }

</style>



