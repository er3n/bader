<template>
    <div class="pageRoot container pt-5">
        <div class="row">
            <div class="col-lg-4">
                <div class="guide-logo">
                    <icon name="user" scale="3"/>
                </div>
                <h2>Üyelik</h2>
                <p>
        Türk  vatandaşı olmak. <br>
        Fiil ehliyetine sahip bulunmak. <br>
        Adalet Bakanlığı Arabulucular Siciline Kaydedilmiş gerçek kişiler. <br>
                </p>
                <p><a class="guide-to-continue-link" href="#/uyelik/kosullar" role="button">Devamı için tıklayınız »</a></p>
            </div>
            <div class="col-lg-4">
                <div class="guide-logo">
                    <icon name="briefcase" scale="3"/>
                </div>
                <h2>Amaç ve Hedefler</h2>
                <p>BADER olarak; Arabuluculuk mesleğini tanıtmak ve geliştirmek, arabuluculuk mesleğini yürütenler
        arasında yardımlaşma ve işbirliğini sağlamak, gerçek ve tüzel kişileri aralarındaki hukuk
        uyuşmazlıklarının giderilmesi için, tarafsız ...</p>
                <p><a class="guide-to-continue-link" href="#/hakkimizda/amac-ilke-deger" role="button">Devamı için tıklayınız »</a></p>
            </div>
            <div class="col-lg-4">
                <div class="guide-logo">
                    <icon name="handshake-o" scale="4"/>
                </div>
                <h2>Arabuluculuk</h2>
                <p>Görüşmek, müzakerelerde bulunmak ve aralarındaki anlaşmazlıkları çözmek için tarafları bir araya getiren, uzmanlık eğitimi almış, tarafsız ve bağımsız bir üçüncü kişinin katılımıyla yürütülen çözüm yöntemine arabuluculuk denir.</p>
                <p><a class="guide-to-continue-link" href="#/arabuluculuk/arabuluculuk-nedir" role="button">Devamı için tıklayınız »</a></p>
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
