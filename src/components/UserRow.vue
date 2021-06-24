<template>
  <tr>
    <th scope="row">{{ i }}</th>
    <td>{{ name }}</td>
    <td>{{ email }}</td>
    <td>{{ type }}</td>
    <td>
      <button type="button" class="btn btn-danger btn-sm px-3" @click="banAction()">
        <MDBSpinner tag="span" size="sm" v-if="isLoadingBan"/>
        Ban User
      </button>
      <button type="button" class="btn btn-warning btn-sm px-3">
        Make Mod
      </button>
    </td>
  </tr>
</template>

<script>
import { MDBSpinner } from "mdb-vue-ui-kit";

export default {
  name: "UserRow",
  components: {
    MDBSpinner
  },
  props: {
    i: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: "UNKNOWN NAME"
    },
    email: {
      type: String,
      default: "UNKNOWN EMAIL"
    },
    type: {
      type: String,
      default: "UNKNOWN TYPE"
    },
    userType: {
      type: Number,
      default: 0
    },
    banAction: {
      type: Function,
      default: () => {}
    },
    makeModAction: {
      type: Function,
      default: () => {}
    },
    isLoadingBan: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
