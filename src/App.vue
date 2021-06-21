<template>
  <MDBNavbar id="nav" expand="lg" light bg="white" container>
    <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
    <MDBNavbarNav collapse="navbarExample01" class="mb-2 mb-lg-0">
      <router-link to="/">Posts</router-link> |
      <router-link to="/about">Account</router-link>
<!--      <MDBNavbarItem to="#" active>-->
<!--        Home-->
<!--      </MDBNavbarItem>-->
<!--      <MDBNavbarItem to="/account">-->
<!--        Account-->
<!--      </MDBNavbarItem>-->
<!--      <MDBNavbarItem to="/about">-->
<!--        About-->
<!--      </MDBNavbarItem>-->
    </MDBNavbarNav>
  </MDBNavbar>
  <router-view/>
</template>

<script>
import { MDBBtn, MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";

export default {
  name: 'App',
  components: {
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem
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
