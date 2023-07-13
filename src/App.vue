<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
</script>

<template>
  <a-config-provider component-size="large" :locale="zhCN">
    <router-view></router-view>
  </a-config-provider>
</template>

<style src="@/assets/less/common.less" lang="less"></style>
