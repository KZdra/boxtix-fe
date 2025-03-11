<template>
    <div class="w-[720px] max-md:w-full">
      <nav class="border-b border-zinc-200">
        <div class="flex">
          <button
            class="py-4 text-sm text-center uppercase border-4 border-blue-700 text-neutral-900 w-[360px]"
          >
            Deskripsi
          </button>
          <button
            class="py-4 text-sm text-center uppercase text-neutral-400 w-[360px]"
          >
            Tiket
          </button>
        </div>
      </nav>
      <article class="mt-10">
        <div
          v-for="(paragraph, index) in description"
          :key="index"
          class="mb-5 text-base text-neutral-600"
        >
          {{ paragraph }}
        </div>
  
        <div class="flex gap-2 items-center mb-5">
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
      </article>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    description: string[];
    requirements: string[];
  }>();
  </script>
  