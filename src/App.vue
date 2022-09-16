<script>
export default {};
</script>

<template>
  <div class="max-w-5xl mx-auto p-12">
    <h1
      class="
        text-center text-2xl
        bg-slate-300
        rounded
        py-2
        px-4
        text-slate-700
        flex
        justify-between
        items-center
      "
    >
      <router-link to="/" class="hover:text-slate-800"
        >Backend Management System</router-link
      >
      <router-link to="/questions" class="text-xl hover:text-slate-800"
        >Questions</router-link
      >
    </h1>

    <router-view></router-view>
  </div>
</template>