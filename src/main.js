import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import { createRouter, createWebHistory } from "vue-router";
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

const app = createApp(App);

export const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes: [
    { path: "/", component: ImageList },
    { path: "/upload", component: UploadForm },
    { path: "/oauth2/callback", component: AuthHandler },
  ],
});

app.use(store);
app.use(router);
app.mount("#app");
