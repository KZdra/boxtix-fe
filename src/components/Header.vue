<template>
  <header class="bg-sky-800 h-[74px]">
    <nav
      class="flex justify-between items-center px-14 py-0 mx-auto my-0 h-full max-w-[1349px] max-md:px-5 max-md:py-0"
    >
      <h1 class="text-3xl font-bold text-white">BoxTix</h1>

      <div class="flex gap-9 max-sm:hidden">
        <a href="#" class="p-2.5 text-lg text-white cursor-pointer">Home</a>
        <a href="#" class="p-2.5 text-lg text-white cursor-pointer"
          >Event Creator</a
        >
        <a href="#" class="p-2.5 text-lg text-white cursor-pointer"
          >Hubungi Kami</a
        >
      </div>

      <div class="flex gap-6 items-center">
        <button
          class="px-4 py-2.5 text-sm text-blue-800 bg-white rounded cursor-pointer border-[none]"
        >
          Sign Up
        </button>
        <button
          class="flex justify-center items-center w-10 h-10 bg-violet-200 rounded-3xl"
        >
          <i class="ti ti-search text-lg text-white"></i>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
