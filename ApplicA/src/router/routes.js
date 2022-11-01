const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/cliente", component: () => import("pages/PagCliente.vue") },
      { path: "/pagcons", component: () => import("pages/PagCons.vue") },
      {
        path: "/cadastrocasaacolhimento",
        component: () => import("pages/PagCons.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
