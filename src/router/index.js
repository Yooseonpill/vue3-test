import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/movie",
    component: Movie,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
