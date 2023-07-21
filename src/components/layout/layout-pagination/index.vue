<script setup lang="ts">
import website from '@/commons/website';

const pageSizes: number[] = website.pagination.sizes;
</script>

<template>
  <a-pagination
    size="small"
    :page-sizes="pageSizes"
    show-size-changer
    show-quick-jumper
    v-bind="$attrs"
  />
</template>
