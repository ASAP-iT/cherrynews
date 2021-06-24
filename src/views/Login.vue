<template>
  <div class="main">
    <h1>Вход</h1>
    <div class="wrapper">
      <div class="row grid" @keydown.enter.exact="userLogin()" style="padding-top: 32px;width: 100%;margin-left: 0;margin-right: 0">
        <MDBCard class="profile-card" style="display: table; margin: 0 auto;">
          <transition name="bounce">
            <p v-if="showAlert" class="alert alert-dismissible fade show alert-danger">
              <strong>Внимание:</strong>
              {{ alertText }}
              <button @click="() => { this.showAlert = false }" type="button" class="btn-close" data-mdb-dismiss="alert"></button>
            </p>
          </transition>
          <div class="form-outline form-item">
            <input type="email" v-model="email" class="form-control active">
            <label class="form-label">Email или Имя пользователя</label>
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px"></div>
              <div class="form-notch-middle" style="width: 180px"></div>
              <div class="form-notch-trailing"></div>
            </div>
          </div>
          <div class="form-outline form-item">
            <input type="password" v-model="password" class="form-control active">
            <label class="form-label">Пароль</label>
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px"></div>
              <div class="form-notch-middle" style="width: 50px"></div>
              <div class="form-notch-trailing"></div>
            </div>
          </div>
          <MDBBtn :disabled="isLoading" color="primary" size="lg" class="save" @click="userLogin()">
            <MDBSpinner tag="span" size="sm" v-if="isLoading"/>
            Войти в аккаунт
          </MDBBtn>
        </MDBCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import { MDCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";

export default {
  name: 'Login',
  components: {
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
    MDCol,
  },
  methods: {
    userLogin() {
      this.isLoading = true
      const params = new URLSearchParams();
      params.append("username", this.email);
      params.append("password", this.password);
      this.login(params)
        .then((result) => {
          console.log(result)
          this.setLoggedIn(true)
          this.$router.push("/")
        })
        .catch((error) => {
          console.log(error)
          this.alertText = error.response.data
          this.showAlert = true
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    ...mapActions(['login']),
    ...mapMutations(['setLoggedIn']),
  },
  data() {
    return {
      full_name: "",
      email: "",
      nickname: "",
      password: "",
      passwordRepeat: "",
      isLoading: false,
      showAlert: false,
      alertText: "",
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

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
