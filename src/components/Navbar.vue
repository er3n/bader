<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white" v-on:click="showNavbarCliked">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="./../assets/logo.png" class="d-inline-block align-top" height="50px"
                     alt="Bader - Bağımsız arabulucular derneği">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
                    aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation"
                    v-click-outside="hideNavbar">
                <span :class="{'navbar-toggler-icon': true, 'navToggleVisible':showNavbar, 'changeOpacity': true}"/>
            </button>

            <div :class="{'collapse': true, 'navbar-collapse':true, show: showNavbar}"
                 id="navbarMenuItems">
                <ul class="navbar-nav  ml-auto" >
                    <li class="nav-item">
                        <a class="nav-link" href="/hakkimizda">HAKKIMIZDA</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/mevzuat">MEVZUAT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/mevzuat">ARABULUCULUK</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/faaliyetlerimiz">FAALİYETLERİMİZ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/uyelerimiz">ÜYELİK</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/sss">DUYURULAR</a>
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
    name: 'Navbar',
    data () {
      return {
        showNavbar: false
      }
    },
    methods: {
      showNavbarCliked: function () {
        this.showNavbar = !this.showNavbar
      },
      hideNavbar: function () {
        this.showNavbar = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .navbar {
        -webkit-box-shadow: 0 0px 12px -6px #999;
        -moz-box-shadow: 0 8px 12px -6px #999;
        box-shadow: 0 0px 12px 0px #999;

        /* the rest of your styling */
    }

    .navbar-light {
        background-color: #fff;
        color: white
    }

    .nav-link {

        color: black !important;

        &:hover {
            color: white !important;
            background-color: #276BA6;
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
