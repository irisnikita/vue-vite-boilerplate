<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="block">
    <a-button type="primary">CTA BUTTON</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
  </div>
</template>

<style scoped>
  .block {
    @apply tw-flex tw-items-center;
  }
</style>
