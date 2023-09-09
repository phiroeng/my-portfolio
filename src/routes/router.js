import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/layouts/Dashboard.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
