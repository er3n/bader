<template>
    <div class="col-12 col-md-9">
        <h2>Yönetim Kurulu</h2>
        <hr>
<div class="row">

    <div class="col-12 col-md-4 mt-1">
        <div class="card">
            <img class="card-img-bottom" v-lazy="'/img/person/2.png'" alt="Card image cap">
            <div class="card-body mx-auto">
                <h5 class="card-title">Aydın Cinel</h5>
                <hr>
                
                <ul class="list-group">
                    <li class="list-group-item">
                        Ankara Ünv. Hukuk Fak.
                    </li>
                    <li class="list-group-item">
                        Avukat - Uzm.  Arabulucu
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="col-12 col-md-4 mt-1">
        <div class="card">
            <img class="card-img-bottom" v-lazy="'/img/person/d2580337-d8e0-4858-abb3-66992df6945f.jpg'" alt="Card image cap">
            <div class="card-body mx-auto">
                <h5 class="card-title">Eyüp Yıldırım</h5>
                <hr>
                
                <ul class="list-group">
                    <li class="list-group-item">
                        Ankara Ünv. Hukuk Fak.
                    </li>
                    <li class="list-group-item">
                        Avukat - Uzm. Arabulucu
                    </li>
                </ul>
            </div>
        </div>
    </div>

    
    <div class="col-12 col-md-4 mt-1">
        <div class="card">
            <img class="card-img-bottom" v-lazy="'/img/person/1.png'" alt="Card image cap">
            <div class="card-body mx-auto">
                <h5 class="card-title">Selim Karakoyun</h5>
                <hr>
                
                <ul class="list-group">
                    <li class="list-group-item">
                        Ankara Ünv. Hukuk Fak.
                    </li>
                    <li class="list-group-item">
                        Avukat - Arabulucu
                    </li>
                </ul>
            </div>
        </div>
    </div>



    
</div>
</div>
</template>


<style lang="scss" scoped>

$basecolor: #276ba6;

.card {
  -webkit-box-shadow: 0 0px 12px -6px #999;
  -moz-box-shadow: 0 8px 12px -6px #999;
  box-shadow: 0 0px 12px 0px #999;
  border: 0;
  background-color: $basecolor;
  color: white;
}

img {
    max-height: 250px;
}

</style>
