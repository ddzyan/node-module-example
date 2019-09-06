const {
  createLogger,
  format,
  transports
} = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

// 设置日志回滚配置
const transport = new DailyRotateFile({
  filename: 'application-%DATE%.log', // 回滚日志格式
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true, // 是否zip压缩日志
  maxSize: '20m', // 最大日志大小
  dirname: './', // 保存的日志目录
  maxFiles: '14d', // 要保留的最大日志数
});

//过滤方法
const ignorePrivate = format((info, opts) => {
  if (info.private) {
    return false;
  }
  return info;
});

//根据参数组合日志
const loggerCombine = createLogger({
  level: 'info', // 记录小于此等级的日志信息
  format: format.combine(
    format.label({
      label: 'right meow!'
    }),
    format.colorize(), // 添加颜色
    ignorePrivate(), // 添加参数过滤
    format.timestamp(), // 添加时间
    //format.prettyPrint(),
    format.splat(), // 字符串插值
    format.simple(), // 序列化输出
    format.json(), //输出json格式
  ),
  transports: [transport, new transports.Console()],
});

loggerCombine.log({
  level: 'info',
  message: 'What time is the testing at?'
});

loggerCombine.log('info', 'test message %s, %s', 'first', 'second', {
  number: 123
});