<script setup lang="ts">
import { onMounted } from 'vue';
import useDarkTheme from '@/composables/useDarkTheme';
const { setTheme, userTheme } = useDarkTheme();

onMounted(() => {
  setTheme(userTheme.value);
});
</script>

<template>
  <div class="dark:bg-night dark:text-air px-4 min-h-screen">
    <header>
      <div>
        <nav></nav>
        <!--        class="dark:text-cream text-asphalt"-->
<!--        <h2>Current Theme {{ userTheme }}</h2>-->
<!--        <button @click="toggleTheme">Change Theme</button>-->
      </div>
    </header>
    <!--    bg-cream dark:bg-asphalt-->
    <main class="max-w-screen-2xl mx-auto">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
