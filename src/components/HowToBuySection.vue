<template>
  <section
    class="px-20 py-12 m-10 bg-white rounded-3xl shadow-[0_10px_70px_rgba(0,0,0,0.07)]"
  >
    <h2 class="mb-4 text-4xl font-bold text-center text-neutral-900">
      Cara Beli Tiket
    </h2>
    <p class="mb-16 text-sm text-center text-neutral-400">
      Sekarang beli tiket online gak perlu ribet
    </p>

    <div
      class="grid gap-8 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]"
    >
      <div
        v-for="step in steps"
        :key="step.number"
        class="flex flex-col items-center text-center"
      >
        <div class="relative mb-5 rounded-full h-[110px] w-[110px]">
          <div v-html="step.icon"></div>
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
import type { Step } from "./types";

const steps: Step[] = [
  {
    number: 1,
    title: "Pilih Event",
    description: "Pilih event dan tipe tiket yang akan kamu beli.",
    icon: `<svg>...</svg>`, // Icon SVG content here
  },
  {
    number: 2,
    title: "Isi Data Diri",
    description: "Isi data diri kamu untuk melanjutkan pembelian tiket",
    icon: `<svg>...</svg>`, // Icon SVG content here
  },
  {
    number: 3,
    title: "Pembayaran",
    description: "Pilih tipe pembayaran yang telah kami sediakan.",
    icon: `<svg>...</svg>`, // Icon SVG content here
  },
  {
    number: 4,
    title: "Pembelian Selesai",
    description: "E-Tiket telah di kirimkan ke email & akun Tiket Event kamu.",
    icon: `<svg>...</svg>`, // Icon SVG content here
  },
];
</script>
