<template>
  <div class="main" style="width: 100%;text-align: center;padding-top: 64px">
    <h1>Account</h1>
  </div>
  <div class="wrapper">
    <div class="row grid" style="padding-top: 32px;width: 100%;margin-left: 0;margin-right: 0">
      <MDBCard class="profile-card" style="display: table; margin: 0 auto;">
        <p class="alert alert-info">
          <!--            <strong>Внимание:</strong>-->
          Чтобы обновить данные профиля нажмите кнопку созранить
        </p>

        <h2>Hello, Roman</h2>
        <p style="color: gray">You're a basic user</p>
        <div class="form-outline form-item">
          <input class="form-control active">
          <label class="form-label">Полное имя</label>
          <div class="form-notch">
            <div class="form-notch-leading" style="width: 9px"></div>
            <div class="form-notch-middle" style="width: 80px"></div>
            <div class="form-notch-trailing"></div>
          </div>
        </div>
        <div class="form-outline form-item">
          <input type="Email" class="form-control active">
          <label class="form-label">Email</label>
          <div class="form-notch">
            <div class="form-notch-leading" style="width: 9px"></div>
            <div class="form-notch-middle" style="width: 40px"></div>
            <div class="form-notch-trailing"></div>
          </div>
        </div>
        <div class="form-outline form-item">
          <input class="form-control active">
          <label class="form-label">Имя Пользователя</label>
          <div class="form-notch">
            <div class="form-notch-leading" style="width: 9px"></div>
            <div class="form-notch-middle" style="width: 120px"></div>
            <div class="form-notch-trailing"></div>
          </div>
        </div>
        <MDBBtn color="primary" size="lg" class="save">Сохранить</MDBBtn>
      </MDBCard>
    </div>
  </div>
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
