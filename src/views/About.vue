<template>
  <div class="main" style="width: 100%;text-align: center;padding-top: 64px">
    <h1>Account</h1>
  </div>
</template>

<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";

export default {
  name: 'App',
  components: {
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
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
.cell {
  padding: 12px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: #eee;
  border-radius: 16px;
}

.note {
  margin-top: 16px;
  margin-left: 64px;
  margin-right: 64px;
}

.w-100 {
  margin-top: 32px;
}
</style>
