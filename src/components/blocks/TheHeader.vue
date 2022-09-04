<template>
  <div>
    <header class="flex justify-between py-6 items-center">
      <h1 class="text-2xl">Anime Search</h1>
      <SearchBar v-if="!checkMobile()"/>
      <div class="">
        <USwitch
          :value="isDark"
          @input="toggleTheme"
          color="text-asphalt dark:text-air"
          colorful
          label="Dark theme"
          left
        />
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/blocks/Search.vue';
import USwitch from '@/components/ui/USwitch.vue';
import useDarkTheme from '@/composables/useDarkTheme';
import { checkMobile } from '@/utils';

const { isDark, toggleTheme } = useDarkTheme();
</script>

<style scoped></style>
