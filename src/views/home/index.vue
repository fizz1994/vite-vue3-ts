<script setup lang="ts">
import { useRequest } from 'alova';
import { getUserPageServ } from '@/api/methods/user';

const po = ref({
  name: ''
});

const { data, loading } = useRequest(getUserPageServ, {
  initialData: []
});
</script>

<template>
  <layout-page>
    <template #search>
      <layout-page-search :po="po">
        <a-form-item>
          <a-input v-model="po.name" placeholder="姓名"></a-input>
        </a-form-item>
      </layout-page-search>
    </template>

    <layout-table :data="data" :loading="loading">
      <vxe-column field="name" title="姓名" minWidth="100"></vxe-column>
      <vxe-column field="sex" title="性别" minWidth="100"></vxe-column>
      <vxe-column field="age" title="年龄" minWidth="100"></vxe-column>
      <vxe-column field="address" title="联系地址" minWidth="200"></vxe-column>
    </layout-table>

    <template #pagination>
      <layout-pagination></layout-pagination>
    </template>
  </layout-page>
</template>

<style lang="scss" scoped></style>
