<template>
  <section :class="['py-10', backgroundColor, { 'px-40 max-md:px-5': true }]">
    <h2 class="mb-6 text-lg font-semibold" :class="titleColor">
      {{ title }}
    </h2>
    <div
      class="grid gap-6 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]"
    >
      <EventCard
        v-for="event in events"
        :key="event.title"
        :event="event"
        @click="handleEventClick(event)"
      />
    </div>
    <button
      v-if="showViewMore"
      class="px-8 py-2.5 mt-6 text-sm font-medium text-indigo-700 bg-white rounded-lg border border-indigo-700 border-solid"
    >
      Lihat lainnya
    </button>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import EventCard from "./EventCard.vue";

defineProps<{
  title: string;
  events: any;
  backgroundColor?: string;
  titleColor?: string;
  showViewMore?: boolean;
}>();

const router = useRouter();

const handleEventClick = (event: any) => {
  router.push(
    `/eventdetails/${event.title.replace(/\s+/g, "-").toLowerCase()}`
  );
};
</script>


