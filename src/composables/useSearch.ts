import { reactive, ref } from 'vue';
///const axios: AxiosInstance = inject('axios') as AxiosInstance;
import axios from '@/plugins/axios';

export function useSearch() {
  const loading = ref(false);
  const errorSearch = ref({});

  async function search(query: string) {
    let anime = reactive({});
    loading.value = true;
      try {
        ({ data: anime } = await axios.get(`/anime?q=${query}`));
      } catch (error: any) {
        errorSearch.value = error.response.data;
      }
    console.log(anime);
    loading.value = false;
    return anime;
  }
  return { search, loading, errorSearch };
}

export default useSearch;
