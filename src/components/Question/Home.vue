<script>
export default {};
</script>

<template>
  <h1 class="flex justify-between text-xl mx-4 my-8 text-slate-800">
    <span>Question - Home</span>
    <router-link
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
      to="/question/create"
      >Create</router-link
    >
  </h1>

  <ul class="m-4">
    <li class="flex py-2 rounded bg-slate-200">
      <span class="mx-4 flex-1">Question ID</span>
      <span class="mx-4 flex-1">Question</span>
      <span class="mx-4 flex-1">Answers</span>
      <span class="mx-4 flex-1">Actions</span>
    </li>
    <li class="flex py-2 border-b">
      <span class="mx-4 flex-1">1</span>
      <span class="mx-4 flex-1">&lt;h1&gt;&lt;/h1&gt; 是什麼標籤？</span>
      <span class="mx-4 flex-1">
        <ul>
          <li class="text-green-600">標題</li>
          <li>段落</li>
          <li>連結</li>
          <li>清單</li>
        </ul>
      </span>
      <span class="mx-4 flex-1">
        <router-link
          class="text-slate-600 hover:text-slate-800"
          to="/question/edit/1"
          >Edit</router-link
        >
      </span>
    </li>
    <li class="flex py-2 border-b">
      <span class="mx-4 flex-1">1</span>
      <span class="mx-4 flex-1">&lt;h1&gt;&lt;/h1&gt; 是什麼標籤？</span>
      <span class="mx-4 flex-1">
        <ul>
          <li class="text-green-600">標題</li>
          <li>段落</li>
          <li>連結</li>
          <li>清單</li>
        </ul>
      </span>
      <span class="mx-4 flex-1">
        <router-link
          class="text-slate-600 hover:text-slate-800"
          to="/question/edit/1"
          >Edit</router-link
        >
      </span>
    </li>
    <li class="flex py-2 border-b">
      <span class="mx-4 flex-1">1</span>
      <span class="mx-4 flex-1">&lt;h1&gt;&lt;/h1&gt; 是什麼標籤？</span>
      <span class="mx-4 flex-1">
        <ul>
          <li class="text-green-600">標題</li>
          <li>段落</li>
          <li>連結</li>
          <li>清單</li>
        </ul>
      </span>
      <span class="mx-4 flex-1">
        <router-link
          class="text-slate-600 hover:text-slate-800"
          to="/question/edit/1"
          >Edit</router-link
        >
      </span>
    </li>
  </ul>
</template>