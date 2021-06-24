<template>
  <div class="main">
    <h1>Account</h1>
    <div class="wrapper">
      <div class="row grid" style="padding-top: 32px;width: 100%;margin-left: 0;margin-right: 0">
        <MDBCard class="profile-card" style="display: table; margin: 0 auto;">
          <p class="alert alert-info">
            <!--            <strong>Внимание:</strong>-->
            Чтобы обновить данные профиля нажмите кнопку сохранить
          </p>

          <h2>Hello, Roman</h2>
          <p style="color: gray">You're a basic user</p>
          <div class="form-outline form-item">
            <input v-model="full_name" class="form-control active">
            <label class="form-label">Полное имя</label>
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px"></div>
              <div class="form-notch-middle" style="width: 80px"></div>
              <div class="form-notch-trailing"></div>
            </div>
          </div>
          <div class="form-outline form-item">
            <input v-model="email" type="Email" class="form-control active">
            <label class="form-label">Email</label>
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px"></div>
              <div class="form-notch-middle" style="width: 40px"></div>
              <div class="form-notch-trailing"></div>
            </div>
          </div>
          <div class="form-outline form-item">
            <input v-model="email" type="Email" class="form-control active">
            <label class="form-label">Имя Пользователя</label>
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px"></div>
              <div class="form-notch-middle" style="width: 120px"></div>
              <div class="form-notch-trailing"></div>
            </div>
          </div>
          <div>
            <MDBBtn color="primary" size="lg" class="save" @click="saveUser()">Сохранить данные</MDBBtn>
          </div>
          <div>
            <MDBBtn color="danger" size="lg" class="save" @click="logout()">Выйти из аккаунта</MDBBtn>
          </div>
        </MDBCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import { MDCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";

export default {
  name: 'About',
  components: {
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
    MDCol,
  },
  methods: {
    logout() {
      this.setLoggedIn(false);
      this.$router.push("/")
    },
    saveUser() {

    },
    registerUser() {
      // const data = {
      //   full_name: this.full_name,
      //   email: this.email,
      //   nickname: this.nickname,
      //   password: this.password,
      // }
      // this.register(data)
      //   .then((response) => {
      //     console.log(response.data.body)
      //   })
      //   .finally(() => {
      //     console.log("Finally")
      //   })
    },
    ...mapActions(['save']),
    ...mapMutations(['setLoggedIn'])
  },
  data() {
    return {
      full_name: "",
      email: "",
      nickname: "",
      password: ""
    }
  }
}
</script>

<style>
.form-item {
  margin-top: 24px;
  margin-bottom: 24px;
}

.profile-card {
  padding: 16px;
  max-width: 650px;
}

.save {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
