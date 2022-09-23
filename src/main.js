import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import BackendIndex from "./components/Index.vue";
import { auth, onAuthStateChanged } from "../firebase-init.js";

import AuthLogin from "./components/Auth/Login.vue";
import AuthRegister from "./components/Auth/Register.vue";

import QuestionHome from "./components/Question/Home.vue";
import QuestionCreate from "./components/Question/Create.vue";
import QuestionEdit from "./components/Question/Edit.vue";

const routes = [
  { path: "/", component: BackendIndex },
  { path: "/auth/login", component: AuthLogin },
  { path: "/auth/register", component: AuthRegister },
  { path: "/questions", component: QuestionHome },
  { path: "/question/create", component: QuestionCreate },
  { path: "/question/edit/:id", component: QuestionEdit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  let isAuthenticated = await getAuthState();

  if (
    to.path !== "/auth/login" &&
    to.path !== "/auth/register" &&
    !isAuthenticated
  ) {
    // redirect the user to the login page
    return { path: "/auth/login" };
  }
});

async function getAuthState() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            uid: user.uid,
            email: user.email,
          })
        );
        resolve(true);
      } else {
        localStorage.removeItem("user");
        resolve(false);
      }
    });
  });
}

const app = createApp(App);

app.use(router);

app.mount("#app");
