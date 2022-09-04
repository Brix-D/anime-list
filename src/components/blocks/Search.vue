<template>
    <div>
        <label for="searchbar">Find an anime:</label>
        <input type="text" v-model="searchName" id="searchbar" />
        <button @click="onSearchAnime">Go!</button>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useThrottlingRequest from '@/composables/useThrottlingRequest';
import useCatalogStore from '@/stores/catalog';
const searchName = ref('');

const route = useRoute();
const router = useRouter();
const { throttleRequest } = useThrottlingRequest();
const catalogStore = useCatalogStore();

const onSearchAnime = async () => {
  const { name: querySearch = '' } = route.query;
  await catalogStore.search(querySearch as string);
};

watch(searchName, () => {
  throttleRequest(onSearchAnime);
  router.replace({ query: { ...route.query, name: searchName.value } });
});
</script>

<style scoped>

</style>