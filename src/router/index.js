import { createRouter, createWebHistory } from "vue-router";
import Preview from "../views/MainPreview.vue";
import NotFound from "../views/HomeDark.vue";

const routes = [
  {
    path: "/preview",
    name: "Preview",
    component: Preview,
    meta: {
      title: "Preview ||    Mahmoud Al-Saidi",
    },
  },
  {
    path: "/home-dark",
    name: "HomeDark",
    component: () => import("../views/HomeDark.vue"),
    meta: {
      title: "Home Dark || Mahmoud Al-Saidi  ",
    },
  },
  
  {
    path: "/:catchAll(.*)",
    component: NotFound,
    meta: {
      title: "Mahmoud Al-Saidi",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
  window.scrollTo(0, 0);
});

export default router;
