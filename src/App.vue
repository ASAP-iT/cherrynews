<template>
  <MDBNavbar id="nav" expand="lg" light bg="white" container>
    <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
    <MDBNavbarNav collapse="navbarExample01" class="mb-2 mb-lg-0">
      <router-link to="/">Posts</router-link> |
      <router-link to="/about">Account</router-link>
    </MDBNavbarNav>
  </MDBNavbar>
  <router-view class="content"/>
  <MDBFooter :text="['white', 'center', 'lg-start']" class="footer text-white text-center text-lg-start">
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </MDBFooter>
</template>

<script>
import {
  MDBContainer, MDBRow, MDBCol,
  MDBBtn, MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";

export default {
  name: 'App',
  components: {
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBContainer, MDBRow, MDBCol,
  },
  methods: {
    register() {
      this.isLoading = true
    },
  },
  data() {
    return {
      isLoading: false
    }
  }
}
</script>

<style>
.content {
  margin-bottom: 100px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
