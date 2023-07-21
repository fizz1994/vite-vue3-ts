<script setup lang="ts">
import MenuApplet from '~icons/custom/menu-applet';
import MenuCommodity from '~icons/custom/menu-commodity';
import MenuData from '~icons/custom/menu-data';
import MenuExpend from '~icons/custom/menu-expend';
import MenuMarketing from '~icons/custom/menu-marketing';
import MenuMessage from '~icons/custom/menu-message';
import MenuSalesclerk from '~icons/custom/menu-salesclerk';
import MenuSell from '~icons/custom/menu-sell';
import MenuSyset from '~icons/custom/menu-syset';
import MenuVip from '~icons/custom/menu-vip';

// props
const props = defineProps({
  collapsed: {
    type: Boolean
  }
});

// emit
const emit = defineEmits(['update:collapsed']);

// 菜单栏状态
const collapsed = useVModel(props, 'collapsed', emit);

const router = useRouter();
const route = useRoute();

const list = [
  {
    key: 'Store-Management',
    title: '门店管理',
    children: [
      {
        key: 'sales',
        title: '销售管理',
        icon: MenuSell
      },
      {
        key: 'expend',
        title: '支出管理',
        icon: MenuExpend
      },
      {
        key: 'commodity',
        title: '商品管理',
        icon: MenuCommodity
      },
      {
        key: 'sales-clerk',
        title: '店员管理',
        icon: MenuSalesclerk
      }
    ]
  },
  {
    key: 'member-marketing',
    title: '会员营销',
    children: [
      {
        key: 'marketing',
        title: '营销活动',
        icon: MenuMarketing
      },
      {
        key: 'sms',
        title: '发短信',
        icon: MenuMessage
      },
      {
        key: 'vip',
        title: '超级会员卡',
        icon: MenuVip
      },
      {
        key: 'applet',
        title: '生意商城',
        icon: MenuApplet
      }
    ]
  },
  {
    key: 'system',
    title: '',
    children: [
      {
        key: 'data',
        title: '数据分析',
        icon: MenuData
      },
      {
        key: 'syset',
        title: '系统设置',
        icon: MenuSyset
      }
    ]
  }
];

// 侧边栏切换
const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};

// 选择菜单
const selectMenuHandler = ({ key }) => {
  if (key) {
    jumpTo(key);
  }
};

// 页面跳转
const jumpTo = path => {
  router.push({
    path
  });
};
</script>

<template>
  <div class="layout-sidebar" :class="{ collapsed: collapsed }">
    <!-- 侧边栏顶部 -->
    <section class="layout-sidebar__border"></section>

    <!-- 展开收起侧边栏 -->
    <section class="layout-sidebar__toggle-collapsed" @click="toggleCollapsed">
      <a-menu-fold-outlined v-if="!collapsed" />
      <a-menu-unfold-outlined v-else />
    </section>

    <!-- 侧边栏顶部 -->
    <section class="layout-sidebar__top">
      <div class="logo" @click="jumpTo('')">
        <c-logo v-if="!collapsed"></c-logo>
        <c-menu-home v-else></c-menu-home>
      </div>
    </section>

    <!-- 侧边栏主体 -->
    <section class="layout-sidebar__container">
      <a-menu theme="dark" mode="inline" :selectedKeys="[route.path]" @select="selectMenuHandler">
        <a-menu-item-group :key="group.key" v-for="group in list">
          <template #title>
            <a-divider orientation="left" orientation-margin="0px">
              {{ group.title }}
            </a-divider>
          </template>
          <template v-if="group.children">
            <a-menu-item :key="menu.key" v-for="menu in group.children">
              <template #icon>
                <component :is="menu.icon"></component>
              </template>
              {{ menu.title }}
            </a-menu-item>
          </template>
        </a-menu-item-group>
      </a-menu>
    </section>
  </div>
</template>

<style src="./style.less" lang="less" scoped></style>
