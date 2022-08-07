<script setup lang="ts">
import { defineAsyncComponent, onMounted, reactive, ref, watch } from 'vue';
import useSearch from '@/composables/useSearch';
import useThrottlingRequest from '@/composables/useThrottlingRequest';
import { useRoute, useRouter } from 'vue-router';
const TheCatalog = defineAsyncComponent(
  () => import('@/components/blocks/TheCatalog.vue'),
);

const list = ref({});
const searchName = ref('');

const route = useRoute();
const router = useRouter();

const { search, loading, errorSearch } = useSearch();
const { throttleRequest } = useThrottlingRequest();

const onSearchAnime = async () => {
  const { name: querySearch = '' } = route.query;
  list.value = await search(querySearch as string);
};

watch(searchName, () => {
  throttleRequest(onSearchAnime);
  router.replace({ query: { ...route.query, name: searchName.value } });
});

onMounted(async () => {
  await onSearchAnime();
});
</script>

<template>
  <div>
    <label for="searchbar">Find an anime:</label>
    <input type="text" v-model="searchName" id="searchbar" />
    <button @click="onSearchAnime">Go!</button>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-if="Object.keys(errorSearch).length">
          {{ errorSearch.message }}
        </div>
        <div v-else>
          <TheCatalog :items="list.data" class="my-4" />
        </div>
      </div>
    </div>
  </div>
</template>
