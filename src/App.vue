<script setup lang="ts">
import { onMounted } from 'vue';
import useDarkTheme from '@/composables/useDarkTheme';
const { getTheme, getUserPreference, setTheme, userTheme, toggleTheme } = useDarkTheme();

onMounted(() => {
  const initUserTheme = getTheme() || getUserPreference();
  setTheme(initUserTheme);
});
</script>

<template>
  <div class="dark:bg-neutral-900 dark:text-blue-50 px-4">
    <header>
      <div>
        <nav></nav>
        <h2 class="dark:text-blue-50 text-black">
          Current Theme {{ userTheme }}
        </h2>
        <button @click="toggleTheme">Change Theme</button>
      </div>
    </header>
    <main class="max-w-screen-2xl mx-auto dark:bg-gray-800">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
