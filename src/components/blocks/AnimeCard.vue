<template>
  <article>{{ props.title }}</article>
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
  image: string;
}

const props = defineProps<Anime>();
</script>

<style scoped></style>
