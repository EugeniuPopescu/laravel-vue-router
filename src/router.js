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
      name: "Home",
      component: AppHomePage,
    },
    {
      path: "/shop",
      name: "Shop",
      component: AppShop,
    },
    {
      path: "/events",
      name: "Events",
      component: EventList,
    },
    {
      path: "/events/:id",
      name: "Event-detail",
      component: EventDetail,
      props: true,
    },
  ],
});

export { router };
