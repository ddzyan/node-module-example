# 简介

本项目将包含常用的 node 模块的使用例子，长期更新。

其他核心仓库请参考：

* [javascript 常见模块使用案例](https://github.com/ddzyan/node-module-example)
* [javascript 数据结构，算法和设计模式实现](https://github.com/ddzyan/algorithmAndDataStructure)
* [javascript 实践代码，框架源码，原生模块源码实现等](https://github.com/ddzyan/node-project)

# 更新记录

## [2022-02-16]

[增加 tcomb 使用案例](./工具模块/tcomb-demo)

## [2022-02-07]

1. [autocannon 压力测试](./工具模块/autocannon)
2. [jsonwebtoken jwt 认证](./工具模块/jsonwebtoken)
3. [lodash 常用方法](./工具模块/lodash)
4. [console 常用方法](./原生模块/console)

## [2022-01-21]

[xlsx 文件解析和写入](./工具模块/xlsx-demo)

## [2021-05-10]

[nodemailer 案例](./工具模块/nodemailer-demo)

## [2021-01-12]

[axios 的拦截器使用方式](./网络模块/axios-interceptor)

## [2019-11-25]

1. [使用 cluster 集群管理，实现创建多进程服务，共享端口，提高 CPU 利用率](./原生模块/cluster)

## [2019-11-22]

1. [使用 child_process 实现创建多进程服务，共享端口，提高 CPU 利用率](./原生模块/child-process/shared-port)

## [2019-11-11]

1. [使用 nodejs net 模块实现 TCP 传输层协议，搭建聊天室功能](./原生模块/net/chatroom)

## [2019-10-14]

1. [添加原生模块 chiild_process 的进程创建和守护进程实现 demo](./原生模块/child-process)

## [2019-9-16]

1. 添加 [vsCode 开发 nodejs 环境配置](./%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83/eslint-demo)，具备的功能如下

   1. js 语法提示
   2. nodejs 自带模块提示
   3. 代码规范性监测和代码自动修复
      ## [2019-9-16]

1. 添加 [loadtest](./%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95%E6%A8%A1%E5%9D%97/loadtest-demo) 类似 ab 压力测试模块的使用方法

## [2019-9-11]

1. 模块分类：根据是否是自带模块，和第三方模块功能进行分类
1. 增加自带模块使用 demo
   1. [event-demo](./%E8%87%AA%E5%B8%A6%E6%A8%A1%E5%9D%97/event-demo)
   2. [fs-demo](./%E8%87%AA%E5%B8%A6%E6%A8%A1%E5%9D%97/fs-demo)
   3. [http-demo](./%E8%87%AA%E5%B8%A6%E6%A8%A1%E5%9D%97/http-demo)
   4. [process-demo](./%E8%87%AA%E5%B8%A6%E6%A8%A1%E5%9D%97/process-demo)

## [2019-6-14]

1. [http-proxy 请求转发](./http-proxyDemo)

## [2019-4-17]

1. [node 调用.so 库方法](./nodeclib)

## [2019-2-19]

1. [locust 快速上手](./pressure-test)

## [2019-1-24]

1. [接口限流方案](./limiter)

## [2019-1-7]

1. [更新获取随机数 randomstring 模块](./randomDemo)

   ## [2019-1-3]

1. [更新断言 power-assert 模块](./powerAssert)
1. [更新 sequelize 模块，添加批量创建方法，添加一对一关系家长表](./sequelizeDemo)
1. 修改每个 demo 依赖安装路径，避免测试出现 BUG
   ## [2019-1-2]

[更新 orm sequelize 模块](./sequelizeDemo)

## [2018-12-25]

更新 sequelize orm 模型使用 demo

## [2018-12-23]

更新 koa-await-breakpoint 模块使用方法。在 koa 服务中，对 await 表达式前后自动打点，记录每个请求到来时 await 表达式前后的现场.
