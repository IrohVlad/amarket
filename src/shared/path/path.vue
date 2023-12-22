<template>
  <div class=" text-lg font-medium flex items-center">
    <template v-for="(item, i) in routes">
      <div>{{ item }}</div>
      <img v-if="i != routes.length - 1" class="mx-3" src="./assets/Arrow.svg" alt="">
    </template>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  routes: Array
})
</script>