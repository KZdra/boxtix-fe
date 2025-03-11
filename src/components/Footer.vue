<template>
  <footer
    class="px-40 pt-16 pb-0 bg-sky-800 max-md:px-5 max-md:pt-16 max-md:pb-0"
  >
    <div
      class="grid gap-8 mb-8 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]"
    >
      <div v-for="section in footerSections" :key="section.title">
        <h3 class="mb-5 text-sm font-semibold text-white">
          {{ section.title }}
        </h3>
        <nav>
          <a
            v-for="link in section.links"
            :key="link"
            href="#"
            class="block mb-2 text-sm text-white cursor-pointer hover:text-gray-200"
          >
            {{ link }}
          </a>
        </nav>
      </div>
    </div>

    <div
      class="flex flex-col items-center px-0 py-8 border-t border-solid border-t-white"
    >
      <h2 class="mb-4 text-3xl font-bold text-white">BoxTix</h2>
      <div class="flex gap-4 mb-6">
        <a
          v-for="(icon, index) in socialIcons"
          :key="index"
          href="#"
          class="text-white hover:text-gray-200"
          v-html="icon"
        ></a>
      </div>
      <p class="text-sm text-white">Copyright © 2025</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { FooterSection } from "./types";

const footerSections: FooterSection[] = [
  {
    title: "Tentang",
    links: ["Tentang Kami", "Blogs"],
  },
  {
    title: "Kategori",
    links: ["Musik", "Olahraga", "Seminar", "Wisata"],
  },
  {
    title: "Informasi",
    links: ["Syarat & Ketentuan", "FAQ", "Tiket Gelang"],
  },
  {
    title: "Penyelenggara",
    links: ["Creator", "Biaya"],
  },
];

const socialIcons = [
  // Social media SVG icons here
];
</script>
