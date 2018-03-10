<template>
    <div>
        <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img class="d-block img-fluid" src="../assets/aboutus.jpg" :alt="page.title">
                </div>
                <div class="carousel-caption d-none d-md-block">
                    <h1 style="opacity: 0.3">{{page.title}}</h1>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="d-none d-sm-block col-md-3">
                    <div class="list-group">
                        <router-link :to="value.link" class="list-group-item" v-for="(value, key) in page.menus" :key="key">{{value.title}}</router-link>
                    </div>
                </div>

                <router-view></router-view>

            </div>

        </div>

    </div>
</template>

<script>
export default {
  name: "NestedPage",
  props: ["page"]
};
</script>

<style lang="scss">
$basecolor: #276ba6;

.router-link-active {
  background-color: $basecolor !important;
  color: white !important;
}

.list-group-item {
  color: $basecolor;
}
</style>