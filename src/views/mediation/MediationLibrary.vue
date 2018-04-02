<template>
  <div class="col-12 col-md-9">
      <h2>İş Hukukunda Uyuşmazlıkta Sık Sorulan Sorular</h2>
      <hr>
      <accordion :items="arabuluculukFaq" />
  </div>
</template>

<script>
import Accordion from "../../components/Accordion";
import ArabuluculukFaq from "../../assets/json/arabuluculuk-faq.json"

export default {
  name: "MediationLibrary",
  components: {
    Accordion
  },
  data() {
    return {
      arabuluculukFaq: ArabuluculukFaq
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