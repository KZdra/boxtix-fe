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
        <router-link to="/" class="p-2.5 text-lg text-boxblue cursor-pointer">Home</router-link>
        <router-link to="/eventcreator" class="p-2.5 text-lg text-boxblue cursor-pointer">Event Creator</router-link>
        <router-link to="/hubungikami" class="p-2.5 text-lg text-boxblue cursor-pointer">Hubungi Kami</router-link>
      </div>

      <!-- Buttons -->
      <div class="flex items-center gap-6">
        <router-link to="/eventcreator"
          class="px-4 py-2.5 text-sm text-white bg-boxblue rounded cursor-pointer border-none"
        >
          Host Your Event!
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
