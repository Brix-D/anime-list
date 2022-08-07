<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import USwitch from '@/components/ui/USwitch.vue';
import useSearch from '@/composables/useSearch';
import useThrottlingRequest from '@/composables/useThrottlingRequest';
import useDarkTheme from '@/composables/useDarkTheme';
import { useRoute, useRouter } from 'vue-router';

const list = ref({});
const searchName = ref('');

const route = useRoute();
const router = useRouter();

const { search, loading, errorSearch } = useSearch();
const { throttleRequest } = useThrottlingRequest();
const { isDark, toggleTheme } = useDarkTheme();

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
    <div class="m-10">
      <USwitch
        :value="isDark"
        @input="toggleTheme"
        color="text-asphalt dark:text-air"
        colorful
        label="test"
      />
    </div>
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
