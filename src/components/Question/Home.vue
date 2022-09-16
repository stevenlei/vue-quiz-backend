<script>
import { db } from "../../../firebase-init";
import { query, collection, doc, getDocs, deleteDoc } from "firebase/firestore";

export default {
  data() {
    return {
      questions: [],
    };
  },
  async mounted() {
    await this.readData();
  },
  methods: {
    async readData() {
      this.questions = [];
      const ref = query(collection(db, "questions"));
      try {
        const querySnapshot = await getDocs(ref);
        querySnapshot.forEach((doc) => {
          this.questions.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      } catch (e) {
        console.error(e);
      }
    },
    async deleteQuestion(id) {
      if (confirm("Are you sure you want to delete this question?")) {
        const docRef = doc(db, "questions", id);
        await deleteDoc(docRef);
        console.log("Document deleted with ID: ", docRef.id);

        // reload data from firebase
        await this.readData();
      }
    },
  },
};
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
    <li
      class="flex py-2 border-b"
      :key="question.id"
      v-for="question in questions"
    >
      <span class="mx-4 flex-1">{{ question.id }}</span>
      <span class="mx-4 flex-1">{{ question.question }}</span>
      <span class="mx-4 flex-1">
        <ul v-for="(answer, index) in question.answers" :key="index">
          <li :class="{ 'text-green-600': answer.isCorrect }">
            {{ answer.text }}
          </li>
        </ul>
      </span>
      <span class="mx-4 flex-1">
        <router-link
          class="text-slate-600 hover:text-slate-800"
          :to="`/question/edit/${question.id}`"
          >Edit</router-link
        >
        <button
          class="ml-4 text-slate-400 hover:text-red-600"
          @click="deleteQuestion(question.id)"
        >
          Delete
        </button>
      </span>
    </li>
  </ul>
</template>