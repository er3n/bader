<template>
    <div class="container-fluid main">
        <div class="container">
            <div class="d-inline-flex p-1">
                <div class="d-flex flex-row">
                    <div class="p-0 px-2">
                        <icon name="phone" scale="1.8"></icon>
                    </div>
                    <div class="p-0">
                        <div class="d-flex flex-column phone">
                            <div class="p-0">Tel</div>
                            <div class="p-0">0 312 229 23 70</div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row px-4">
                    <div class="p-0 px-2">
                        <icon name="map-marker" scale="1.8"></icon>
                    </div>
                    <div class="p-0">
                        <div class="d-flex flex-column phone">
                            <div class="p-0">Adress</div>
                            <div class="p-0">Necatibey Caddesi No: 25/18 Ankara</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'ContactHeader'

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .main {
        background-color: #385EA0;
        color: #fff;

        .phone > * {
            font-size: 10px;
            margin: 0;
            padding: 0;
        }
    }

</style>
