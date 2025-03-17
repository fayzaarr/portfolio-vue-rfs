import { createRouter, createWebHistory } from "vue-router";
import HomeViewPage from "@/views/HomePageView.vue";
import ContactViewPage from "@/views/ContactViewPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomeViewPage },
  { path: "/contact", name: "Contact", component: ContactViewPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
