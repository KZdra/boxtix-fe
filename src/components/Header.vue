<template>
  <header class="bg-white h-[74px] shadow-md">
    <nav
      class="flex justify-between items-center px-14 py-0 mx-auto my-0 h-full max-w-[1349px] max-md:px-5 max-md:py-0"
    >
      <!-- Logo -->
      <router-link to="/" class="p-2.5 cursor-pointer">
        <img
          src="/logo.png"
          alt="Box-Tix Logo"
          class="h-10 object-contain max-sm:h-8"
        />
      </router-link>

      <!-- Nav Menu -->
      <div class="flex gap-9 max-sm:hidden">
        <a href="/" class="p-2.5 text-lg text-boxblue cursor-pointer">Home</a>
        <a href="#" class="p-2.5 text-lg text-boxblue cursor-pointer">Event Creator</a>
        <a href="#" class="p-2.5 text-lg text-boxblue cursor-pointer">Hubungi Kami</a>
      </div>

      <!-- Buttons -->
      <div class="flex items-center gap-6">
        <button
          class="px-4 py-2.5 text-sm text-white bg-boxblue rounded cursor-pointer border-none"
        >
          Host Your Event
        </button>
        <!-- Search Icon Placeholder (optional) -->
        <!--
        <button
          class="flex items-center justify-center w-10 h-10 bg-violet-200 rounded-3xl"
        >
          <i class="text-lg text-boxblue ti ti-search"></i>
        </button>
        -->
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
