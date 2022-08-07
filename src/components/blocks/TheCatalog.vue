<template>
  <div class="">
    <div v-for="card in props.items" :key="card.mal_id">
      <!--      <pre>{{ card }}</pre>-->
      <AnimeCard v-bind="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type Anime from '@/components/types/Anime';
const AnimeCard = defineAsyncComponent(
  () => import('@/components/blocks/AnimeCard.vue'),
);
interface Props {
  items: Array<Anime>;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
