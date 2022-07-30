<script setup lang="ts">
import { inject, onMounted, reactive } from 'vue';
import type { AxiosInstance } from 'axios';
const axios: AxiosInstance = inject('axios') as AxiosInstance;

let anime = reactive({});

onMounted(async () => {
  ({ data: anime } = await axios.get('/anime?q=Steins'));
  console.log(anime);
});
</script>

<template>
  <div></div>
</template>
