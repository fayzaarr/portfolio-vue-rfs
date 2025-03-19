import { createRouter, createWebHashHistory } from "vue-router";
import HomeViewPage from "@/views/HomePageView.vue";
import ContactViewPage from "@/views/ContactViewPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomeViewPage },
  { path: "/contact", name: "Contact", component: ContactViewPage },
];

const router = createRouter({
  history: createWebHashHistory(), // Gunakan Hash Mode agar GitHub Pages support
  routes,
});

export default router;
