<template>
  <MainLayout>
    <div class="w-full bg-white min-h-[screen]">
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
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import MainLayout from "@/components/layouts/MainLayout.vue";
import Breadcrumb from "@/components/BreadCrumb.vue";
import EventBanner from "@/components/EventBanner.vue";
import EventInfo from "@/components/EventInfo.vue";
import EventDescription from "@/components/EventDescription.vue";
import EventTicketSidebar from "@/components/EventTicketSidebar.vue";

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