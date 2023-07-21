<script setup lang="ts">
// props
const props = withDefaults(
  defineProps<{
    inline?: boolean | string;
  }>(),
  {
    inline: () => false
  }
);

// const route = useRoute();

// 面包屑列表
// const breadcrumbs = computed(() => route.matched.filter(v => !v.meta?.hiddenBreadcrumb));
</script>

<template>
  <div class="layout-page" :class="{ inline: props.inline === true }">
    <!-- 列表-顶部 -->
    <section class="layout-page__top" v-if="$slots.search || $slots.extra">
      <!-- 列表-搜索 -->
      <div class="layout-page__search">
        <slot name="search"></slot>
      </div>

      <!-- 列表-操作 -->
      <div class="layout-page__extra" v-if="$slots.extra">
        <slot name="extra"></slot>
      </div>
    </section>

    <!-- 列表-表格 -->
    <section class="layout-page__body" v-if="$slots.default">
      <!-- 列表-表格内容 -->
      <section class="layout-page__table">
        <slot></slot>
      </section>

      <!-- 列表-页码 -->
      <section class="layout-page__pagination" v-if="$slots.pagination">
        <slot name="pagination"></slot>
      </section>
    </section>
  </div>
</template>

<style src="./style.less" lang="less" scoped></style>
