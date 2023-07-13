<template>
  <router-view :key="routeName"></router-view>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const routeName = computed(() => route.name);
</script>

<style lang="less" scoped></style>
