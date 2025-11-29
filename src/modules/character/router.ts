export const characterRoutes = [
  {
    path: "character",
    component: () => import("@/modules/character/pages/index.vue"),
    children: [
      {
        path: "",
        name: "character-info",
        component: () => import("@/modules/character/pages/info/index.vue"),
      },
      {
        path: "property",
        name: "character-property",
        component: () => import("@/modules/character/pages/property/index.vue"),
      },
      {
        path: "skills",
        name: "character-skills",
        component: () => import("@/modules/character/pages/skills/index.vue"),
      },
    ],
  },
];
