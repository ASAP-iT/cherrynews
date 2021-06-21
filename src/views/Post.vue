<template>

  <MDBCard class="mb-3 custom" style="max-width: 1000px; display: table; margin: 10px auto;">
    <MDBCardImg top src="https://mdbootstrap.com/img/new/slides/041.jpg" alt="..."/>
    <MDBCardBody>
      <h1>Название статьи</h1>
      <h5 style="text-align: left; color: gray">Автор</h5>

      <h6>
        Какой-то текст статьи, которую вы прочтете и узнаете, что-то новое и полезное и ваша жизнь станет чуточку лучше.
        Вы начнете чувствовать прилив сил и знаний, и вам захочется двигаться, петь, плясать, веселиться и еще много,
        много, много чего.....
      </h6>
      <p style="text-align: left; color: gray">
        Дата
      </p>
    </MDBCardBody>
  </MDBCard>

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



</style>