<script setup lang="ts">
import { VxeTableInstance } from 'vxe-table';
import type { VxeTablePropTypes, VxeTableEvents } from 'vxe-table';

// props
const props = withDefaults(
  defineProps<{
    data: Recordable[];
    height?: number | string;
    border?: VxeTablePropTypes.Border;
    showCheckbox?: boolean;
    showSeq?: boolean;
    seqText?: string;
    pagination?: PaginationProps;
    resizable?: boolean;
    checkboxConfig?: Recordable;
  }>(),
  {
    height: 'auto',
    border: 'inner',
    showCheckbox: () => false,
    showSeq: () => true,
    seqText: '序号',
    resizable: () => true
  }
);

// emit事件对象
const emit = defineEmits<{
  (e: 'tableCheckboxChange', Rows: any[]): void;
  (e: 'tableCellClick', Rows: any[]): void;
  (e: 'selectAll', Rows: any[]): void;
}>();

const xTable = ref<VxeTableInstance>();

const currentSeq = computed(
  () => (index: number) =>
    props.pagination
      ? (props.pagination.current - 1) * props.pagination.size + index + 1
      : index + 1
);

const checkboxChange = () => {
  emit('tableCheckboxChange', xTable.value?.getCheckboxRecords() || []);
};

// 全选
const toggleAllCheckboxRow = () => {
  xTable.value?.toggleAllCheckboxRow();
  checkboxChange();
};

// 单选
const toggleCheckboxRow = (row: any) => {
  xTable.value?.toggleCheckboxRow(row);
  checkboxChange();
};

// 鼠标点击单元格事件
const cellClickEvent: VxeTableEvents.CellClick = ({ row }) => {
  emit('tableCellClick', row);
};

// 表格复选
const tableCheckboxConfig = computed(() =>
  Object.assign(
    {
      highlight: true
    },
    props.checkboxConfig || {}
  )
);

const stopDefault = (e: { stopPropagation: () => void }) => {
  e.stopPropagation();
};

watch(
  () => props.data,
  () => {
    xTable.value?.clearAll();
  }
);
</script>

<template>
  <vxe-table
    ref="xTable"
    class="layout-table"
    show-header-overflow
    show-overflow
    :column-config="{ resizable: props.resizable }"
    :resizable-config="{ minWidth: 60 }"
    :sort-config="{ remote: true, trigger: 'cell' }"
    :row-config="{ isHover: true, keyField: 'id' }"
    :seq-config="{ seqMethod: ({ rowIndex }) => currentSeq(rowIndex) }"
    :scroll-x="{ scrollToLeftOnChange: true }"
    :scroll-y="{ scrollToTopOnChange: true }"
    :checkbox-config="tableCheckboxConfig"
    :height="height"
    size="small"
    :data="props.data"
    :border="props.border"
    header-cell-class-name="table-header-cell"
    cell-class-name="table-cell"
    empty-text="暂无数据"
    v-bind="$attrs"
    @cell-click="cellClickEvent"
    @checkbox-change="checkboxChange"
  >
    <!-- <vxe-column field="checkbox" type="checkbox" width="40" v-if="showCheckbox" fixed="left">
      <template #header="{ checked, indeterminate }">
        <a-checkbox :checked="checked" @change="toggleAllCheckboxRow"></a-checkbox>
      </template>
      <template #checkbox="{ row, checked, visible, disabled }">
        <a-checkbox
          :checked="checked"
          :disabled="disabled"
          @change="toggleCheckboxRow(row)"
          @click="stopDefault($event)"
          v-if="visible"
        ></a-checkbox>
      </template>
    </vxe-column> -->
    <vxe-column type="seq" :title="props.seqText" width="60" v-if="showSeq"></vxe-column>

    <slot></slot>
  </vxe-table>
</template>

<style src="./style.less" lang="scss" scoped></style>
