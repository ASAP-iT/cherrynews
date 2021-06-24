<template>
  <div class="main">
    <h1>Cherry News</h1>
    <p class="note note-danger">
      <strong>Внимание:</strong> Статьи в этом разделе не проходят модерацию. Они были опубликованы другими пользователями нашего
      сайта и могут содержать неприемлимый контент
    </p>
    <div class="row grid" style="padding-top: 32px;width: 100%;margin-left: 0;margin-right: 0;">
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <div class="w-100"></div>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <div class="w-100"></div>

      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <div class="w-100"></div>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <div class="w-100"></div>

      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <div class="w-100"></div>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <div class="w-100"></div>

      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <div class="w-100"></div>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <PostPreview></PostPreview>
      <div class="w-100"></div>
    </div>
  </div>
</template>

<script>
import {
  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn,
  MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem
} from "mdb-vue-ui-kit";
import PostPreview from "./PostPreview.vue";

export default {
  name: 'Home',
  components: {
    PostPreview,
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
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
  background-color: #eee;
}

html {
  background-color: #eee;
}

.row {
  padding-left: 56px;
  padding-right: 56px;
}

.cell {
  text-align: left;
  margin-left: 8px;
  margin-right: 8px;
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
