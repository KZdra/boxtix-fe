import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";
import { apiService } from "@/utils/apiService";

interface EventDetail {
  id: number;
  organizer_id: number;
  title: string;
  banner: string;
  banner_name: string;
  description: string;
  start_date: string;
  location: string;
  slug: string;
  event_organizer: string;
  banner_url: string;
}
interface Ticket {
  id: number;
  event_id: number;
  event_name: string;
  id_category: number;
  ticket_name: string;
  code: string;
  status: string;
  price: string;
  stock: number;
}
export const useDetailStore = defineStore("detailStore", () => {
  const eventDetails = ref<EventDetail|any>(null);
  const tickets = ref<Ticket[] | []>([
  ]);
  const fetchDetailData = async (slug: string | string[]) => {
    try {
      // Fetch event details
      const response = await apiService.apiGet(`/api/event/${slug}`);
      eventDetails.value = response.data.data;
  
      // Pastikan eventDetails udah ada dan punya event_id
      if (eventDetails.value && eventDetails.value.id) {
        const r2 = await apiService.apiGet("/api/ticket/own",{
          event_id: eventDetails.value.id
        }
        );  
        tickets.value = r2.data.data;
      } else {
        console.warn("Event ID not found in eventDetails");
      }
    } catch (error) {
      console.error("Gagal fetch event atau ticket:", error);
    }
  };
  
  const startingPrice = computed(() => {
    const prices = tickets.value
      .filter((t) => t.status === "on_sale")
      .map((t) => parseFloat(t.price));
    return Math.min(...prices);
  });
  return { eventDetails, tickets, startingPrice, fetchDetailData };
});
