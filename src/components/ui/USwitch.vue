<template>
  <div class="switch">
    <div class="switch__selection">
      <input
        type="checkbox"
        id="test"
        class="switch__input"
        v-model="checked"
      />
      <div class="switch__selection-ripple"></div>
      <div class="switch__track" ></div>
      <div
        class="switch__thumb"

        :class="[{ 'switch--checked': checked }]"
      ></div>
    </div>
    <label for="test" class="switch__label">{{ label }}</label>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['input']);

const checked = computed({
  get: () => props.value,
  set: (value) => {
    emit('input', value);
  },
});
</script>

<style scoped>
.switch {
  @apply cursor-pointer;
  @apply flex;
  @apply items-center;
  @apply w-min;
  @apply relative;
  @apply transition-all;
}
.switch__selection {
  @apply inline-flex;
  @apply flex-initial;
  @apply flex-shrink-0;
  @apply w-12;
  @apply h-6;
  @apply relative;
  @apply select-none;
  color: inherit;
  @apply transition-transform;
  @apply mr-2;
}
.switch__input {
  @apply absolute;
  @apply opacity-0;
  @apply cursor-pointer;
  @apply select-none;
  @apply w-full;
  @apply h-full;
}
.switch__selection-ripple {
}
.switch__track {
  @apply absolute;
  @apply w-12;
  @apply h-7;
  @apply rounded-2xl;
  @apply opacity-30;
  @apply -left-1;
  top: calc(50% - 14px);
}
.switch__thumb {
  @apply flex;
  @apply relative;
  @apply items-center;
  @apply justify-center;
  @apply w-5;
  @apply h-5;
  @apply rounded-full;
  top: calc(50% - 10px);
}
.switch__thumb.switch--checked {
  @apply translate-x-5;
}
.switch__track,
.switch__thumb {
  @apply bg-current;
  @apply pointer-events-none;
  transition: inherit;
}
.switch__label {
  @apply inline-flex;
  @apply flex-auto;
  @apply items-center;
  @apply h-auto;
}
</style>
