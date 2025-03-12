<template>
  <MainLayout>
    <template #default>
      <div class="w-full">
        <ImageCarousel />
        <EventSection title="Rekomendasi Event" :events="recommendedEvents" />
        <EventSection
          title="Event Terdekat"
          :events="upcomingEvents"
          backgroundColor="bg-sky-800"
          titleColor="text-white"
          :showViewMore="true"
        />
        <HowToBuySection />
      </div>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/components/layouts/MainLayout.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import EventSection from "@/components/EventSection.vue";
import HowToBuySection from "@/components/HowToBuySection.vue";

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
];

const upcomingEvents = [...recommendedEvents];
</script>
