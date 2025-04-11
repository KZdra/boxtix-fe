<template>
  <MainLayout>
    <div class="w-full bg-white min-h-[screen]" v-loading="loading">
      <main class="flex flex-col items-center">
        <div class="px-4 py-7 w-full max-w-[1120px]" v-if="event">
          <div class="flex gap-10 max-md:flex-col">
            <EventBanner
              :banner-image="event.banner_url"
              altText="Event Banner"
            />
            <EventInfo
              :date="formatDate(event.start_date)"
              :title="event.title"
              :location="event.location"
              :organizer-image="event.banner_url"
              :organizer-name="event.event_organizer"
            />
          </div>
          <div class="flex gap-10 px-4 mt-10 max-w-[1120px] max-md:flex-col">
            <EventDescription
              :description="event.description"
              :tickets="DetailStore.tickets"
              @handle-buy="addToCart"
              :is-present="isPresentCart"
            />
            <EventTicketSidebar
              :starting-price="DetailStore.startingPrice"
              :cartlist="cart"
              :payload="payLoad"
              v-model:name="userC.first_name"
              v-model:name2="userC.last_name"
              v-model:email="userC.email"
              v-model:phone="userC.phone"
              @submit-order="pay"
              @clearcart="clearCart"
            />
          </div>
        </div>
      </main>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MainLayout from "@/components/layouts/MainLayout.vue";
import EventBanner from "@/components/EventBanner.vue";
import EventInfo from "@/components/EventInfo.vue";
import EventDescription from "@/components/EventDescription.vue";
import EventTicketSidebar from "@/components/EventTicketSidebar.vue";
import Toastify from "toastify-js";
import { formatDate } from "@/utils/format";
import { useDetailStore } from "@/stores/detailStore";
import { apiService } from "@/utils/apiService";
import Swal from "sweetalert2";
const DetailStore = useDetailStore();
const route = useRoute();
onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const loading = ref(false);
const event = computed(() => DetailStore.eventDetails);
const cart = ref<any[]>([]);
const userC = ref({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
});
const payLoad =ref(false)
const pay = async () => {
  payLoad.value = true
  const body = {
    first_name: userC.value.first_name,
    last_name: userC.value.last_name,
    email: userC.value.email,
    phone: userC.value.phone,
    event_id: event.value.id,
    ticket_id: cart.value[0].id,
    category_id: cart.value[0].id_category,
  };
  await loadMidtransScript();
  const token = await apiService.apiPost("/api/pay", body);
  const snap = (window as any).snap;

  snap.pay(token.data.data, {
    onSuccess: (result: any) => {
      Swal.fire({
        icon: "success",
        title: "Pembayaran Berhasil! Silahkan Check E-Mail Anda!",
        showConfirmButton: false,
        timer: 1500,
      });
      payLoad.value = false
      setTimeout(()=>{
        (window as any).location.reload()
      },2000)
    },
    onPending: (result: any) => {
      console.log("Pending", result);
      payLoad.value = false

    },
    onError: (result: any) => {
      console.error("Error", result);
      payLoad.value = false

    },
    onClose: () => {
      console.log("Popup ditutup");
      payLoad.value = false

    },
  });
};
const addToCart = (index: number) => {
  const ticket = DetailStore.tickets[index];
  if (ticket) {
    cart.value.push(ticket);
    Toastify({
      text: `${ticket.ticket_name} ditambahkan ke cart`,
      duration: 2000,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
    }).showToast();
  } else {
    console.warn("Ticket tidak ditemukan di index:", index);
  }
};

const clearCart = (i: number) => {
  cart.value.splice(i, 1);
};
const isPresentCart = computed(() => {
  return cart.value.length > 0 ? true : false;
});

function loadMidtransScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).snap) return resolve();

    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", import.meta.env.VITE_CLIENT_KEY);
    script.type = "text/javascript";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Gagal load Snap Midtrans"));
    document.head.appendChild(script);
  });
}
onMounted(async () => {
  try {
    loading.value = true;
    await DetailStore.fetchDetailData(route.params.slug);
  } catch (error) {
  } finally {
    loading.value = false;
    cart.value = []; // Reset cart saat komponen dimount
  }
});
</script>
