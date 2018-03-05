<template>
    <div class="row">

        <div class="col-md-4">
            <img :src="imagePath()" class="img-fluid"/>
        </div>

        <div class="col-md-8">
            <h4>{{title}}</h4>
            <p>
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
      props: ['title', 'url'],
      methods: {
        imagePath: function () {
          return require('../assets/' + this.url + '.jpg')
        }
      }

    }
</script>