<template>
    <nested-page :page="page" />
</template>

<script>
import NestedPage from "../../components/NestedPage.vue";
import MediationPageContent from "../../assets/json/mediation.json";

export default {
  name: "Mediation",
  components: {
      NestedPage
  },
  data() {
    return {
      page: MediationPageContent
    };
  }
};
</script>