<template>
  <article
    class="overflow-hidden bg-white rounded-2xl shadow-[0_4px_8px_rgba(30,44,106,0.1)] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
    @click="$emit('click')"
  >
    <img
      :src="event.imageUrl"
      :alt="event.title"
      class="object-cover w-full h-[134px]"
    />
    <div class="p-5">
      <h3
        class="mb-4 text-sm font-medium text-neutral-900"
        @click="$emit('click')"
      >
        {{ event.title }}
      </h3>
      <p class="mb-4 text-sm text-neutral-400">{{ event.date }}</p>
      <p class="mb-4 text-sm text-neutral-400">{{ event.location }}</p>
      <p
        class="pt-4 text-base font-semibold text-black border-t border-solid border-t-blue-100"
      >
        {{ event.price }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">

defineProps<{
  event: any;
}>();

defineEmits(["click"]);
</script>
