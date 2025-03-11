<template>
  <div class="w-full bg-white min-h-[screen]">
    <Header />
    <main class="flex flex-col items-center">
      <div class="px-4 py-7 w-full max-w-[1120px]">
        <Breadcrumb />
        <div class="flex gap-10 max-md:flex-col">
          <EventBanner
            :banner-image="eventDetails.bannerImage"
            altText="Event Banner"
          />
          <EventInfo v-bind="eventDetails" />
        </div>
        <div class="flex gap-10 px-4 mt-10 max-w-[1120px] max-md:flex-col">
          <EventDescription
            :description="eventDetails.description"
            :requirements="eventDetails.requirements"
          />
          <EventTicketSidebar :starting-price="eventDetails.startingPrice" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Header from "./Header.vue";
import Breadcrumb from "./Breadcrumb.vue";
import EventBanner from "./EventBanner.vue";
import EventInfo from "./EventInfo.vue";
import EventDescription from "./EventDescription.vue";
import EventTicketSidebar from "./EventTicketSidebar.vue";
import Footer from "./Footer.vue";

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const route = useRoute();
const eventTitle = computed(() => route.params.title);

const eventDetails = ref<any>({
  title: "Cendana Air Festival 2025",
  date: "04 May - 04 May 2025",
  time: "06:00 - 12:00 WIB",
  location: "Dicentang",
  description: [
    "Tegal Funday Festival 20205 hadir dalam rangka memeriahkan peringatan hari jadi kota Tegal Tercinta.",
    "Event ini disiapkan khusus buat para penghobi event olahraga. Dijamin event bakalan seru banget, karena dikemas menarik, gabungan dari konsep event funrun, Funbike dan Funaerobic dijadikan satu kesatuan.",
    "Yuk jangan lupa ajak teman-teman dan saudara buat daftar event ini.",
  ],
  requirements: [
    "Event Terbuka Untuk Umum",
    "Konsep Event Fun Bukan Race atau Tidak Dilombakan",
    "syarat terpenting berakal",
  ],
  bannerImage:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/67d2a06518e1699927f07db6997b8d0ad1686ac3",
  organizerImage:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/82c5ce67ab0df8e0c4544feaa30395da7c147515",
  organizerName: "MIRACLE ORGANIZER",
  startingPrice: "Rp125.000",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;700&family=ABeeZee&display=swap");
</style>
