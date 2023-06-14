import "./assets/main.css";
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import MovieLists from "./pages/MovieLists.vue";
import MovieDetails from "./pages/MovieDetails.vue";
import store from "./store/store";

const routes = [
  { path: "/", component: MovieLists },
  { path: "/:id/movie-details", component: MovieDetails },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).use(store).mount("#app");
