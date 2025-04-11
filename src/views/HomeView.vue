<template>
  <MainLayout>
    <template #default>
      <div class="w-full">
        <div class="px-3 rounded">
          <ImageCarousel />
        </div>
        <RecommendedEvents :events="recommendedEvents" v-loading="load" />
        <UpcomingEvents :events="recommendedEvents" v-loading="load" />
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
import { onMounted, ref,computed } from "vue";
import Swal from "sweetalert2";

const homeStore = useHomeStore();
const recommendedEvents = computed(()=>{
  return homeStore.recommendedEvent
});
const load = ref(false);
onMounted(async() => {
  try {
    load.value= true
    await homeStore.fetchHomeData()
  } catch (error) {
    Swal.fire({
            icon: "error",
            title: "Oops...",
            text : 'Gagal Fetch',
            footer: '<a href="#">Why do I have this issue?</a>'
          });
  } finally {
    load.value = false
  }
})
</script>
