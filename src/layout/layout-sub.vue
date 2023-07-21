<script setup lang="ts">
const route = useRoute();

const routeKey = computed(() =>
  route.name === 'DataInsightObjectDetail'
    ? route.name
    : ((route.params?.id || route.name) as string)
);
</script>

<template>
  <router-view :key="routeKey"></router-view>
</template>

<style lang="scss" scoped></style>
