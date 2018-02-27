<template>
  <div id="app">
    <contact-header />
    <navbar />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import ContactHeader from './components/ContactHeader'
  import Navbar from './components/Navbar'

  export  default {
    components:  {
      ContactHeader,
      Navbar
    }
  }
</script>


<style lang="scss">
  @import './styles/custom-bootstrap.scss';
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>