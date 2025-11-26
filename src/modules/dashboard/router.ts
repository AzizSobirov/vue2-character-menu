export const dashboardRoutes = [
  {
    path: "dashboard",
    component: () => import("@/modules/dashboard/pages/index.vue"),
    children: [
      {
        path: "",
        name: "dashboard-info",
        component: () => import("@/modules/dashboard/pages/info/index.vue"),
      },
      {
        path: "property",
        name: "dashboard-property",
        component: () => import("@/modules/dashboard/pages/property/index.vue"),
      },
      {
        path: "skills",
        name: "dashboard-skills",
        component: () => import("@/modules/dashboard/pages/skills/index.vue"),
      },
    ],
  },
];
