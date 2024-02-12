import { createRouter, createWebHistory } from "vue-router";

import AppHomePage from "./pages/AppHomePage.vue";
import AppShop from "./pages/AppShop.vue";
import EventList from "./pages/EventList.vue";
import EventDetail from "./pages/EventDetail.vue";
import TagList from "./pages/TagList.vue";
import TagDetail from "./pages/TagDetail.vue";

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
    // events
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
    // tags
    {
      path: "/tags",
      name: "Tags",
      component: TagList,
    },
    {
      path: "/tags/:id",
      name: "Tag-detail",
      component: TagDetail,
      props: true,
    },
  ],
});

export { router };
