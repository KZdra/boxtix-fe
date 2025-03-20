<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-neutral-600">
          Nama Depan<span class="text-rose-500">*</span>
        </label>
        <p class="text-sm text-neutral-400">
          Gunakan nama yang tertera di KTP/Paspor.
        </p>
        <input
          v-model="formData.firstName"
          type="text"
          required
          placeholder="Contoh: John"
          class="px-4 w-full rounded-lg border-gray-200 border-[0.8px] h-[49px]"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-neutral-600">
          Nama Belakang<span class="text-rose-500">*</span>
        </label>
        <input
          v-model="formData.lastName"
          type="text"
          required
          placeholder="Contoh: Doe"
          class="px-4 w-full rounded-lg border-gray-200 border-[0.8px] h-[49px]"
        />
      </div>
  
      <div class="flex flex-col gap-2">
        <label class="text-sm text-neutral-600">
          Nomor Ponsel<span class="text-rose-500">*</span>
        </label>
        <p class="text-sm text-neutral-400">Masukkan nomor ponsel aktif</p>
        <div>
          <input
            v-model="formData.phoneNumber"
            type="tel"
            required
            placeholder="Contoh: 628982xxxx"
            class=" px-4 rounded-lg border-gray-200 border-[0.8px] h-[49px] w-full"
          />
        </div>
      </div>
  
      <div class="flex flex-col gap-2">
        <label class="text-sm text-neutral-600">
          Email<span class="text-rose-500">*</span>
        </label>
        <p class="text-sm text-neutral-400">
          E-tiket akan dikirim ke email kamu.
        </p>
        <input
          v-model="formData.email"
          type="email"
          required
          placeholder="Contoh: example@mail.com"
          class="px-4 w-full rounded-lg border-gray-200 border-[0.8px] h-[49px]"
        />
      </div>
  
      <div class="flex gap-2.5 items-center p-4 mt-5 bg-yellow-50 rounded-lg">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 31.3105C28.368 31.3105 28.6667 31.0125 28.6667 30.6438V26.6439C28.6667 26.2752 28.368 25.9772 28 25.9772C27.632 25.9772 27.3333 26.2752 27.3333 26.6439V30.6438C27.3333 31.0125 27.632 31.3105 28 31.3105Z"
            fill="#CCA300"
          />
        </svg>
        <p class="text-base text-stone-500">Pastikan datamu sudah benar.</p>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const formData = ref<any>({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  
  const emit = defineEmits<{
    (e: "submit", data: any): void;
  }>();
  
  const handleSubmit = () => {
    emit("submit", formData.value);
  };
  </script>
  