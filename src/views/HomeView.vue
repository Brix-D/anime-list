<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import useSearch from '@/composables/useSearch';

const list = ref({});
const searchName = ref('');
const throttlingRequestId = ref(0);
const TIMEOUT_REQUEST = 600;

function throttleRequest(request: CallableFunction) {
  clearTimeout(throttlingRequestId.value);
  throttlingRequestId.value = setTimeout(request, TIMEOUT_REQUEST);
}
const { search, loading, errorSearch } = useSearch();

const onSearchAnime = async () => {
  list.value = await search(searchName.value);
};

watch(searchName, () => throttleRequest(onSearchAnime));

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
          <pre>{{ list.data }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
