<template>
  <div class="layout-navbar">
    <!-- 导航栏-主体 -->
    <section class="layout-navbar__container">
      <div class="layout-navbar__item">
        <a-button type="text">
          <template #icon>
            <a-badge dot>
              <a-bell-outlined />
            </a-badge>
          </template>
          消息
        </a-button>
      </div>
      <a-divider type="vertical" />
      <div class="layout-navbar__item">
        <a-popover overlayClassName="layout-navbar-popover" trigger="hover">
          <template #content>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;" @click="jumpTo('/oss-syset/systemconfig/system')">
                  <a-setting-outlined class="mr6" />
                  系统设置
                </a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="logOut">
                  <a-poweroff-outlined style="color: #ff6442" class="mr6" />
                  安全退出
                </a>
              </a-menu-item>
            </a-menu>
          </template>
          <a-button type="text">
            <template #icon><a-menu-outlined /></template>
            邱邱yo
          </a-button>
        </a-popover>
      </div>
    </section>
  </div>
</template>

<script setup>
//import Store from '@/store';

// const userStore = Store.userStore();
const router = useRouter();

// 页面跳转
const jumpTo = (path, query) => {
  router.push({
    path,
    query
  });
};

const logOut = () => {
  // userStore.Logout().then(() => {
  //   router.push({ name: 'login' });
  // });
};
</script>

<style src="./style.less" lang="less" scoped></style>
