<template>
    <div
      class="overflow-hidden bg-blue-50 rounded-lg h-[337px] w-[720px] max-md:w-full"
    >
      <img :src="bannerImage" :alt="altText" class="w-full h-full object-cover" />
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    bannerImage: string;
    altText: string;
  }>();
  </script>
  