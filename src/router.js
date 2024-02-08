import { createRouter, createWebHistory } from "vue-router";

import AppHomePage from "./pages/AppHomePage.vue";
import AppShop from "./pages/AppShop.vue";
import EventList from "./pages/EventList.vue";
import EventDetail from "./pages/EventDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHomePage,
    },
    {
      path: "/shop",
      name: "shop",
      component: AppShop,
    },
    {
      path: "/events",
      name: "events",
      component: EventList,
    },
    {
      path: "/events/:id",
      name: "event",
      component: EventDetail,
    },
  ],
});

export { router };
