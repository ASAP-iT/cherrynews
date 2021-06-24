<template>
  <div class="main">
    <h1>Название статьи</h1>

    <div class="wrapper">
      <PostCard></PostCard>
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
import { MDCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
  MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";
import PostCard from "@/views/PostCard.vue";

export default {
  name: 'App',
  components: {
    PostCard,
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
    MDCol,
  },
  mounted() {
    if (this.$route.params.id == null) {
      this.$router.push("/")
      return
    }
    console.log(this.$route.params.id)
    this.getArticle(this.$route.params.id)
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
p {
  margin-bottom: 4px;
}
</style>
