import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { characterRoutes } from "@/modules/character/router";
import DefaultLayout from "@/layouts/default.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: DefaultLayout,
    children: [...characterRoutes],
    redirect(to) {
      return { name: "character-info" };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
