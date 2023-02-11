<h1 align="center">在线红白机游戏</h1>

<p align="center">
<img alt="vue version" src="https://img.shields.io/github/package-json/dependency-version/taiyuuki/nes-web/vue?color=greed"><img alt="express version" src="https://img.shields.io/github/package-json/dependency-version/taiyuuki/nes-web/express"><img alt="nes-vue version" src="https://img.shields.io/github/package-json/dependency-version/taiyuuki/nes-web/nes-vue?color=red">
<img alt="element-plus version" src="https://img.shields.io/github/package-json/dependency-version/taiyuuki/nes-web/element-plus?color=lightblue">
</p>

<p align="center">
基于vue3 + express的在线FC(NES)🎮游戏项目。
</p>

## 功能

在线玩FC游戏，一共约400个游戏，全中文版。

前端框架：vue3，后端框架：express。

所有游戏资料、图片提取自`OfflineList`。

* 按游戏类型进行分类
* 搜索
* 支持本地ROM
* 支持双人
* 支持保存和读取，每个游戏默认提供三个存档位。
* 自定义按键
* 截图
* 全屏
* 不支持IE


<p align="center">
<img alt="预览图1" src="https://s2.loli.net/2023/02/11/bu34pHWCQEeLS1f.gif" />>
<img alt="预览图2" src="https://s2.loli.net/2023/02/11/gSLpd52EnMkaTuP.gif" />
</p>

## 技术栈

### 前端

* 框架：`vue3`
* 构建工具：`vite`
* FC模拟器组件：[taiyuuki/nes-vue](https://github.com/taiyuuki/nes-vue)
* 组件库：`element-plus`
* 类型检测：`typescript`
* 前后端交互：`axios`
* CSS预编译：`scss`
* 代码格式：`eslint` `stylelint`
* `vue3`生态
  * `vue-router`
  * `pinia`
    * `pinia-plugin-persistedstate`：pinia持久化插件
* `vite`插件
  * `unocss`：CSS原子类生产
  * `unplugin-auto-import`：自动导入API
  * `unplugin-vue-components`：自动导入组件
  * `vite-plugin-pages`：基于文件自动创建路由
  * `vite-plugin-vue-layouts`：自动创建根路由
  * `vite-plugin-pwa`：PWA模式

### 后端

* 框架：`express`
* 数据库：`sqlite3`
* 类型检测：`typescript`
* 代码格式：`eslint` 
* 打包：`tsup`

接口详情：[nes-web/server](https://github.com/taiyuuki/nes-web/tree/main/server)

### 静态资源

像素字体：[SolidZORO/zpix-pixel-font](https://github.com/SolidZORO/zpix-pixel-font)

## 项目运行

项目目录

```bash
nes-web
   ├─clint 前端
   └─server 后端
```

前端和后端需要分别安装依赖，前端包管理器`yarn`，后端包管理器`pnpm`。

后端需要的游戏ROM、图片等静态资源，我单独打包放在release里，解压后将roms文件夹放在server文件夹内即可。

### 启动服务端

安装依赖

```shell
pnpm install
```

#### node

用node运行`dist`目录下的`index.js`即可。

```shell
node dist/index.js
```

#### pm2

推荐使用`pm2`：

安装pm2

```shell
npm i pm2 -g
```

启动服务

```shell
pm2 start dist/index.js --watch
```

### 前端运行

安装依赖

```shell
yarn install
```

运行

```shell
yarn dev
```
