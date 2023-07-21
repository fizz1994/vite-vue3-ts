declare type Recordable<T = any> = Record<string, T>;

declare type DicItem<T = any> = {
  label: string;
  value: T;
};

// 页码
declare interface PaginationProps {
  current: number;
  size: number;
}
