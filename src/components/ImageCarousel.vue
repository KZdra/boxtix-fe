<template>
<div class="overflow-hidden relative w-full p-2 h-[300px] md:h-[500px]">
  <Swiper
      :slidesPerView="1.2"
      :centeredSlides="true"
      :spaceBetween="15"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        0: { slidesPerView: 1.1 },
        768: { slidesPerView: 1.2 },
      }"
      :modules="[Autoplay, Pagination]"
      class="w-full h-full"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img
          :src="image.url"
          :alt="image.altText"
          class="object-contain w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
    <!-- Pagination placed below the carousel -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const images = [
  {
    url: "/carousel/1.png",
    altText: "Carousel Image 1",
  },
  {
    url: "/carousel/2.png",
    altText: "Carousel Image 2",
  },
  {
    url: "/carousel/3.png",
    altText: "Carousel Image 3",
  },
  {
    url: "/carousel/4.png",
    altText: "Carousel Image 4",
  },
];
</script>

<style scoped>
.swiper-pagination {
  position: absolute;
  bottom: 10px; /* Move it to the bottom */
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.swiper-pagination-bullet {
  background-color: white;
  width: 16px;
  height: 16px;
  margin: 0 5px;
  border-radius: 50%;
}

.swiper-pagination-bullet-active {
  background-color: #007bff;
}

.swiper-button-next,
.swiper-button-prev {
  display: none; /* Hides the navigation buttons */
}
</style>
