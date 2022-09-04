import type { Anime } from '@/components/types/Anime';

export interface SearchResponse {
  data: Array<Anime>;
  pagination?: object;
}

export default SearchResponse;