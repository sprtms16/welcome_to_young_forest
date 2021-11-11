import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/program",
    name: "Program",
    component: () => import("../views/Program.vue"),
  },
  {
    path: "/review",
    name: "Review",
    component: () => import("../views/Review.vue"),
  },
  {
    path: "/community",
    name: "Community",
    component: () => import("../views/Community.vue"),
  },
  {
    path: "/write",
    name: "Write",
    component: () => import("../views/Write.vue"),
  },
  {
    path: "/review/detail/:contentId",
    name: "Detail",
    component: () => import("../components/Detail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
