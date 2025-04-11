import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { apiService } from "@/utils/apiService";
interface RecomendedEvent {
  id: number;
  organizer_id: number;
  title: string;
  banner: string;
  banner_name: string;
  description: string;
  start_date: string;
  location: string;
  slug: string;
  price: string;
  event_organizer: string;
  banner_url: string;
}
export const useHomeStore = defineStore("homeStore", () => {
  const recommendedEvent = ref<RecomendedEvent[] | []>([]);
  const fetchHomeData = async () => {
    try {
      // Fetch event details
      const response = await apiService.apiGet(`/api/newest/event`);
      recommendedEvent.value = response.data.data;
    } catch (error) {
      console.error("Gagal fetch event atau ticket:", error);
    }
  };

  // const doubleCount = computed(() => count * 2);
  // function increment() {
  //   count++;
  // }

  return { recommendedEvent, fetchHomeData };
});
