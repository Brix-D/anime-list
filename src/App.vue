<script setup lang="ts">
import useDarkTheme from '@/composables/useDarkTheme';
import { onMounted, defineAsyncComponent } from 'vue';
const TheHeader = defineAsyncComponent(
  () => import('@/components/blocks/TheHeader.vue'),
);
const { setTheme, userTheme } = useDarkTheme();

onMounted(() => {
  setTheme(userTheme.value);
});
</script>

<template>
  <div class="dark:bg-night dark:text-air min-h-screen">
    <div class="bg-cream dark:bg-asphalt">
      <TheHeader class="max-w-screen-2xl mx-auto px-4" />
    </div>
    <!--    bg-cream dark:bg-asphalt-->
    <main class="max-w-screen-2xl mx-auto px-4">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
