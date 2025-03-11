<template>
    <div class="p-6 bg-white rounded-2xl shadow-sm w-[360px] max-md:w-full">
      <h1 class="mb-6 text-xl font-medium text-neutral-900">{{ title }}</h1>
      <div class="flex flex-col gap-1.5 mb-6">
        <div class="flex gap-2.5 items-center">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.83334 1.45743V1.33366C5.83334 0.965466 6.13182 0.666992 6.50001 0.666992C6.8682 0.666992 7.16667 0.965466 7.16667 1.33366V1.36435C8.05553 1.32299 8.9444 1.32299 9.83333 1.36435V1.33366C9.83333 0.965466 10.1318 0.666992 10.5 0.666992C10.8682 0.666992 11.1667 0.965466 11.1667 1.33366V1.45741C11.2616 1.46624 11.3566 1.47555 11.4515 1.48533C13.1995 1.66472 14.6147 2.97175 14.9574 4.66699H2.04303C2.38577 2.97175 3.80087 1.66472 5.54887 1.48533C5.64369 1.47556 5.73852 1.46626 5.83334 1.45743ZM1.90296 6.00033H15.0975C15.2123 7.65067 15.185 9.301 15.0155 10.9513C14.8222 12.8293 13.3289 14.3227 11.4515 14.5153C9.48353 14.718 7.5162 14.718 5.54887 14.5153C3.67154 14.3227 2.17821 12.8293 1.98487 10.9513C1.81542 9.301 1.78812 7.65067 1.90296 6.00033Z"
              fill="#ADB6C9"
            />
          </svg>
          <span class="text-base text-neutral-600">{{ date }}</span>
        </div>
        <div class="flex gap-2.5 items-center">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.49988 8.00003C1.49988 4.13381 4.63369 1 8.49988 1C12.3661 1 15.4999 4.13381 15.4999 8.00003C15.4999 11.8662 12.3661 15 8.49988 15C4.63369 15 1.49988 11.8662 1.49988 8.00003ZM10.9669 9.69089L9.16654 7.92356V4.5C9.16654 4.13181 8.86808 3.83333 8.49988 3.83333C8.13168 3.83333 7.83321 4.13181 7.83321 4.5V8.20336C7.83321 8.38229 7.90515 8.55369 8.03288 8.67909L10.0329 10.6424C10.2956 10.9004 10.7177 10.8964 10.9756 10.6337C11.2335 10.371 11.2297 9.94883 10.9669 9.69089Z"
              fill="#ADB6C9"
            />
          </svg>
          <span class="text-base text-neutral-600">{{ time }}</span>
        </div>
        <div class="flex gap-2.5 items-center">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.49996 1.3335C11.5033 1.3475 13.804 3.87283 13.8333 6.78283C13.8333 6.78283 13.8293 6.7835 13.8213 6.7835H13.8333C13.86 9.03683 12.1633 11.6242 8.95196 14.4968C8.82529 14.6102 8.66263 14.6668 8.49996 14.6668C8.33729 14.6668 8.17463 14.6102 8.04729 14.4962C4.83796 11.6242 3.14129 9.03683 3.16796 6.78416L3.16663 6.7835C3.19529 3.8735 5.49663 1.3475 8.49996 1.3335ZM8.49996 8.00016C9.41996 8.00016 10.1666 7.25416 10.1666 6.3335C10.1666 5.41283 9.41996 4.66683 8.49996 4.66683C7.57929 4.66683 6.83329 5.41283 6.83329 6.3335C6.83329 7.25416 7.57929 8.00016 8.49996 8.00016Z"
              fill="#ADB6C9"
            />
          </svg>
          <span class="text-base text-neutral-600">{{ location }}</span>
        </div>
      </div>
      <div class="pt-4 border-t border-[dashedpx] border-zinc-200">
        <div class="flex gap-3.5 items-center">
          <img
            :src="organizerImage"
            :alt="organizerName"
            class="w-[48px] h-[48px] rounded-[50px]"
          />
          <div>
            <span class="text-sm text-neutral-400">Diselenggarakan oleh</span>
            <span class="text-base text-neutral-900">{{ organizerName }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string;
    date: string;
    time: string;
    location: string;
    organizerImage: string;
    organizerName: string;
  }>();
  </script>
  