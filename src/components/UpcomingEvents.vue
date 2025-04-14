<template>
  <section class="py-10 px-40 max-md:px-5 bg-boxblue">
    <h2 class="mb-6 text-lg font-semibold text-white">Daftar Event</h2>
    <div class="flex flex-wrap gap-2 w-full">
      <h2 class="text-white font-bold text-2xl" v-if="events.length == 0">Event Tidak Ada</h2>
      <EventCard
        v-else
        v-for="event in events"
        :key="event.id"
        :event="event"
        @click="handleEventClick(event)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import EventCard from "./EventCard.vue";

defineProps<{ events: any[] }>();

const router = useRouter();
const handleEventClick = (event: any) => {
  router.push(`/event/${event.slug.toLowerCase()}`);
};
</script>

<style scoped>
/* Gaya keseluruhan */
.event-swiper {
  padding-bottom: 40px; /* Agar pagination tidak terlalu mepet */
}

/* Kartu Event */
.event-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.event-card:hover {
  transform: translateY(-5px);
}

/* Navigasi Swiper */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: #4f46e5;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

:deep(.swiper-button-prev)::after,
:deep(.swiper-button-next)::after {
  font-size: 18px;
  font-weight: bold;
}

/* Pagination */
:deep(.swiper-pagination-bullet) {
  background: #4f46e5;
  width: 10px;
  height: 10px;
  opacity: 0.7;
  transition: opacity 0.3s;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  width: 14px;
  height: 14px;
}
</style>
