<template>
  <div id="editor" class="row justify-content-center">
    <MDBCard class="mb-3 col-md-2 mx-2" style="width: 1000px; max-width: 90%; display: table; margin: 50px auto;">
      <MDBCardBody>
        <textarea rows="20" :value="input" @input="update"></textarea>
      </MDBCardBody>
    </MDBCard>
    <PostCard :tags="tags" class="col-md-2 mx-2 my-2" style="max-width: 50vw" :html="compiledMarkdown"></PostCard>
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
import marked from "marked"
import lodash from "lodash"
import PostCard from "@/views/PostCard";

export default {
  name: "CreatePost",
  components: {
    PostCard,
    MDBBtn,
    MDBSpinner,
    MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
    MDCol,
  },
  data() {
    return {
      input: '# hello',
      tags: []
    }
  },
  computed: {
    compiledMarkdown() {
      let start = '<div id="editor-content">'
      let lines = this.input.split("\n")
      lines.forEach((line, i) => {
        if (i === lines.length - 1) {
          if (line.startsWith("[") && line.endsWith("]")) {
            let content = line.slice(1, line.length - 2)
            this.tags = content.split(" ")
          }
        } else {
          start += marked(line, {sanitize: true});
        }
      })
      start += '</div>'
      return start
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 50)
  }

}
</script>

<style>
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
#editor post-card {
  display: inline-block;
  width: 49%;
  max-width: 1280px;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  /*background-color: #f6f6f6;*/
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
