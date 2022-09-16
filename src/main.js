import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import BackendIndex from "./components/Index.vue";
import QuestionHome from "./components/Question/Home.vue";
import QuestionCreate from "./components/Question/Create.vue";
import QuestionEdit from "./components/Question/Edit.vue";

const routes = [
  { path: "/", component: BackendIndex },
  { path: "/questions", component: QuestionHome },
  { path: "/question/create", component: QuestionCreate },
  { path: "/question/edit/:id", component: QuestionEdit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
