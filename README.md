# Vite-vue3-ts

#### 项目相关

- [项目地址](https://github.com/fizz1994/vite-vue3-ts.git) github 仓库
- [Vite](https://cn.vitejs.dev/) 下一代前端开发与构建工具
- [Vue3](https://cn.vuejs.org/) 易学易用，性能出色，适用场景丰富的 Web 前端框架。
- [alova.js](https://alova.js.org/zh-CN/) 轻量级请求策略库
- [Ant Design Vue](https://next.antdv.com/components/overview-cn) 基于 Vue 3，面向设计师和开发者的组件库
- [Vxetable](https://vxetable.cn/) 一个强大的表格插件

#### 目录结构

```
├─.husky
├─.vscode
├─public
├─src
│  ├─api Api定义
│  ├─assets 资源
|  |   ├─icons 字体
|  |   ├─images 图片
│  ├─commons
|  |   ├─loadComponents.ts 注册全局组件
|  |   ├─vxtable.ts vxtable 引入配置
│  ├─components 全局组件，不掺杂业务
│  ├─config 全局配置
│  ├─hooks 全局hook
│  ├─router 路由
│  ├─service 请求服务
│  ├─store 全局存储
│  ├─style 全局样式
│  ├─types 全局type
│  ├─utils 工具类
│  ├─views 页面按照菜单划分, 页面必须为文件夹，eg: exapmle/index.vue
│  ├─App.vue
│  ├─main.ts
├─.env.dev
├─.env.development
├─.env.development.local
├─.env.prod
├─.env.test
├─.eslintrc.cjs
├─.gitignore
├─.prettierrc.cjs
├─commitlint.config.cjs
├─index.html
├─package.json
├─README.md
├─tsconfig.json
├─tsconfig.node.json
├─vite.config.ts
```

##### commit 规范

###### 格式： type: description

- feat：新功能（feature）
- fix：修复 bug
- docs：文档（documentation）
- style：格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- perf：优化相关，比如提升性能、体验
- test：增加测试
- build: 依赖相关的内容
- ci: ci 配置相关
- chore：构建过程或辅助工具的变动
- revert：回滚到上一个版本

[详情](http://192.168.1.219:4999/web/#/7?page_id=671)

###### vs code 插件:

git-commit-plugin
