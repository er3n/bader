<template>
    <div class="container-fluid footerRoot bg-dark">
    <footer class="container py-5">
        <div class="row">
            <div class="col-6 col-md">
                <h5 class="text-white">Hakkımızda</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">Yönetim Kurulu</a></li>
                    <li><a class="text-muted" href="#">Denetim Kurulu</a></li>
                    <li><a class="text-muted" href="#">Etik ve Disiplin Kurulu</a></li>
                    <li><a class="text-muted" href="#">Amaç ve Hedefler</a></li>
                    <li><a class="text-muted" href="#">Tüzüğümüz</a></li>
                    <li><a class="text-muted" href="#">Tanıtım Broşörümüz</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5 class="text-white">Mevzuat</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">Yönetim Kurulu</a></li>
                    <li><a class="text-muted" href="#">Denetim Kurulu</a></li>
                    <li><a class="text-muted" href="#">Disiplin Kurulu</a></li>
                    <li><a class="text-muted" href="#">Amaç ve Hedefler</a></li>
                    <li><a class="text-muted" href="#">Tüzüğümüz</a></li>
                    <li><a class="text-muted" href="#">Tanıtım Broşüşürümüz</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5 class="text-white">Faaliyetlerimiz</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">Etkinliklerimiz</a></li>
                    <li><a class="text-muted" href="#">Ziyaretlerimiz</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5 class="text-white">Üyelerimiz</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">Üyelik Koşulları</a></li>
                    <li><a class="text-muted" href="#">Üyelik Formu</a></li>
                    <li><a class="text-muted" href="#">Banka Bilgileri</a></li>
                    <li><a class="text-muted" href="#">Üye Bilgileri</a></li>
                </ul>
            </div>
            <div class="col-12 col-md-4">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Email Adresiniz" >
                    <span class="input-group-addon bg-white text-dark" style="vertical-align: middle" >
                        <span class="pt-2">
                        <icon name="paper-plane" scale="2.2" class="pt-2"/></span>
                    </span>
                </div>
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

    }

</style>


