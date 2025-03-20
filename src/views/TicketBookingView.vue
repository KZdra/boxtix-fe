<template>
    <MainLayout>
        <main class="flex flex-col bg-white min-h-screen">
      <div
        class="flex gap-10 px-52 py-32 max-md:flex-col max-md:px-6 max-sm:px-4 max-sm:py-16"
      >
        <div class="flex-1">
          <h2 class="mb-5 text-xl font-semibold text-blue-950">
            Detail Pemesanan
          </h2>
          <BookingDetails :event="eventDetails" />
  
          <div class="mt-10">
            <h2 class="mb-5 text-xl font-semibold text-blue-950">
              Detail Pemesan
            </h2>
            <div class="p-6 bg-white rounded-lg border-gray-200 border-[0.8px]">
              <BookingForm @submit="handleFormSubmit" />
            </div>
          </div>
        </div>
  
        <div class="w-[383px] max-md:w-full">
          <PriceSummary
            :ticket-price="eventDetails.price"
            @payment="handlePayment"
          />
        </div>
      </div>
    </main>
    </MainLayout>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import MainLayout from "@/components/layouts/MainLayout.vue";
  import BookingDetails from "@/components/BookingDetails.vue";
  import BookingForm from "@/components/BookingForm.vue";
  import PriceSummary from "@/components/PriceSummary.vue";
  
  const eventDetails = ref<any>({
    title: "Cendana Air Festival 2025",
    date: "04 May 2025 - 04 May 2025",
    time: "06:00 - 12:00 WIB",
    location: "Dicentang",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/458156e68716129cfbc463509f09b15af1bd77cc",
    price: 399000,
  });
  
  const handleFormSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
  };
  
  const handlePayment = () => {
    console.log("Processing payment...");
  };
  </script>
  