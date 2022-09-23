<script>
import { auth, signOut } from "../../firebase-init";

export default {
  data() {
    return {
      loggedInUser: {},
    };
  },
  mounted() {
    this.loggedInUser = JSON.parse(localStorage.getItem("user"));
  },
  methods: {
    async logout() {
      try {
        await signOut(auth);

        localStorage.removeItem("user");
        this.$router.push("/auth/login");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<template>
  <p class="text-center my-20 text-slate-800">
    This is the backend index page.
    <br /><br />
    You are logged in as {{ loggedInUser.email }}
    <button
      @click="logout"
      class="bg-slate-200 px-2 py-1 rounded hover:bg-slate-300"
    >
      Logout
    </button>
  </p>
</template>