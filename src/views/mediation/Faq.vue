<template>
  <div class="col-12 col-md-9">
      <h2>Sık Sorulan Sorular</h2>
      <hr>
      <accordion :items="faqContent" />
  </div>
</template>

<script>
import Accordion from "../../components/Accordion";
import FaqContent from "../../assets/json/faq.json"

export default {
  name: "Faq",
  components: {
    Accordion
  },
  data() {
    return {
      faqContent: FaqContent
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