<script setup lang="ts">
import MainLayout from "@/components/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <section
      class="w-full min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4"
    >
      <div class="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-start">
        <!-- Info Kontak -->
        <div
          v-motion
          :initial="{ opacity: 0, y: -50 }"
          :enter="{ opacity: 1, y: 0 }"
          trasition="{ type: 'spring', stiffness: 100 }"
        >
          <h2 class="text-2xl font-bold mb-6 text-gray-800">Hubungi Kami</h2>
          <div class="space-y-4 text-gray-600">
            <div class="flex items-start gap-3">
              <span class="text-2xl text-purple-800"> 🏠 </span>
              <div>
                <strong class="text-black">Box-Tix HQ</strong><br />
                JL.Jakarta<br />
                RT001/RW003<br />
                Desa/Kelurahan SariTahu,<br />
                Kec. TahuGoreng, Kab. SiaGoreng,<br />
                Provinsi Daerah Istimewa Jakarta, 66666
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-2xl text-purple-800">📞</span>
              <div>
                <strong class="text-black">+62 821-3767-6220</strong><br />
                Mon to Fri 9am – 9pm
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-2xl text-purple-800">✉️</span>
              <div>
                <strong class="text-black">info@boxtix.co.id</strong><br />
                Kirim pesan kami kapan saja!
              </div>
            </div>
          </div>
        </div>

        <!-- Form Kontak -->
        <div
          v-motion
          :initial="{ opacity: 0, y: -50 }"
          :enter="{ opacity: 1, y: 0 }"
          trasition="{ type: 'spring', stiffness: 100 }"
        >
          <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nama lengkap"
              class="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="email"
              placeholder="Alamat email"
              class="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              placeholder="Subjek"
              class="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600 md:col-span-2"
            />
            <textarea
              placeholder="Isi pesan"
              rows="4"
              class="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600 md:col-span-2"
            ></textarea>
            <button
              type="submit"
              class="bg-indigo-700 text-white font-semibold py-3 rounded-md hover:bg-indigo-800 transition md:col-span-2"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
