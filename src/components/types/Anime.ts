import type AnimeGenre from "./AnimeGenre";

export interface Anime {
  mal_id: number;
  title: string;
  episodes: number;
  status: string;
  synopsis: string;
  background?: string;
  genres?: Array<AnimeGenre>;
  images: AnimeImages;
  year?: number;
  url: string;
}

export interface AnimeImages {
  webp?: string;
  jpg?: string;
}

export default Anime;
