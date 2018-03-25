<template>
    <nested-page :page="page" />
</template>

<script>
import NestedPage from "../../components/NestedPage.vue";
import AboutPageContent from "../../assets/json/subscription.json";

export default {
  name: "About",
  components: {
      NestedPage
  },
  data() {
    return {
      page: AboutPageContent
    };
  }
};
</script>