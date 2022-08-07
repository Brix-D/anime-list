export interface Anime {
  mal_id: number;
  title: string;
  episodes: number;
  status: string;
  synopsis: string;
  background?: string;
  genres?: Array<object>;
  image: string;
}

export default Anime;
