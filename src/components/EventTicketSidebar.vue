<template>
    <aside class="w-[360px] max-md:w-full">
      <div class="p-6 mb-7 bg-white rounded-lg shadow-sm">
        <div class="pb-6 mb-6 border-b border-zinc-200">
          <div class="flex gap-6 items-start">
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.1414 25.8356L36.6045 22.7356C36.4819 22.0308 35.9295 21.4879 35.2271 21.3534C33.9366 21.1094 31.9782 20.3677 31.5877 18.1224C31.1996 15.8748 32.7937 14.5176 33.9271 13.8533C34.5449 13.4914 34.8818 12.7938 34.7592 12.089L34.2223 8.98897C34.0628 8.06515 33.183 7.44609 32.258 7.60562L17.7673 10.1163L5.24208 12.2866C4.31826 12.4473 3.69801 13.3259 3.85873 14.2497L4.39564 17.3498C4.51826 18.0558 5.07065 18.5986 5.77304 18.7308C7.06353 18.976 9.0219 19.7165 9.41119 21.9641C9.80048 24.2106 8.20641 25.5678 7.07306 26.2321C6.45519 26.5952 6.11828 27.2916 6.2409 27.9964L6.77782 31.0964C6.93734 32.0202 7.81712 32.6405 8.74094 32.481L35.758 27.7988C36.6819 27.6404 37.3021 26.7583 37.1414 25.8356Z"
                fill="#66CEE6"
              />
            </svg>
            <p class="text-sm text-neutral-600">
              Kamu belum memilih tiket. Silakan pilih lebih dulu di tab menu
              TIKET.
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2.5">
          <div class="flex justify-between items-center">
            <span class="text-base text-neutral-600">Harga mulai dari</span>
            <span class="text-lg font-medium text-neutral-900">{{
              startingPrice
            }}</span>
          </div>
          <button
            class="py-1.5 w-full text-base tracking-widest text-white bg-blue-700 rounded-lg"
          >
            Beli Tiket
          </button>
        </div>
      </div>
      <SocialShare />
    </aside>
  </template>
  
  <script setup lang="ts">
  import SocialShare from "./SocialShare.vue";
  
  defineProps<{
    startingPrice: string;
  }>();
  </script>
  