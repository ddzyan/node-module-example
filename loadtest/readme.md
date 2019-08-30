## 简介

使用 loadtest 插件，进行单接口的压力测试和服务器的性能测试

### 使用

#### 安装

```shell
npm i -g loadtest
```

#### 服务器性能测试

```shell
testserver-loadtest

# 采用10个并发，对服务器进行20秒的测试
loadtest http://localhost:7357/ -t 20 -c 10
```

#### get 接口

```shell
# 开启2个线程，每个线程并发100次请求
loadtest -c 2 --rps 100  http://127.0.0.1:3000

# 开启两个现成，总共发送5次请求
loadtest -c 2 -n 5  http://127.0.0.1:3000
```

#### post 接口

```shell
# 启动服务
node ./index.js

# 启动压力测试
node ./test/index.js

{ totalRequests: 98,
  totalErrors: 0,
  totalTimeSeconds: 10.003082857999999,
  rps: 10,
  meanLatencyMs: 1.4,
  maxLatencyMs: 18,
  minLatencyMs: 0,
  percentiles: { '50': 1, '90': 2, '95': 2, '99': 18 },
  errorCodes: {},
  instanceIndex: 0 }
Tests run successfully
```
