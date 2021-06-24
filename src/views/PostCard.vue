<template>
  <div style="padding-top: 32px;max-width: 1000px;margin: 0 auto;">
    <MDBCard class="mb-3 custom" style="max-width: 1000px; display: table; margin: 10px auto;">
      <MDBCardBody style="min-width: 700px;max-width: 1000px">
        <h5 style="text-align: left; color: gray">Автор</h5>

        <p v-html="html" style="text-align: justify;margin-top: 32px;margin-bottom: 32px">

        </p>

        <div style="width: 100%;text-align: right">
          <div style="margin-right: 16px;display: inline">
            <template v-for="(tag, idx) in tags" :key="idx">
              <div class="tag">#{{ tag }}</div>
            </template>
          </div>
          <h6 style="color: gray; display: inline">
            Дата
          </h6>
        </div>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>

<script>
import { MDCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
  MDBSpinner, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";

export default {
  name: 'PostCard',
  props: {
    html: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: [],
    }
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
