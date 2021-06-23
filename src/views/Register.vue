<template>
  <div class="main">
    <h1>Регистрация</h1>
    <div class="wrapper">
      <div class="row grid" style="padding-top: 32px;width: 100%;margin-left: 0;margin-right: 0">
        <MDBCard class="profile-card" style="display: table; margin: 0 auto;">
          <transition name="bounce">
            <p v-if="showAlert" class="alert alert-dismissible fade show alert-danger">
              <strong>Внимание:</strong>
              {{ alertText }}
              <button @click="() => { this.showAlert = false }" type="button" class="btn-close" data-mdb-dismiss="alert"></button>
            </p>
          </transition>
          <div class="form-outline form-item">
            <input type="email" v-model="full_name" class="form-control active">
            <label class="form-label">Польное имя</label>
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px"></div>
              <div class="form-notch-middle" style="width: 80px"></div>
              <div class="form-notch-trailing"></div>
            </div>
          </div>
          <div class="form-outline form-item">
            <input v-model="nickname" class="form-control active">
            <label class="form-label">Имя пользователя</label>
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px"></div>
              <div class="form-notch-middle" style="width: 120px"></div>
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
            <input type="password" v-model="password" class="form-control active">
            <label class="form-label">Пароль</label>
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px"></div>
              <div class="form-notch-middle" style="width: 50px"></div>
              <div class="form-notch-trailing"></div>
            </div>
          </div>
          <div class="form-outline form-item">
            <input type="password" v-model="passwordRepeat" class="form-control active">
            <label class="form-label">Повторите Пароль</label>
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px"></div>
              <div class="form-notch-middle" style="width: 120px"></div>
              <div class="form-notch-trailing"></div>
            </div>
          </div>
          <MDBBtn :disabled="isLoading" color="primary" size="lg" class="save" @click="userRegister()">
            <MDBSpinner tag="span" size="sm" v-if="isLoading"/>
            Зарегистрироваться
          </MDBBtn>
        </MDBCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { MDCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";

export default {
  name: 'Register',
  components: {
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
    MDCol,
  },
  methods: {
    userRegister() {
      this.isLoading = true
      const data = {
        full_name: this.full_name,
        email: this.email,
        nickname: this.nickname,
        password: this.password,
      }
      this.register(data)
          .then((response) => {
            console.log(response.data.body)
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
    ...mapActions(['register'])
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
