<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="./../assets/logo.png" class="d-inline-block align-top" height="50px" alt="Bader - Bağımsız arabulucular derneği">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarMenuItems">
                <ul class="navbar-nav  ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/hakkimizda">HAKKIMIZDA</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/mevzuat">MEVZUAT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/faaliyetlerimiz">FAALİYETLERİMİZ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/uyelerimiz">ÜYELERİMİZ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/sss">S.S.S</a>
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
    name: 'Navbar'

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .navbar {
        -webkit-box-shadow: 0 0px 6px -6px #999;
        -moz-box-shadow: 0 8px 6px -6px #999;
        box-shadow: 0 0px 6px 0px #999;

        /* the rest of your styling */
    }

    .navbar-light {
        background-color: #fff;
        color: white
    }

    .nav-link {
        font-weight: 600;
        color: black !important;

        &:hover {
            color: white !important;
            background-color: #276BA6;
        }

    }

</style>
