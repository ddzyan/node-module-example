## 简介

通过对 process 的三个事件监听，完成对线程异常的监测，保障对程序异常监测的完整性，并且在奔溃前记录完整日志信息和执行一系列操作后退出

- unhandledRejection: 未被 catch 的 异步 异常
- rejectionHandled:当未被 catch 的 异步 异常被处理时触发
- uncaughtException:未被 catch 的 同步异常

### server

模拟在服务中的异常处理，保证服务的优雅退出

#### 测试

```sh
node ./server.js

curl localhost:3000
```

控制台输出

```sh
服务启动成功
自己发送异常信息
接受到自己发送的服务异常
未被捕获的同步异常
异步异常触发
捕捉未被 catch 的 异步 异常
添加到异常列表，等待被处理
服务关闭退出
```

### test

模拟在线程异常的处理

#### 测试

```sh
node ./test
```

控制台输出

```sh
未被捕获的同步异常
捕捉未被 catch 的 异步 异常
添加到异常列表，等待被处理
异常被处理
移出异常列表
```
