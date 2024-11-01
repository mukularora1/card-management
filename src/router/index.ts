// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CardPage from "../pages/CardPage.vue";
import Home from "../pages/Home.vue";
import SettingPage from "../pages/SettingPage.vue";
import TransactionsPage from "../pages/TransactionsPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/card", name: "Card", component: CardPage },
  { path: "/transactions", name: "Transactions", component: TransactionsPage },
  { path: "/settings", name: "Settings", component: SettingPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
