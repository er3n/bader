<template>
    <nested-page :page="page" />
</template>

<script>
import NestedPage from "../../components/NestedPage.vue";
import Content from "../../assets/json/legislation.json";

export default {
  components: {
      NestedPage
  },
  data() {
    return {
      page: Content
    };
  }
};
</script>