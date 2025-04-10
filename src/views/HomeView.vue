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
const recommendedEvents = [...homeStore.recommendedEvent];
const upcomingEvents = [...recommendedEvents];
</script>
