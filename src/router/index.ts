import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { dashboardRoutes } from "@/modules/dashboard/router";
import DefaultLayout from "@/layouts/default.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: DefaultLayout,
    children: [...dashboardRoutes],
    redirect(to) {
      return { name: "dashboard-info" };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
