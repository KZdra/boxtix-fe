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
        <div class="mb-5 text-base text-neutral-600">
          {{ description }}
        </div>

        <div class="flex items-center gap-2 mb-5">
          <div class="w-1 h-6 bg-blue-700 rounded-none"></div>
          <h2 class="text-lg text-neutral-900">Syarat & Ketentuan</h2>
        </div>

        <ul class="text-base text-neutral-600">
          <!-- <li
            v-for="(requirement, index) in requirements"
            :key="index"
            class="mb-5 last:mb-0"
          >
            {{ requirement }}
          </li> -->
          <li>
            Entry Pass yang valid adalah yang dibeli melalui BoxTix.co.id.
          </li>
          <li>Satu Entry Pass berlaku untuk satu orang.</li>
          <li>
            Panitia dan Promotor tidak bertanggung jawab/tidak ada penggantian
            kerugian atas pembelian tiket acara melalui
            calo/tempat/kanal/platform yang bukan mitra resmi penjualan tiket
            "Subculture Agression".
          </li>
          <li>
            Tiket yang hilang/dicuri tidak akan diganti atau diterbitkan ulang,
            meskipun Anda memiliki bukti pembelian. Tiket merupakan tanggung
            jawab masing-masing pemilik.
          </li>
          <li>
            Saya telah membaca dan memahami syarat dan ketentuan pembelian dan
            penggunaan Entry Pass di atas.
          </li>
          <li>
            Jika ada perubahan aturan promotor, akan segera diinformasikan
            melalui akun media sosial resmi promotor.
          </li>
          <li>
            Saya memberikan persetujuan untuk diikat secara hukum dengan syarat
            dan ketentuan tersebut.
          </li>
        </ul>
      </div>

      <!-- Konten Tiket -->
      <div v-if="activeTab === 'ticket'">
        <!-- <p class="text-lg text-neutral-600"> -->
        <div class="w-[600px] max-md:w-full mx-auto">
          <div
            v-for="(ticket, idx) in tickets"
            :key="ticket.id"
            class="relative p-5 mb-4 bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <!-- Nama Ticket -->
            <h2 class="text-lg font-semibold text-gray-900">
              {{ ticket.ticket_name }}
            </h2>
            <h2 class="text-sm font-semibold text-gray-500">
              Stok Tersedia: {{ ticket.stock }}
            </h2>

            <!-- Harga & Status -->
            <div class="flex items-center justify-between mt-3">
              <p class="text-lg font-bold text-gray-900">
                {{ formatRupiah(ticket.price) }}
              </p>
              <span
                v-if="ticket.status == 'sold_out'"
                class="font-semibold text-red-500"
              >
                SOLD OUT
              </span>
              <span
                v-if="ticket.status == 'comingsoon'"
                class="font-semibold text-gray-500"
              >
                Coming Soon!
              </span>
              <div v-else class="flex items-center gap-2">
                <button
                  class="px-4 py-2.5 text-sm text-white bg-blue-700 rounded cursor-pointer border-[none] disabled:opacity-50 disabled:cursor-not-allowed"
                  @click="handleClick(idx)"
                  :disabled="isPresent"
                >
                  Beli Tiket
                </button>
              </div>
            </div>

            <!-- Handle Tombol Samping -->
            <div
              class="absolute top-1/2 -translate-y-1/2 left-[-10px] w-5 h-5 bg-white rounded-full border border-gray-300"
            ></div>
            <div
              class="absolute top-1/2 -translate-y-1/2 right-[-10px] w-5 h-5 bg-white rounded-full border border-gray-300"
            ></div>
          </div>
        </div>
        <!-- </p> -->
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { formatRupiah } from "@/utils/format";
defineProps<{
  description?: string;
  tickets?: any[];
  isPresent?: boolean;
}>();
const emit = defineEmits(["handleBuy"]);
const activeTab = ref<"description" | "ticket">("description");
const handleClick = (idx: number) => {
  emit("handleBuy", idx); // contoh data
};
</script>
