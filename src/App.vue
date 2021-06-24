<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="#">ASAP-iT</MDBNavbarBrand>
    <MDBNavbarToggler
        @click="collapse1 = !collapse1"
        target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem class="nav-item" to="">
          <router-link to="/">Home</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem v-if="this.isLoggedIn" class="nav-item" to="">
          <router-link to="/about">Account</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem v-if="this.isLoggedIn" class="nav-item" to="">
          <router-link to="/create-post">Create</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem v-if="!this.isLoggedIn" class="nav-item" to="">
          <router-link to="/login"><b>Login</b></router-link>
        </MDBNavbarItem>
        <MDBNavbarItem v-if="!this.isLoggedIn" class="nav-item" to="">
          <router-link to="/register"><b>Register</b></router-link>
        </MDBNavbarItem>
        <MDBNavbarItem v-if="this.isLoggedIn" class="nav-item" to="">
          <router-link to="/administration">Administration</router-link>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
  <router-view/>
<!--  <MDBFooter :text="['white', 'center', 'lg-start']" class="footer text-white text-center text-lg-start align-bottom">-->
<!--    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">-->
<!--      © 2021 Copyright:-->
<!--      <a class="text-white" href="https://news.asap-it.tech/">asap-it.tech</a>-->
<!--    </div>-->
<!--  </MDBFooter>-->
</template>

<script>

import {
  MDFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBSpinner,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle, MDBCollapse,
  MDBDropdownMenu, MDBDropdownItem, MDBNavbarBrand
} from "mdb-vue-ui-kit";
import { ref } from 'vue';

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
    MDFooter,
    MDBBtn, MDBNavbarBrand, MDBCollapse,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBContainer, MDBRow, MDBCol,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  },
  methods: {
    ...mapMutations(['setLoggedIn'])
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  mounted() {
    // Check user token....
  },
  data() {
    return {
      dropdown: ref(false),
    }
  }
}
</script>

<style>
.nav-item {
  margin-left: 8px;
  margin-right: 8px;
}

.main {
  text-align: center;
  margin-top: 32px;
  width: 100%;
  margin-bottom: 70px;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
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
