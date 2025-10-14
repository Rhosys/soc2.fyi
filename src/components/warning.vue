<template>
  <div class="d-flex justify-content-center">
    <span class="fa-stack fa-1x d-flex align-items-center justify-content-center" :class="{ 'text-warning': colorize }">
      <i class="fa-solid fa-circle-question fa-stack-1x" />
    </span>
  </div>
</template>

<script setup>
// import { computed } from 'vue';

// eslint-disable-next-line no-undef
const props = defineProps({
  colorize: {
    type: Boolean,
    required: false,
    default: () => true
  }
});
</script>