export interface Anime {
  mal_id: number;
  title: string;
  episodes: number;
  status: string;
  synopsis: string;
  background?: string;
  genres?: Array<object>;
  images: AnimeImages;
  year?: number;
  url: string;
}

export interface AnimeImages {
  webp?: string;
  jpg?: string;
}

export default Anime;
