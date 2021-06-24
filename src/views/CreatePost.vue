<template>
  <div id="editor" class="row d-md-grid justify-content-center">
    <MDBCard id="text-editor" class="col-lg-4" style="width: 600px">
      <MDBCardBody style="max-width: 1000px;">
        <textarea rows="20" :value="input" @input="update"></textarea>
      </MDBCardBody>
    </MDBCard>
    <PostCard id="preview" style="display: inline" :tags="tags" :html="compiledMarkdown"></PostCard>
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
            let content = line.slice(1, line.length - 1)
            this.tags = content.split(" ")
          } else {
            this.tags = []
            start += marked(line);
          }
        } else {
          start += marked(line);
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
  /*padding: 0 20px;*/
}

#editor {
  padding: 0;
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

#text-editor {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
}

#preview {
  max-width: 1000px;
/*  margin-top: 32px;*/
/*  margin-right: 32px;*/
}
</style>
