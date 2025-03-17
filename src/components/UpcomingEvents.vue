<template>
    <section class="py-10 px-40 max-md:px-5 bg-sky-800">
      <h2 class="mb-6 text-lg font-semibold text-white">Event Terdekat</h2>
      
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="4"
        :space-between="20"
        :loop="true"
        :navigation="true"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000 }"
        class="w-full event-swiper"
      >
        <SwiperSlide v-for="event in events" :key="event.title">
          <div class="event-card">
            <EventCard :event="event" @click="handleEventClick(event)" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from "vue-router";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Pagination, Autoplay } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import EventCard from "./EventCard.vue";
  
  defineProps<{ events: any[] }>();
  
  const router = useRouter();
  const handleEventClick = (event: any) => {
    router.push(`/eventdetails/${event.title.replace(/\s+/g, "-").toLowerCase()}`);
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
  