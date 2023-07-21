<script setup lang="ts">
// bodyRef 的宽高
const bodyRef = ref(null);
const { width, height } = useElementSize(bodyRef);
</script>

<template>
  <div class="layout-detail">
    <!-- 内容 -->
    <section class="layout-detail__body" ref="bodyRef">
      <slot :width="width" :height="height"></slot>
    </section>

    <!-- 底部 -->
    <section class="layout-detail__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </section>
  </div>
</template>

<style src="./style.less" lang="less" scoped></style>
