<template>
  <div class="row justify-content-center">
    <h1 style="margin-top: 20px">Administration</h1>
    <MDBCard class="table-card">
      <MDBCardBody>
        <table class="table align-middle">
          <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">User</th>
            <th scope="col">Status</th>
            <th scope="col">Permissions</th>
            <th scope="col">Dolor</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Макс</td>
            <td>Гей без мака</td>
            <td>Moder</td>
            <td>
              <button type="button" class="btn btn-danger btn-sm px-3">
                Ban User
              </button>
              <button type="button" class="btn btn-warning btn-sm px-3">
                Make Mod
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Рома Омега</td>
            <td>Главный гей с маком </td>
            <td>User</td>
            <td>
              <button type="button" class="btn btn-danger btn-sm px-3">
                Ban User
              </button>
              <button type="button" class="btn btn-warning btn-sm px-3">
                Make Mod
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Дени</td>
            <td>Гей с маком</td>
            <td>User</td>
            <td>
              <button type="button" class="btn btn-danger btn-sm px-3">
                Ban User
              </button>
              <button type="button" class="btn btn-warning btn-sm px-3">
                Make Mod
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>

<script>
import { MDCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";

export default {
  name: 'Administration',
  components: {
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
    MDCol,
  }
}
</script>

<style>
.table-card {
  margin-top: 32px;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
}
.btn{
  margin-right: 10px
}
</style>