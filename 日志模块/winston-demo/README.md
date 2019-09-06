## 简介
参考：https://github.com/winstonjs/winston#combining-formats

winston 是一个简单和通用的日志记录库，通过解耦部分日志记录过程，使其更加灵活和可扩展。

### 安装
```bash
npm install winston --save

//winston 日志回滚模块
npm install winston-daily-rotate-file --save
```

### 使用
customLevelLogger.js 为替换node中默认的console模块，可以为不同级别的日志添加颜色。

loggerCombine.js 组合参数配置，控制日志输出格式。

loggerPrintf.js 自定义日志输出格式配置。

loggerBest.js 最优和用的最多的日志格式化方法，参数配置部分信息和自定义日志信息。

.audit.json 文件将记录每个日志文件的基本信息

### 参数
- 通过配置 DailyRotateFile 模块，才能实现根据文件大小，切割和回滚日志。
- transports：每次调用日志实例，将触发数组内的所有方法。

### 第三方模块
- winston-mongodb：日志输出到mongodb数据库
- winston-mail：日志作为电子邮件发送