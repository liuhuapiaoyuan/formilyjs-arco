---
title: FormDrawer
order: 0
nav:
  title: 组件
  path: /components
group:
  title: FormDrawer
---

# FormDrawer

> 抽屉表单，主要用在简单的事件打开表单场景

## Markup Schema 案例

<code src="./demo/index_1.tsx" />

## JSON Schema 案例

<code src="./demo/index_2.tsx" />

## 纯 JSX 案例

<code src="./demo/index_3.tsx" />

## API

### FormDrawer

```typescript
type FormDrawerHandler = {
  //打开弹窗，接收表单属性，可以传入initialValues/values/effects etc.
  open(props: IFormProps): Promise<any>; //返回表单数据
  //关闭弹窗
  close(): void;
};

interface IFormDrawer {
  (
    title: React.ReactNode, //如果是ReactNode，则作为弹窗title传入
    renderer: (resolve: () => void, reject: () => void) => React.ReactElement
  ): FormDrawerHandler;
  (
    title: ModalProps, //如果是对象，则作为DrawerProps传入
    renderer: (resolve: () => void, reject: () => void) => React.ReactElement
  ): FormDrawerHandler;
}
```

### FormDrawer.Footer

无属性，只接收子节点
