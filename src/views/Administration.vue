<template>
  <div class="row justify-content-center">
    <h1 style="margin-top: 20px">Administration</h1>
    <MDBCard class="table-card">
      <MDBCardBody>
        <table class="table align-middle">
          <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Usermame</th>
            <th scope="col">Email</th>
            <th scope="col">Permissions</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
            <template v-for="(user, i) in this.users" :key="i">
              <UserRow :i="i + 1" :name="user.name" :email="user.email" :type="user.type" :user-type="user.userType"
                :ban-action="() => { this.banUser(i) }" :isLoadingBan="isProcessingBan && selectedBan === i"
              ></UserRow>
            </template>
          </tbody>
        </table>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>

<script>
import { MDCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";
import UserRow from "../components/UserRow.vue";
import { mapActions } from 'vuex';

export default {
  name: 'Administration',
  components: {
    UserRow,
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
    MDCol,
  },
  methods: {
    ...mapActions(['ban', 'unban', 'getUsers']),
    banUser(i) {
      this.selectedBan = i
      this.isProcessingBan = true
      let user = this.users[i]
      if (user.userType === 0) {
        this.unban(user.id)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(123)
            console.log(error)
          })
        .finally(() => {
          this.selectedBan = -1
          this.isProcessingBan = false
        })
      } else if (user.userType === 1) {
        this.ban(user.id)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(321)
            console.log(error)
          })
        .finally(() => {
          this.selectedBan = -1
          this.isProcessingBan = false
        })
      }
    }
  },
  mounted() {
    this.getUsers()
      .then((users) => {
        this.users = users
      })
  },
  data() {
    return {
      users: [],
      isProcessingBan: false,
      selectedBan: -1,
    }
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
