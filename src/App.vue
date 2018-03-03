<template>
  <div id="app">
    <contact-header />
    <navbar />
    <router-view/>
    <page-footer />
  </div>
</template>

<script>
  import ContactHeader from './components/ContactHeader'
  import Navbar from './components/Navbar'
  import PageFooter from './components/Footer'

  export  default {
    components:  {
      ContactHeader,
      Navbar,
      PageFooter
    }
  }
</script>

<style lang="scss">
  @import './styles/custom-bootstrap.scss';
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>