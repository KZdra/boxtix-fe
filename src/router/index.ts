import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/components/MainLayout.vue";
import EventDetailsPage from "@/components/EventDetailsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainLayout,
    },
    {
      path: "/eventdetails/:title",
      name: "eventdetailspage",
      component: EventDetailsPage,
      props: true,
    },
  ],
});

export default router;
