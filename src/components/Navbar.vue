<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white"  v-click-outside="hideNavbar">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="./../assets/logo.png" class="d-inline-block align-top" height="50px"
                     alt="Bader - Bağımsız arabulucular derneği">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
                    aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation" v-on:click="showNavbarCliked">
                <span :class="{'navbar-toggler-icon': true, 'navToggleVisible':showNavbar, 'changeOpacity': true}"/>
            </button>

            <div :class="{'collapse': true, 'navbar-collapse':true, show: showNavbar}"
                 id="navbarMenuItems">
                <ul class="navbar-nav  ml-auto" >
                    <li class="nav-item dropdown" >
                        <a class="nav-link dropdown-toggle" href="#"  v-on:click.prevent="selectSubMenu('HAKKIMIZDA')"  >
                            HAKKIMIZDA
                        </a>
                        <div class="dropdown-menu show" v-if="showSubMenuKey == 'HAKKIMIZDA'" >
                            <a class="dropdown-item" href="/hakkimizda/amac-ilke-deger" v-on:click="hideNavbar">AMAÇ İLKE VE DEĞERLERİMİZ</a>
                            <a class="dropdown-item" href="/hakkimizda/yonetim-kurulu" v-on:click="hideNavbar">YÖNETİM KURULU</a>
                            <a class="dropdown-item" href="/hakkimizda/denetim-kurulu" v-on:click="hideNavbar">DENETİM KURULU</a>
                            <a class="dropdown-item" href="/hakkimizda/kurucular" v-on:click="hideNavbar">KURUCULARIMIZ</a>
                            <a class="dropdown-item" href="/hakkimizda/tuzugumuz" v-on:click="hideNavbar">TÜZÜĞÜMÜZ</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown" >
                        <a class="nav-link dropdown-toggle"  href="#" v-on:click.prevent="selectSubMenu('MEVZUAT')"  >
                            MEVZUAT
                        </a>
                        <div class="dropdown-menu show" v-if="showSubMenuKey == 'MEVZUAT'" >
                            <a class="dropdown-item" href="http://www.mevzuat.gov.tr/MevzuatMetin/1.5.6325.pdf" target="_blank" v-on:click="hideNavbar">KANUN</a>
                            <a class="dropdown-item" href="http://www.adb.adalet.gov.tr/Sayfalar/Teskilat/mevzuat/HukukUyusmazliklarindaArabuluculukKanunuYonetmeligi.pdf" target="_blank" v-on:click="hideNavbar">YÖNETMELİK</a>
                            <a class="dropdown-item" href="http://en.calameo.com/read/0055326178627edf6424d" target="_blank" v-on:click="hideNavbar">ETİK KURALLAR</a>
                            <a class="dropdown-item" href="/mevzuat/ucretlendirme"  v-on:click="hideNavbar">ÜCRET TARİFESİ</a>
                            <a class="dropdown-item" href="https://res.cloudinary.com/dwxj5ta2q/image/upload/v1528662493/DERNEKLER_C%CC%A7ALIS%CC%A7TAYI.pdf"  v-on:click="hideNavbar">ARABULUCULAR DERNEKLERİ I. ÇALIŞTAYI</a>
                            <a class="dropdown-item" href="https://res.cloudinary.com/dwxj5ta2q/image/upload/v1528662493/DERNEKLER_C%CC%A7ALIS%CC%A7TAYI.pdf"  v-on:click="hideNavbar">DERNEKLERİ ÇALIŞTAYI</a>
                            <a class="dropdown-item" href="https://res.cloudinary.com/dwxj5ta2q/image/upload/v1530653761/bask-mevzuat.pdf"  v-on:click="hideNavbar">HUKUK UYUŞMAZLIKLARINDA ARABULUCULUK</a>

                        </div>
                    </li>
                    <li class="nav-item dropdown" >
                        <a class="nav-link dropdown-toggle"  href="#" v-on:click.prevent="selectSubMenu('ARABULUCULUK')"  >
                            ARABULUCULUK
                        </a>
                        <div class="dropdown-menu show" v-if="showSubMenuKey == 'ARABULUCULUK'" >
                            <a class="dropdown-item" href="/arabuluculuk/arabuluculuk-nedir" v-on:click="hideNavbar">ARABULUCULUK NEDİR?</a>
                            <a class="dropdown-item" href="/arabuluculuk/sss" v-on:click="hideNavbar">SIK SORULAN SORULAR</a>
                            <a class="dropdown-item" href="/arabuluculuk/arabuluculuk-kitapligi" v-on:click="hideNavbar">İŞ HUKUKUNDA UYUŞMAZLIKTA SSS</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown" >
                        <a class="nav-link dropdown-toggle"  href="#" v-on:click.prevent="selectSubMenu('FAALIYETLERIMIZ')"  >
                            FAALİYETLERİMİZ
                        </a>
                        <div class="dropdown-menu show" v-if="showSubMenuKey == 'FAALIYETLERIMIZ'" >
                            <a class="dropdown-item" href="/faaliyetlerimiz/etkinlik" v-on:click="hideNavbar">ETKİNLİKLERİMİZ</a>
                            <a class="dropdown-item" href="/faaliyetlerimiz/ziyaret" v-on:click="hideNavbar">ZİYARETLERİMİZ</a>
                            <a class="dropdown-item" href="/faaliyetlerimiz/makaleler" v-on:click="hideNavbar">MAKALELER</a>
                            <a class="dropdown-item" href="/faaliyetlerimiz/egitim-sunumlari" v-on:click="hideNavbar">EĞİTİM SUNUMLARI</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown" >
                        <a class="nav-link dropdown-toggle"  href="#" v-on:click.prevent="selectSubMenu('UYELIK')"  >
                            ÜYELİK
                        </a>
                        <div class="dropdown-menu show" v-if="showSubMenuKey == 'UYELIK'" >
                            <a class="dropdown-item" href="/uyelik/kosullar" v-on:click="hideNavbar">ÜYELİK KOŞULLARI</a>
                            <a class="dropdown-item" href="http://docdro.id/7fpjXEn" target="_blank" v-on:click="hideNavbar">ÜYELİK FORMU</a>
                            <a class="dropdown-item" href="/uyelik/uyelerimiz" v-on:click="hideNavbar">ÜYELERİMİZ</a>
                            <a class="dropdown-item" href="/uyelik/banka-bilgileri" v-on:click="hideNavbar">BANKA BİLGİLERİ</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/duyurular">DUYURULAR</a>
                    </li>
                    <li class="nav-item dropdown" >
                        <a class="nav-link dropdown-toggle"  href="#" v-on:click.prevent="selectSubMenu('BASINDABIZ')"  >
                            BASINDA BİZ
                        </a>
                        <div class="dropdown-menu show" v-if="showSubMenuKey == 'BASINDABIZ'" >
                        <a class="dropdown-item" href="/basin/tv-programlari" v-on:click="hideNavbar">TV PROGRAMLARI</a>
                            <a class="dropdown-item" href="/basin/radyo-programlari" v-on:click="hideNavbar">RADYO PROGRAMLARI</a>
                            <a class="dropdown-item" href="/basin/yazili-basin" v-on:click="hideNavbar">YAZILI BASIN</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/iletisim">İLETİŞİM</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showNavbar: false,
      showSubMenuKey: undefined
    };
  },
  methods: {
    showNavbarCliked: function() {
      this.showNavbar = !this.showNavbar;
    },
    hideNavbar: function() {
      this.showNavbar = false;
      this.showSubMenuKey = false;
    },
    selectSubMenu: function(key) {
      if (this.showSubMenuKey && key === this.showSubMenuKey) {
        this.showSubMenuKey = undefined;
      } else {
        this.showSubMenuKey = key;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar {
  -webkit-box-shadow: 0 0px 12px -6px #999;
  -moz-box-shadow: 0 8px 12px -6px #999;
  box-shadow: 0 0px 12px 0px #999;
  font-size: 16px
  /* the rest of your styling */
}

.navbar-light {
  background-color: #fff;
  color: white;
}

.nav-link {
  color: black !important;

  &:hover {
    color: white !important;
    background-color: #276ba6;
  }
}

.navbar-toggler-icon {
  transition: transform 0.3s ease-in;
}

.navToggleVisible {
  -ms-transform: rotate(-90deg); /* IE 9 */
  -webkit-transform: rotate(-90deg); /* Safari 3-8 */
  transform: rotate(-90deg);
}
</style>
