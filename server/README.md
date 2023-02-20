<h1 align="center">在线红白机游戏</h1>

<p align="center">
<img alt="express version" src="https://img.shields.io/github/package-json/dependency-version/taiyuuki/nes-web/express">
</p>

<p align="center">
基于vue3 + express的在线FC(NES)🎮游戏项目，服务端。
</p>

* 框架：`express`
* 数据库：`sqlite3`
* 类型检测：`typescript`
* 代码格式：`eslint` 
* 打包：`tsup`

## 项目运行

游戏ROM、图片等静态资源，我单独打包放在[release](https://github.com/taiyuuki/nes-web/releases/download/v0.0.1/roms.zip)里，下载、解压后将roms文件夹放在server文件夹内即可。

### 安装依赖

```shell
pnpm install
```

注意：安装sqlite3时可能会报错，这是因为安装需要python或[mapbox/node-pre-gyp](https://github.com/mapbox/node-pre-gyp)编译二进制文件，安装此二者之一即可。

### 启动服务端

#### node

使用node运行`dist/index.js`即可。

```shell
node dist/index.js
```

#### pm2

推荐使用`pm2`

安装pm2

```shell
npm i pm2 -g
```

启动服务

```shell
pm2 start dist/index.js --watch
```

查看日志

```shell
pm2 log
```

查看所有服务

```shell
pm2 list
```

停止服务

```shell
pm2 stop id
```

移除服务

```shell
pm2 delete id
```

查看实时状态

```shell
pm2 monit
```

### 接口

服务器默认端口为8848，默认本地启动地址：`http://localhost:8848`

地址可以在`src/server.config.ts`中进行设置，前端也需要修改`src/client.config.ts`中对应的设置。

#### 获取游戏分类

**API: `/categorys`**

示例：`http://localhost:8848/categorys`

#### 获取轮播图

**API: `/banner`**

#### 获取游戏列表

说明：此接口用于获取游戏列表，同时可以用作搜索。

**API: `/romlist`**

可选参数：

* *cat*：分类，比如`ACT`、 `STG`
* *keyword*：搜索关键字
* *page*：分页，默认值为1
* *limit*：每页数量，默认值为20

示例：`http://localhost:8848/romlist?cat=ACT&page=2&limit=10`

#### 随机获取游戏列表

说明：此接口用于获取随机N个游戏。

**API: `/random`**

可选参数：

* *n*：游戏数量
* *cat*：分类，比如比如`ACT` 、`STG`
* *ignore*：不包括某个游戏的id

示例：`http://localhost:8848/random?n=10&cat=ACT&ignore=7`

#### 获取单个游戏

说明：此接口可以通过游戏id获取单个游戏完整信息。

**API: `/rom`**

**必选参数**：

* *id*：游戏id

示例：`http://localhost:8848/rom?id=7`

#### 搜索建议

说明：此接口用于给定关键词列出搜索建议。

**API: `/suggestions`**

**必选参数**：

* *keyword*：关键词

示例：`http://localhost:8848/suggestions?keyword=洛克人`

#### 静态资源

静态资源的地址会包含在获取的游戏列表中。

**图片资源**

**API: `http://localhost:8848/roms/img/id`**

每一个游戏都有两张图片。

例如，id为472的游戏，封面：

`http://localhost:8848/roms/img/472a.png`

截图：

`http://localhost:8848/roms/img/472b.png`

**ROM资源**

**API: `http://localhost:8848/roms/游戏名`**

例如，大金刚：`http://localhost:8848/roms/大金刚 (简)`