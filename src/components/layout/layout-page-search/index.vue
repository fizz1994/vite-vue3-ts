<script setup lang="ts">
interface PageSearchProps {
  po: Recordable;
  manual?: boolean;
}

const props = withDefaults(defineProps<PageSearchProps>(), { manual: () => false });

const emit = defineEmits<{
  (e: 'search'): void;
}>();
</script>

<template>
  <a-form
    class="layout-page-search"
    layout="inline"
    :model="props.po"
    @keydown.enter="emit('search')"
    @submit.prevent
  >
    <template v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </template>

    <slot></slot>
    <a-form-item class="mr0" v-if="manual">
      <a-button type="primary" plain @click="emit('search')">开始搜索</a-button>
    </a-form-item>

    <template v-if="$slots.append">
      <a-divider direction="vertical" class="ml20 mb10 mr20"></a-divider>
      <slot name="append"></slot>
    </template>
  </a-form>
</template>

<style lang="less" scoped>
.layout-page-search {
  :deep(.ant-form-item) {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
