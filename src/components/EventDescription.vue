<template>
  <div class="w-[720px] max-md:w-full">
    <nav class="border-b border-zinc-200">
      <div class="flex">
        <button
          class="py-4 text-sm text-center uppercase w-[360px] border-b-4 transition-all duration-300"
          :class="
            activeTab === 'description'
              ? 'border-blue-700 text-blue-700 bg-blue-100 font-semibold'
              : 'text-neutral-500 hover:text-neutral-700'
          "
          @click="activeTab = 'description'"
        >
          Deskripsi
        </button>
        <button
          class="py-4 text-sm text-center uppercase w-[360px] border-b-4 transition-all duration-300"
          :class="
            activeTab === 'ticket'
              ? 'border-blue-700 text-blue-700 bg-blue-100 font-semibold'
              : 'text-neutral-500 hover:text-neutral-700'
          "
          @click="activeTab = 'ticket'"
        >
          Tiket
        </button>
      </div>
    </nav>

    <article class="mt-10">
      <!-- Konten Deskripsi -->
      <div v-if="activeTab === 'description'">
        <div
          v-for="(paragraph, index) in description"
          :key="index"
          class="mb-5 text-base text-neutral-600"
        >
          {{ paragraph }}
        </div>

        <div class="flex items-center gap-2 mb-5">
          <div class="w-1 h-6 bg-blue-700 rounded-none"></div>
          <h2 class="text-lg text-neutral-900">Syarat & Ketentuan</h2>
        </div>

        <ul class="text-base text-neutral-600">
          <li
            v-for="(requirement, index) in requirements"
            :key="index"
            class="mb-5 last:mb-0"
          >
            {{ requirement }}
          </li>
        </ul>
      </div>

      <!-- Konten Tiket -->
      <div v-if="activeTab === 'ticket'">
        <!-- <p class="text-lg text-neutral-600"> -->
           <div class="w-[600px] max-md:w-full mx-auto">
    <div
      v-for="(ticket, index) in tickets"
      :key="index"
      class="relative p-5 mb-4 bg-white border border-gray-200 rounded-lg shadow-md"
    >
      <!-- Nama Ticket -->
      <h2 class="text-lg font-semibold text-gray-900">
        {{ ticket.name }}
      </h2>

      <!-- Detail Kelas -->
      <p class="text-sm text-gray-500">Kelas: {{ ticket.class }}</p>

      <!-- Tanggal Berakhir -->
      <p class="mt-1 text-sm text-blue-600">
        Berakhir {{ ticket.endDate }} {{ ticket.endTime }}
      </p>

      <!-- Harga & Status -->
      <div class="flex items-center justify-between mt-3">
        <p class="text-lg font-bold text-gray-900">
          {{ ticket.price }}
        </p>
        <span v-if="ticket.soldOut" class="font-semibold text-red-500">
          SOLD OUT
        </span>
        <div v-else class="flex items-center gap-2">
          <!-- <button
            class="flex items-center justify-center w-6 h-6 text-blue-500 border border-blue-500 rounded-full"
            @click="decreaseQuantity(index)"
          >
            −
          </button>
          <span class="font-medium text-gray-900">{{ ticket.quantity }}</span>
          <button
            class="flex items-center justify-center w-6 h-6 text-blue-500 border border-blue-500 rounded-full"
            @click="increaseQuantity(index)"
          >
            +
          </button> -->
          <button
          class="px-4 py-2.5 text-sm text-white bg-blue-700 rounded cursor-pointer border-[none]"
        >
          Beli Tiket
        </button>
        </div>
      </div>

      <!-- Handle Tombol Samping -->
      <div class="absolute top-1/2 -translate-y-1/2 left-[-10px] w-5 h-5 bg-white rounded-full border border-gray-300"></div>
      <div class="absolute top-1/2 -translate-y-1/2 right-[-10px] w-5 h-5 bg-white rounded-full border border-gray-300"></div>
    </div>
  </div>
        <!-- </p> -->
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  description: string[];
  requirements: string[];
}>();

const activeTab = ref<"description" | "ticket">("description");

const tickets = ref([
  {
    name: "EARLY BIRD TICKET",
    class: "3 - 14 Mar 2025...",
    endDate: "23 Feb 2025",
    endTime: "23:00 WIB",
    price: "Rp399.000",
    soldOut: true,
    quantity: 0,
  },
  {
    name: "PRESALE 1",
    class: "3 - 14 Mar 2025...",
    endDate: "28 Feb 2025",
    endTime: "23:00 WIB",
    price: "Rp500.000",
    soldOut: false,
    quantity: 0,
  },
]);

const increaseQuantity = (index: number) => {
  tickets.value[index].quantity++;
};

const decreaseQuantity = (index: number) => {
  if (tickets.value[index].quantity > 0) {
    tickets.value[index].quantity--;
  }
};
</script>
