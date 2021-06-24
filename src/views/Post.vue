<template>
  <div v-if="html !== null" class="main">
    <h1>{{ post.title }}</h1>

    <div class="wrapper">
      <PostCard :html="html"></PostCard>
      <h1 style="margin-top: 30px">Похожие статьи:</h1>

      <div class="row justify-content-center" style="padding-top: 32px;width: 100%;margin-left: 0;margin-right: 0;">
        <template v-for="(post, i) in this.posts" :key="i">
          <PostPreview :id="post.id" :title="post.title" :desc="post.content"></PostPreview>
        </template>
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
import PostPreview from "./PostPreview.vue";

export default {
  name: 'App',
  components: {
    PostPreview,
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
    .then((response) => {
      this.post = response.data;
      let lines = response.data.content.split("\n");
      let start = '<div>'
      lines.forEach(line => {
        start += marked(line);
      })
      start += '</div>'
      this.html = start
    })

    this.getPosts()
        .then((response) => {
          let items = response.data
          this.posts.push(items[Math.floor(Math.random()*items.length)])
          this.posts.push(items[Math.floor(Math.random()*items.length)])
          this.posts.push(items[Math.floor(Math.random()*items.length)])
        })
  },
  methods: {
    ...mapActions(['getArticle', 'getPosts'])
  },
  data() {
    return {
      html: null,
      posts: [],
      post: null
    }
  }
}
</script>

<style>
p {
  margin-bottom: 4px;
}
</style>
