<template>
    <div>
        <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img class="d-block img-fluid" src="../assets/aboutus.jpg" alt="First slide">
                </div>
                <div class="carousel-caption d-none d-md-block">
                    <h1 style="opacity: 0.3">Hakkımızda</h1>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="d-none d-sm-block col-md-3">
                    <div class="list-group">
                        <a href="#" v-on:click.prevent="pageKey = 'amac-ilke-deger'"
                           :class="{'list-group-item': true, 'active': isAmacIlkeHedef()}">Amaç İlke ve Değerlerimiz</a>
                        <a href="#" v-on:click.prevent="pageKey = 'yonetim-kurulu'"
                           :class="{'list-group-item': true, 'active': isYonetimKurulu()}">Yönetim Kurulu</a>
                    </div>
                </div>

                <div class="col-12 col-md-9" v-if="isAmacIlkeHedef()">
                    <h2>Amaç İlke ve Değerlerimiz</h2>
                    <hr>
                    <p>
                        Derneğimiz, 27.09.2017 tarihinde “Necatibey Caddesi No: 25/29, Sıhhıye-ANKARA” merkez adresinde
                        kurulan Ankara Valiliği İl Dernekler Müdürlüğü’nün 6-129-021 kütük numarası ile yasal kuruluş
                        sürecini tamamlamış ve faaliyete geçmiştir.
                    </p>
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
                    <p>
                        BADER amacının gerçekleşmesi için her türlü faaliyetinde, resmi ve özel herhangi bir kurum, kişi
                        ve siyasi görüşe bağlı ve menfaat birliği içinde olmadan, Anayasal ilkelere bağlı, insan
                        haklarına saygılı, tüm bireyleri eşit kabul eden, düşünce ve inanç özgürlüğünü savunan,
                        uluslararası mesleki ilke ve değerler doğrultusunda hareket etmeyi ilke edinmiş olup, bu ilkeler
                        çerçevesinde bizimle birlikte olmak isteyen tüm meslektaşlarımızın katkısına açıktır.
                    </p>
                </div>

                <div class="col-12 col-md-9" v-if="isYonetimKurulu()">
                    <h2>Yönetim Kurulu</h2>
                    <hr>

                    <personal-info title="Av.Arb.Dursun Yassikaya" url="dursun-yassıkaya-resim-219x300">
                        1964 Kırıkkale doğumludur. Ankara Üniversitesi Hukuk Fakültesi mezunu olup, 1994
                        yılından itibaren Ankara’da serbest avukatlık yapmaktadır.

                        Serbest Avukatlık yapmadan önce uzun bir dönem özel sektörde çalışmıştır. Bir dönem
                        aktif siyasi yaşamı olmuş ve kamuoyunda bilinen davalarda vekil olarak bulunmuştur.
                        Ankara Adli Yargı Komisyonu nezdinde, Eser sözleşmeleri, Kooperatif uyuşmazlıkları ve
                        hesap bilirkişisi olarak görev yapmıştır. 2010 yılında Hacettepe Üniversitesi nezdinde
                        verilen Arabuluculuk eğitimi almış ve akabinde Hasan Kalyoncu Üniversitesi nezdinde
                        Arabuluculuk Yenileme Eğitimi almıştır. Halen Ankara’da serbest avukat olarak çalışmakta
                        olup, aynı zamanda Adalet Bakanlığı 1211 siciline kayıtlı Arabulucu olarak görev
                        yapmaktadır. Ayrıca, Adalet Bakanlığı ile İngiltere Büyükelçiliği işbirliği ile
                        düzenlenen Arabuluculuk Eğitim programında Eğitmen olarak yer almaktadır.

                        Bağımsız Arabulucular Derneği-BADER Kurucu Başkanı ve Bağımsız Arabuluculuk ve
                        Alternatif Uyuşmazlık Çözüm Merkezi Kurucu Ortağı’dır.

                    </personal-info>

                    <hr>

                    <personal-info title="Av.Arb.Mehmet Erşahin" url="mehmet-ersahin-239x300">
                        1984 yılı TED Ankara Koleji mezunudur. Ankara Hukuk Fakültesi’nden 1989 yılında mezun olmuş ve 1991 yılında Ankara’da serbest avukat olarak çalışmaya başlamıştır. Daha sonra 2000 yılında Anadolu Üniversitesi İşletme Fakültesi, 2004 yılı Anadolu Ü. İ. ve İ.B. Programı Sosyal İlişkiler Bölümü, 2006 yılı Anadolu Ü. İ. ve İ.B. Programı Halkla İlişkiler Bölümü mezuniyeti vardır. 2015 yılında Arabuluculuk Eğitimi belgesi alarak, Adalet Bakanlığı Arabulucular Siciline kaydolmuştur. 2017 yılında İş Hukukunda Arabuluculuk Eğitimi almıştır. Bağımsız Arabulucular Derneği-BADER Kurucu üyesi ve Bağımsız Arabuluculuk ve Alternatif Uyuşmazlık Çözüm Merkezi Kurucu Ortağı’dır.

                    </personal-info>


                </div>

            </div>

        </div>

    </div>
</template>

<script>

  import PersonalInfo from '../components/PersonalInfo'

  export default {
    name: 'About',
    components: {
      PersonalInfo
    },
    data () {
      return {
        pageKey: this.$route.params.id
      }
    },
    methods: {
      isAmacIlkeHedef: function () {
        return this.pageKey === 'amac-ilke-deger'
      },
      isYonetimKurulu: function () {
        return this.pageKey === 'yonetim-kurulu'
      }

    }
  }
</script>

<style lang="scss">

    $basecolor: #276BA6;

    .active {
        background-color: $basecolor !important;
    }

    .list-group-item {
        color: $basecolor
    }

</style>