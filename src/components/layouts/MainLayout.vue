<template>
  <div>
    <Header />
    <main class="w-full">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "../Header.vue";
import Footer from "../Footer.vue";
</script>
