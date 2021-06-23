<template>
  <div>
    <h2>Editor</h2>
    <textarea id="editor" data-preview="#preview"></textarea>
    <MDBBtn color="primary" size="lg" class="save" @click="createPost()">
      Создать пост
    </MDBBtn>
  </div>
</template>

<script>
import {
  MDBBtn,
  MDBCard,
  MDBCardBody, MDBCardText, MDBCardTitle,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBSpinner, MDCol
} from "mdb-vue-ui-kit";

export default {
  name: "CreatePost",
  components: {
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
    MDCol,
  },
  methods: {
    createPost() {
      console.log(this.text)
    }
  },
  data() {
    return {
      text: "",
    }
  }
}
</script>

<style>
textarea {
  outline: none;
}
</style>
