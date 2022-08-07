import { reactive, ref } from 'vue';
///const axios: AxiosInstance = inject('axios') as AxiosInstance;
import axios from '@/plugins/axios';
import type { Anime } from '@/components/types/Anime';
interface Response {
  data: Array<Anime>;
  pagination: object;
}
export function useSearch() {
  const loading = ref(true);
  const errorSearch = ref({});

  async function search(query: string) {
    const anime = ref({} as Response);
    loading.value = true;
    try {
      const { data: response } = await axios.get(`/anime?q=${query}`);
      anime.value.data = response.data.map((item: any) => ({
        ...item,
        image: item.images?.webp?.image_url,
      }));
    } catch (error: any) {
      errorSearch.value = error.response.data;
    }
    console.log(anime.value);
    loading.value = false;
    return anime.value;
  }
  return { search, loading, errorSearch };
}

export default useSearch;
