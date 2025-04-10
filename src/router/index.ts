import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/event/:slug",
      name: "eventdetailsview",
      component: () => import("@/views/EventDetailsView.vue"),
      props: true,
    },
    // {
    //   path: "/ticketboking",
    //   name: "ticketbokingview",
    //   component: () => import("@/views/TicketBookingView.vue"),
    //   props: true,
    // },
  ],
});

export default router;
