<template>
  <MDBCard class="col-lg-3 mx-2 my-2">
    <MDBCardBody>
      <MDBCardTitle>{{ title }}</MDBCardTitle>
      <MDBCardText>
        {{ desc }}
      </MDBCardText>
      <MDBBtn outline="primary" @click="$router.push('/post/' + id.toString())">Читать статью</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</template>

<script>
import { MDCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";

export default {
  name: 'PostPreview',
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: "UNKNOWN TITLE"
    },
    desc: {
      type: String,
      default: "UNKNOWN DESCRIPTION"
    },
  },
  components: {
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
    MDCol,
  },
  data() {
    return {}
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
