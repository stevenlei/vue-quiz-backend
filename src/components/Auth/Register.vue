<script>
import { auth, createUserWithEmailAndPassword } from "../../../firebase-init";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        this.$router.push("/auth/login");
      } catch (error) {
        this.error = error.message;
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <h1 class="text-xl mx-4 my-8 text-slate-800">
    <span>Backend - Register</span>
  </h1>

  <ul class="m-4 border-t">
    <li class="flex items-center py-2 border-b">
      <label for="email" class="w-32 text-slate-500">Email</label>
      <input
        type="text"
        id="email"
        class="border rounded px-2 py-1 block flex-1"
        placeholder="Email"
        v-model="email"
      />
    </li>
    <li class="flex items-center py-2 border-b">
      <label for="password" class="w-32 text-slate-500">Password</label>
      <input
        type="password"
        id="password"
        class="border rounded px-2 py-1 block flex-1"
        placeholder="Password"
        v-model="password"
      />
    </li>
    <li class="py-2 text-right">
      <p class="text-red-500 pb-4" v-if="error">{{ error }}</p>
      <button
        class="
          text-slate-600
          hover:text-slate-800
          bg-slate-200
          rounded
          hover:bg-slate-300
          px-3
          py-1
          text-lg
        "
        @click="register"
      >
        Register
      </button>
    </li>
  </ul>
</template>