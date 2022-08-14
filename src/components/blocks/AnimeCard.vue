<template>
  <article
    class="card p-4 border dark:border-cream/[.1] border-asphalt/[.1] bg-cream/[.6] dark:bg-asphalt/[.6] rounded-2xl shadow-md-all shadow-asphalt/[.1] dark:shadow-cream/[.1]"
  >
    <div
      class="card__picture overflow-hidden flex justify-center items-center xl:h-72 h-56"
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
    <h2>{{ props.title }}</h2>
  </article>
</template>

<script setup lang="ts">
interface Anime {
  mal_id: number;
  title: string;
  episodes?: number;
  status: string;
  synopsis: string;
  background?: string;
  genres?: Array<object>;
  images: AnimeImages;
}

interface AnimeImages {
  webp?: string;
  jpg?: string;
}

const props = defineProps<Anime>();
</script>

<style scoped>
.card {
  /*box-shadow: 0 0 8px 4px rgba(248, 248, 248, 0.1);*/
}
.card__picture {
  /* height: 300px; */
}
</style>
