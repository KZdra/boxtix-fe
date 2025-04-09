<template>
  <MainLayout>
    <template #default>
      <div class="w-full">
        <div class="px-3 rounded">
          <ImageCarousel />
        </div>
        <RecommendedEvents :events="recommendedEvents" />
        <UpcomingEvents :events="upcomingEvents" />
        <HowToBuySection />
      </div>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/components/layouts/MainLayout.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import RecommendedEvents from "@/components/RecommendedEvents.vue";
import UpcomingEvents from "@/components/UpcomingEvents.vue";
import HowToBuySection from "@/components/HowToBuySection.vue";
import { useHomeStore } from "@/stores/homeStore.ts";

const homeStore = useHomeStore();

console.log(homeStore.recommendedEvents)
const recommendedEvents = [
  {
    title: "Deliwafa Fest Vol.5 | Ramadhan",
    date: "08 Mar 2025",
    location: "Surabaya",
    price: "Rp.65.000",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3e66e81c00b5f90acb921b84aae7a61cb60df54c",
  },
  {
    title: "SOUND WAVE FEST 2025",
    date: "16 May 2025",
    location: "Batu",
    price: "Rp.175.000",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c1a7a664129d2700e476e6a4da1184757af52c28",
  },
  {
    title: "Sayfest.Kabaret",
    date: "09 Aug 2025",
    location: "Kota Bandung",
    price: "Rp.55.000",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a5ccb049fbe2fbb9f3345ec388c93d602a34f04a",
  },
  {
    title: "Deliwafa Fest Vol.5 | Ramadhan",
    date: "08 Mar 2025",
    location: "Surabaya",
    price: "Rp.65.000",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3e66e81c00b5f90acb921b84aae7a61cb60df54c",
  },
  {
    title: "SOUND WAVE FEST 2025",
    date: "16 May 2025",
    location: "Batu",
    price: "Rp.175.000",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c1a7a664129d2700e476e6a4da1184757af52c28",
  },
];

const upcomingEvents = [...recommendedEvents];
</script>
