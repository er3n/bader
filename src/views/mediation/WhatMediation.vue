<template>
  <div class="col-12 col-md-9">
      <h2>Arabuluculuk Nedir</h2>
      <hr>
      <p>
          Görüşmek, müzakerelerde bulunmak ve aralarındaki anlaşmazlıkları çözmek için tarafları bir araya getiren, uzmanlık eğitimi almış, tarafsız ve bağımsız bir üçüncü kişinin katılımıyla yürütülen çözüm yöntemine arabuluculuk denir. 
      </p>
  </div>
</template>

<script>
import Accordion from "../../components/Accordion";

export default {
  name: "WhatMadiation",
  components: {
    Accordion
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss">
$basecolor: #276ba6;

.sssTitle {
  color: $basecolor !important;
}
.card-header {
  background-color: white;
}
</style>