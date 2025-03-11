<template>
  <div class="overflow-hidden relative w-full h-[500px]">
    <Carousel v-bind="carouselConfig" class="w-full h-full">
      <Slide v-for="(image, index) in images" :key="index">
        <img
          :src="image.url"
          :alt="image.altText"
          class="object-cover w-full h-full"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const images = [
  {
    url: "https://cdn.builder.io/api/v1/image/assets/TEMP/9be298ce42280d9f08fe5738ce7fe3d187ebbbff",
    altText: "Carousel Image 1",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets/TEMP/090ba78ff7f0c35bfb848371151a4984fba54d87",
    altText: "Carousel Image 2",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets/TEMP/509716078482ddaa6379d1367185b159ccccbf6b",
    altText: "Carousel Image 3",
  },
];

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 3000,
};

const currentSlide = ref(0);

const setSlide = (index: number) => {
  currentSlide.value = index;
};
</script>
