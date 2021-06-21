<template>
  <MDBNavbar expand="lg" light bg="white" container>
    <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
    <MDBNavbarNav collapse="navbarExample01" class="mb-2 mb-lg-0">
      <MDBNavbarItem to="#" active>
        Home
      </MDBNavbarItem>
      <MDBNavbarItem to="/account">
        Account
      </MDBNavbarItem>
      <MDBNavbarItem to="/about">
        About
      </MDBNavbarItem>
    </MDBNavbarNav>
  </MDBNavbar>

  <div class="main" style="width: 100%;text-align: center;padding-top: 64px">
    <h1>Cherry News</h1>
    <p class="note note-danger">
      <strong>Внимание:</strong> Статьи в этом разделе не проходят модерацию. Они были опубликованы другими пользователями нашего
      сайта и могут содержать неприемлимый контент
    </p>
    <div class="row" style="padding-top: 32px;width: 100%;margin-left: 0;margin-right: 0;">
      <div class="col cell">
        <h3>Название статьи</h3>
        <p>Каткое описание статьи буквально в пару строк чтобы можно было понять что ты будешь читать далее</p>
        <MDBBtn outline="primary">Читать далее</MDBBtn>
      </div>

      <div class="col cell">
        <h3>Название статьи</h3>
        <p>Каткое описание статьи буквально в пару строк чтобы можно было понять что ты будешь читать далее</p>
        <MDBBtn outline="primary">Читать далее</MDBBtn>
      </div>

      <div class="col cell">
        <h3>Название статьи</h3>
        <p>Каткое описание статьи буквально в пару строк чтобы можно было понять что ты будешь читать далее</p>
        <MDBBtn outline="primary">Читать далее</MDBBtn>
      </div>
      <div class="w-100"></div>
      <div class="col cell">
        <h3>Название статьи</h3>
        <p>Каткое описание статьи буквально в пару строк чтобы можно было понять что ты будешь читать далее</p>
        <MDBBtn outline="primary">Читать далее</MDBBtn>
      </div>

      <div class="col cell">
        <h3>Название статьи</h3>
        <p>Каткое описание статьи буквально в пару строк чтобы можно было понять что ты будешь читать далее</p>
        <MDBBtn outline="primary">Читать далее</MDBBtn>
      </div>

      <div class="col cell">
        <h3>Название статьи</h3>
        <p>Каткое описание статьи буквально в пару строк чтобы можно было понять что ты будешь читать далее</p>
        <MDBBtn outline="primary">Читать далее</MDBBtn>
      </div>
    </div>
  </div>
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
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

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
