<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;700&family=Roboto:wght@400;500;700&family=ABeeZee&display=swap"
      rel="stylesheet"
    />

    <Header />
    <main class="w-full">
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
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import ImageCarousel from "./ImageCarousel.vue";
import EventSection from "./EventSection.vue";
import HowToBuySection from "./HowToBuySection.vue";
import Footer from "./Footer.vue";
import type { Event } from "./types";

const recommendedEvents: Event[] = [
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
