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
                <small class="text-white">Eposta bildirim listemize kayıt olmak için</small>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Email Adresiniz" >
                    <span class="input-group-addon bg-white text-dark" style="vertical-align: middle" >
                        <span class="pt-2">
                        <icon name="paper-plane" scale="2.2" class="pt-2"/></span>
                    </span>
                </div>
                <div class="social float-md-right">
                    <a href="https://www.instagram.com/bamarabuluculukmerkezi/"><icon name="instagram" scale="2" /></a>
                    <a href="https://www.facebook.com/BAM-Ba%C4%9F%C4%B1ms%C4%B1z-Arabuluculuk-ve-Alternatif-Uyu%C5%9Fmazl%C4%B1k-%C3%87%C3%B6z%C3%BCm-Merkezi-125976598091885/" ><icon name="facebook"  scale="2" /></a>
                    <a href="https://twitter.com/bamarabuluculuk"><icon name="twitter" scale="2" /></a>
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

        .social {
            margin-top: 40px !important;
        }

        .social > * {
            color: white;
            margin: 10px
        }

    }

</style>


