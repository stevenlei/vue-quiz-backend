<script>
import { db } from "../../../firebase-init";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default {
  data() {
    return {
      question: "",
      answers: "",
    };
  },
  methods: {
    async fetchQuestion() {
      const id = this.$route.params.id;

      const docRef = doc(db, "questions", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.question = docSnap.data().question;
        this.answers = docSnap
          .data()
          .answers.map((answer) => answer.text)
          .join("\n");
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    async updateQuestion() {
      const id = this.$route.params.id;
      const answers = this.answers.split("\n").map((answer, index) => {
        return {
          text: answer,
          isCorrect: index === 0,
        };
      });

      const docRef = doc(db, "questions", id);
      await updateDoc(docRef, {
        question: this.question,
        answers: answers,
      });
      console.log("Document updated with ID: ", docRef.id);

      this.$router.push("/questions");
    },
  },
  async mounted() {
    await this.fetchQuestion();
  },
};
</script>

<template>
  <h1 class="text-xl mx-4 my-8 text-slate-800">
    <span>Question - Edit</span>
  </h1>

  <ul class="m-4 border-t">
    <li class="flex items-center py-2 border-b">
      <label for="question" class="w-32 text-slate-500">Question</label>
      <input
        type="text"
        id="question"
        v-model="question"
        class="border rounded px-2 py-1 block flex-1"
        placeholder="Question"
      />
    </li>
    <li class="flex py-2 border-b">
      <label for="answers" class="w-32 text-slate-500">Answers</label>
      <textarea
        id="answers"
        v-model="answers"
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
        @click="updateQuestion"
      >
        Update
      </button>
    </li>
  </ul>
</template>