<template>
  <div class="main" style="width: 100%;text-align: center;padding-top: 64px">
    <h1>Account</h1>
  </div>
  <MDBFooter :text="['center', 'lg-start']">
    <!-- Grid container -->
    <MDBContainer class="p-4 pb-0">
      <form action="">
        <!--Grid row-->
        <MDBRow>
          <!--Grid column-->
          <MDBCol auto class="mb-4 mb-md-0">
            <p class="pt-2"><strong>Sign up for our newsletter</strong></p>
          </MDBCol>
          <!--Grid column-->

          <!--Grid column-->
          <MDBCol md="5" col="12" class="mb-4 mb-md-0">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form5Example2" class="form-control" />
              <label class="form-label" for="form5Example2">Email address</label>
            </div>
          </MDBCol>
          <!--Grid column-->

          <!--Grid column-->
          <MDBCol auto class="mb-4 mb-md-0">
            <!-- Submit button -->
            <MDBBtn color="primary" type="submit" class="mb-4">
              Subscribe
            </MDBBtn>
          </MDBCol>
          <!--Grid column-->
        </MDBRow>
        <!--Grid row-->
      </form>
    </MDBContainer>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>

<script>
import { MDCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";

export default {
  name: 'App',
  components: {
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
    MDCol,
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
