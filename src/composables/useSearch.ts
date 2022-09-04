import { reactive, ref } from 'vue';
///const axios: AxiosInstance = inject('axios') as AxiosInstance;
import axios from '@/plugins/axios';
import type { SearchResponse } from '@/components/types/api/search';

export function useSearch() {
  const loading = ref(true);
  const errorSearch = ref({});

  async function search(query: string) {
    const anime = ref({} as SearchResponse);
    loading.value = true;
    try {
      const { data: response } = await axios.get(`/anime?q=${query}`);
      anime.value.data = response.data.map((item: any) => ({
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
    return anime.value;
  }
  return { search, loading, errorSearch };
}

export default useSearch;
