### 简介

使用 loadtest 模块，实现 ab 接口压测类似的功能，此模块可以通过 js 文件启动，也可以通过命令行直接启动，输出的日志格式与 AB 也差不多，很方便

### 使用

先启动服务器

```sh
node ./server.js
```

#### 脚本配置方式

POST

```
node ./load-test/index.js

{ totalRequests: 100,
  totalErrors: 0,
  totalTimeSeconds: 10.006077052,
  rps: 10,
  meanLatencyMs: 1.5,
  maxLatencyMs: 36,
  minLatencyMs: 0,
  percentiles: { '50': 1, '90': 1, '95': 1, '99': 36 },
  errorCodes: {},
  instanceIndex: 0 }
Tests run successfully
```

#### 直接启动

GET

```sh
# 开启2个线程，每个线程并发数为100
loadtest -c 2 --rps 100  http://127.0.0.1:3000
```

```sh
# 开启2个线程，总共发送5次
loadtest -c 2 -n 5  http://127.0.0.1:3000
```
