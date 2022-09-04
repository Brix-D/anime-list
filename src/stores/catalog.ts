import { defineStore } from "pinia";
import { ref } from 'vue';
import axios from '@/plugins/axios';
import type SearchResponse from "@/components/types/api/search";

export const useCatalogStore = defineStore('catalog', () => {
    const list = ref({} as SearchResponse);
    const loading = ref(true);
    const errorSearch = ref({} as any);

    async function search(query: string) {
        loading.value = true;
        try {
          const { data: response } = await axios.get(`/anime?q=${query}`);
          list.value.data = response.data.map((item: any) => ({
            ...item,
            images: {
              webp: item.images?.webp?.image_url,
              jpg: item.images?.jpg?.image_url,
            },
          }));
        } catch (error: any) {
          errorSearch.value = error.response.data;
        }
        loading.value = false;
      }

    return { search, list, loading, errorSearch };
});

export default useCatalogStore;