<template>
    <aside class="p-6 bg-white rounded-lg shadow-sm">
      <h2 class="mb-5 text-xl font-semibold text-neutral-900">Detail Harga</h2>
  
      <div class="flex justify-between mb-2.5">
        <span class="text-base text-neutral-600">Total Harga Tiket</span>
        <span class="text-base text-neutral-600"
          >Rp{{ props.ticketPrice.toLocaleString() }}</span
        >
      </div>
  
      <div class="flex justify-between">
        <span class="text-base text-neutral-600">Biaya Platform</span>
        <span class="text-base text-neutral-600">Rp0</span>
      </div>
  
      <div
        class="flex justify-between items-center py-4 mt-5 border-t border-gray-200"
      >
        <span class="text-base font-semibold text-neutral-900">Total Bayar</span>
        <span class="text-xl font-semibold text-neutral-900"
          >Rp{{ props.ticketPrice.toLocaleString() }}</span
        >
      </div>
  
      <div class="mt-5">
        <div class="flex gap-2.5 items-start mb-2.5">
          <input type="checkbox" v-model="termsAccepted" class="mt-1" />
          <div>
            <p class="text-sm text-neutral-600">
              Saya setuju dengan
              <a href="#" class="text-blue-700">Syarat dan Ketentuan</a>
            </p>
            <p class="text-sm text-neutral-600">
              yang berlaku di Boxtix<span class="text-red-500">*</span>
            </p>
          </div>
        </div>
  
        <div class="flex gap-2.5 items-start">
          <input type="checkbox" v-model="privacyAccepted" class="mt-1" />
          <div>
            <p class="text-sm text-neutral-600">
              Saya setuju dengan
              <a href="#" class="text-blue-700">Pemrosesan Data Pribadi</a>
            </p>
            <p class="text-sm text-neutral-600">
              yang berlaku di Boxtix<span class="text-red-500">*</span>
            </p>
          </div>
        </div>
  
        <p v-if="showError" class="mt-2.5 text-sm text-red-500">
          Syarat &amp; Ketentuan dan Pemrosesan Data Pribadi harus disetujui
        </p>
      </div>
  
      <button
        @click="handlePayment"
        class="mt-5 w-full text-base font-medium text-white bg-blue-700 rounded-lg h-[55px]"
        :disabled="!canProceed"
      >
        Bayar Tiket
      </button>
    </aside>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from "vue";
  
  const props = defineProps<{
    ticketPrice: number;
  }>();
  
  const termsAccepted = ref(false);
  const privacyAccepted = ref(false);
  const showError = ref(false);
  
  const canProceed = computed(() => termsAccepted.value && privacyAccepted.value);
  
  const emit = defineEmits<{
    (e: "payment"): void;
  }>();
  
  const handlePayment = () => {
    if (canProceed.value) {
      emit("payment");
    } else {
      showError.value = true;
    }
  };
  </script>
  