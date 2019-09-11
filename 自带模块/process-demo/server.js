const http = require('http');
const cluster = require('cluster');

const server = http.createServer((req, res) => {
  domain.createServer();
  abc();
  res.end('hello word');
});

process.on('uncaughtException', error => {
  // 记录异常，并且输出到日志文件中，这里代码为输出到控制台，应该做修改
  /**
   * 首先关闭服务，停止接受其他的请求
   * 如果是多线程部署，则通知主线程服务退出
   * 时间轮询完毕后，退出线程
   */

  // 缺点为这个异常的请求将一直等待到连接超时
  console.error('uncaughtException', error);
  try {
    const killTimer = setTimeout(() => {
      process.exit(1);
    }, 1000);
    killTimer.unref();
    server.close();
    // 如果采用多线程模式启动，则需要通知主线程退出，否则不需要要这个代码
    if (cluster.worker) {
      cluster.worker.disconnect();
    }
  } catch (error) {
    // 捕捉关闭失败的异常
    console.log('error when exit', error.stack);
  }
});

server.on('error', error => {
  console.log('server error :', error);
});

server.listen(3000, () => {
  console.log('服务启动成功');
});
