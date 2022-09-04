<template>
    <div class="flex gap-x-4 w-1/3">
        <input type="text"
            v-model="searchName"
            id="searchbar"
            placeholder="Search..."
            autocomplete="off"
            class="flex-grow px-3 py-1 border-2 border-asphalt/[.4] dark:border-cream/[.4] focus:outline-0 focus:border-blue-400 dark:focus:border-blue-400 text-asphalt bg-cream rounded"
        />
        <div class="flex px-4 bg-asphalt dark:bg-cream justify-center h-9 rounded hover:shadow-md-all-light dark:shadow-cream shadow-asphalt">
            <button @click="onSearchAnime" class="text-cream dark:text-asphalt font-medium">Go!</button>
        </div>
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