<template>
  <div class="main">
    <h1>Название статьи</h1>

    <div class="wrapper">
      <div class="row" style="padding-top: 32px;width: 100%;margin-left: 0;margin-right: 0">
        <MDBCard class="mb-3 custom" style="max-width: 1000px; display: table; margin: 10px auto;">
          <MDBCardImg top src="https://mdbootstrap.com/img/new/slides/041.jpg" alt="..."/>
          <MDBCardBody>
            <h5 style="text-align: left; color: gray">Автор</h5>

            <p id="content" style="text-align: justify;margin-top: 32px;margin-bottom: 32px">

            </p>

            <div style="width: 100%;text-align: right">
              <div style="margin-right: 16px;display: inline">
                <div class="tag">#asdfasdfasd</div>
                <div class="tag">#asdfasdfasd</div>
                <div class="tag">#asdfasdfasd</div>
                <div class="tag">#asdfasdfasd</div>
                <div class="tag">#asdfasdfasd</div>
                <div class="tag">#asdfasdfasd</div>
              </div>
              <h6 style="color: gray; display: inline">
                Дата
              </h6>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>

      <h1 style="margin-top: 30px">Похожие статьи:</h1>

      <div class="row grid" style="padding-top: 32px;width: 100%;margin-left: 0;margin-right: 0;">
        <MDBCard class="col cell">
          <MDBCardBody>
            <MDBCardTitle>Название статьи</MDBCardTitle>
            <MDBCardText>
              Каткое описание статьи буквально в пару строк чтобы можно было понять что ты будешь читать далее
            </MDBCardText>
            <MDBBtn outline="primary">Читать далее</MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard class="col cell">
          <MDBCardBody>
            <MDBCardTitle>Название статьи</MDBCardTitle>
            <MDBCardText>
              Каткое описание статьи буквально в пару строк чтобы можно было понять что ты будешь читать далее
            </MDBCardText>
            <MDBBtn outline="primary">Читать далее</MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard class="col cell">
          <MDBCardBody>
            <MDBCardTitle>Название статьи</MDBCardTitle>
            <MDBCardText>
              Каткое описание статьи буквально в пару строк чтобы можно было понять что ты будешь читать далее
            </MDBCardText>
            <MDBBtn outline="primary">Читать далее</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <div class="w-100"></div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import { mapActions } from 'vuex';
import { MDCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";
import router from "../router";

export default {
  name: 'App',
  components: {
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
    MDCol,
  },
  mounted() {
    this.getArticle(1)
    .then((content) => {
      let lines = content.split("\n");
      let element = document.getElementById('content');
      lines.forEach(line => {
        console.log(line)
        element.innerHTML += marked(line);
      })
    })
  },
  methods: {
    ...mapActions(['getArticle'])
  },
  data() {
    return {}
  }
}
</script>

<style>
.tag {
  display: inline;
  padding: 8px;
  background-color: lightgray;
  border-radius: 4px;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.tag:hover {
  background-color: lightblue;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
