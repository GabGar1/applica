const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/Alimentos", component: () => import("pages/Alimentos.vue") },
      { path: "/PETS", component: () => import("pages/PETS.vue") },
      {
        path: "/ProdutosLimpeza",
        component: () => import("pages/ProdutosLimpeza.vue"),
      },
      { path: "/SelfCare", component: () => import("pages/SelfCare.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/GabApp.vue"),
  },
];

export default routes;
