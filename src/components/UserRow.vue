<template>
  <tr>
    <th scope="row">{{ i }}</th>
    <td>{{ name }}</td>
    <td>{{ email }}</td>
    <td>{{ type }}</td>
    <td>
      <button v-if="userType > 0" type="button" class="btn btn-danger btn-sm px-3" @click="banAction()">
        <MDBSpinner tag="span" size="sm" v-if="isLoadingBan"/>
        Ban User
      </button>
      <button v-else type="button" class="btn btn-success btn-sm px-3" @click="banAction()">
        <MDBSpinner tag="span" size="sm" v-if="isLoadingBan"/>
        Unban User
      </button>
      <button v-if="userType > 1" type="button" class="btn btn-warning btn-sm px-3">
        <MDBSpinner tag="span" size="sm" v-if="isLoadingMod"/>
        Make Mod
      </button>
      <button v-else type="button" class="btn btn-danger btn-sm px-3">
        <MDBSpinner tag="span" size="sm" v-if="isLoadingMod"/>
        Make User
      </button>
    </td>
  </tr>
</template>

<script>
import {MDBSpinner} from "mdb-vue-ui-kit";
import {mapGetters} from 'vuex';

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
      default: () => {
      }
    },
    makeModAction: {
      type: Function,
      default: () => {
      }
    },
    isLoadingBan: {
      type: Boolean,
      default: false
    },
    isLoadingMod: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapGetters(['user'])
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
