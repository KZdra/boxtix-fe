<template>
  <section class="px-5 py-12 m-0 bg-white rounded-3xl shadow-[0_10px_70px_rgba(0,0,0,0.07)]">
    <h2 class="mb-4 text-4xl font-bold text-center text-neutral-900">
      Cara Beli Tiket
    </h2>
    <p class="mb-16 text-sm text-center text-neutral-400">
      Sekarang beli tiket online gak perlu ribet
    </p>

    <div class="grid gap-8 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
      <div v-for="step in steps" :key="step.number" class="flex flex-col items-center text-center">
        <!-- Icon -->
        <div class="relative mb-5 rounded-full h-[110px] w-[110px] bg-sky-500 text-white flex justify-center items-center">
          <!-- Directly using FontAwesome class -->
          <i :class="step.icon" class="fa-3x"></i>
        </div>
        <div>
          <h3 class="mb-4 text-2xl font-bold text-neutral-900">
            {{ step.title }}
          </h3>
          <p class="text-sm text-neutral-400">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const steps = ref([
  {
    number: 1,
    title: "Pilih Event",
    description: "Pilih event dan tipe tiket yang akan kamu beli.",
    icon: "fas fa-ticket-alt", 
  },
  {
    number: 2,
    title: "Isi Data Diri",
    description: "Isi data diri kamu untuk melanjutkan pembelian tiket",
    icon: "fas fa-user", 
  },
  {
    number: 3,
    title: "Pembayaran",
    description: "Pilih tipe pembayaran yang telah kami sediakan.",
    icon: "fas fa-credit-card", 
  },
  {
    number: 4,
    title: "Pembelian Selesai",
    description: "E-Tiket telah di kirimkan ke email & akun Tiket Event kamu.",
    icon: "fas fa-check-circle",
  },
]);
</script>
