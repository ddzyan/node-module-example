const winston = require('winston');
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

const logger = winston.createLogger({
  level: 'info', // 记录小于此等级的日志信息
  format: winston.format.json(), // 格式化info消息
  transports: [transport],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}
