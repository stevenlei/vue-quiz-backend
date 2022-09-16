<script>
export default {};
</script>

<template>
  <h1 class="text-xl mx-4 my-8 text-slate-800">
    <span>Question - Create</span>
  </h1>

  <ul class="m-4 border-t">
    <li class="flex items-center py-2 border-b">
      <label for="question" class="w-32 text-slate-500">Question</label>
      <input
        type="text"
        id="question"
        class="border rounded px-2 py-1 block flex-1"
        placeholder="Question"
      />
    </li>
    <li class="flex py-2 border-b">
      <label for="answers" class="w-32 text-slate-500">Answers</label>
      <textarea
        id="answers"
        type="text"
        class="border rounded px-2 py-1 block flex-1 h-40"
        placeholder="Answers line by line, first line is the correct answer"
      />
    </li>
    <li class="py-2 text-right">
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
      >
        Create
      </button>
    </li>
  </ul>
</template>