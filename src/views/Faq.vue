<template>
    <div>
        <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img class="d-block img-fluid" src="../assets/aboutus.jpg" alt="First slide">
                </div>
                <div class="carousel-caption d-none d-md-block">
                    <h1 style="opacity: 0.3">Sık Sorulan Sorular</h1>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class="row">
                <accordion :items="arabuluculukFaq" />
            </div>

        </div>

    </div>
</template>

<script>
import Accordion from "../components/Accordion";
import ArabuluculukFaq from "../assets/json/arabuluculuk-faq.json"

export default {
  name: "Faq",
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