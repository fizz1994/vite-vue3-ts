<template>
  <a-layout class="app-layout">
    <a-layout-sider
      class="syzj-sider"
      :collapsed="collapsed"
      width="200px"
      :style="{ backgroundColor: '#383D49' }"
    >
      <sidebar v-model:collapsed="collapsed" />
    </a-layout-sider>
    <a-layout class="app-container">
      <a-layout-header
        :style="{
          position: 'relative',
          zIndex: 999,
          padding: '0 20px',
          height: '70px',
          backgroundColor: '#fff'
        }"
      >
        <navbar />
      </a-layout-header>
      <a-layout-content class="app-content">
        <div class="main-app-container">
          <div class="mainapp-viewport main-app-viewport">
            <router-view></router-view>
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Sidebar from './sidebar/index.vue';
import Navbar from './navbar/index.vue';
// import Store from '@/store';

// 侧边栏状态
const collapsed = ref(false);
</script>

<style lang="less">
.app-layout {
  width: 100vw;
  height: 100vh;

  .app-sider {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .app-container {
    min-width: 960px;
  }

  .app-content {
    .main-app-container {
      width: 100%;
      height: 100%;

      .main-app-viewport {
        overflow-x: auto;
        overflow-y: auto;

        width: 100%;
        height: 100%;
        padding: 0 8px;
      }
      :deep(.main-app-viewport > div) {
        width: 100%;
        height: 100%;
        padding: 1px;
      }
    }
  }
}
</style>
