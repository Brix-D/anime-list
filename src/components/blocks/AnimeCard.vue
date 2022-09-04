<template>
  <article
    class="card flex flex-col flex-grow p-4 border dark:border-cream/[.1] border-asphalt/[.1] bg-cream/[.6] dark:bg-asphalt/[.6] rounded-2xl shadow-md-all shadow-asphalt/[.1] dark:shadow-cream/[.1]"
  >
    <div
      class="card__picture overflow-hidden flex justify-center items-center xl:h-72 h-52"
    >
      <picture class="w-full h-full block mx-auto">
        <source :srcset="props.images.webp" />
        <img
          :src="props.images.jpg"
          :alt="props.title"
          class="object-cover object-center h-full mx-auto"
        />
      </picture>
    </div>
    <h2 class="mt-4 font-semibold text-asphalt dark:text-cream xl:text-lg">
      {{ props.title }}
    </h2>
    <div class="card__genres xl:flex block flex-wrap justify-between">
      <p class="flex flex-wrap gap-x-1 mt-1 text-sm">
        <span v-for="(genre, index) in limitedGenres" :key="genre.mal_id">
          {{ genre.name }}
          <span v-if="index !== limitedGenres.length - 1"> / </span>
        </span>
      </p>
      <p v-if="!!props.year" class="font-medium">{{ props.year }}</p>
    </div>
    <div class="card__actions pt-6 mt-auto">
      <a
        :href="props.url"
        target="_blank"
        class="flex px-4 bg-asphalt dark:bg-cream justify-center h-9 rounded hover:shadow-md-all-light dark:shadow-cream shadow-asphalt"
      >
        <button class="text-cream dark:text-asphalt font-medium">
          More info
        </button>
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type AnimeGenre from "@/components/types/AnimeGenre";
import type { AnimeImages } from '@/components/types/Anime';

interface Anime {
  mal_id: number;
  title: string;
  episodes?: number;
  status: string;
  synopsis: string;
  background?: string;
  genres?: Array<AnimeGenre>;
  images: AnimeImages;
  year?: number;
  url: string;
}


const props = defineProps<Anime>();

const LIMIT_SHOW_GENRES = 2;

const limitedGenres = computed(() => props.genres?.slice(0, LIMIT_SHOW_GENRES) ?? []);
</script>

<style scoped>
.card {
  /*box-shadow: 0 0 8px 4px rgba(248, 248, 248, 0.1);*/
}
.card__picture {
  /* height: 300px; */
}
.card__genres {
}
</style>
