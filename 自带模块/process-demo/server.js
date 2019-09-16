const http = require('http');
const cluster = require('cluster');

const unhandledRejections = new Map();
const MAXTIMEOUT = 3000;

process.on('unhandledRejection', (reason, promise) => {
  console.log('捕捉未被 catch 的 异步 异常');
  console.log('添加到异常列表，等待被处理');
  unhandledRejections.set(promise, reason);
  setTimeout(() => {
    /**
     * 如果在最大时间内还未被处理则记录日志
     * 移出列表
     */
    unhandledRejections.delete(promise);
  }, MAXTIMEOUT);
});

process.on('rejectionHandled', promise => {
  if (unhandledRejections.has(promise)) {
    unhandledRejections.delete(promise);
    console.log('移出异常列表');
  }
});

process.on('uncaughtException', error => {
  /**
   * 记录异常，并且输出到日志文件中，这里代码为输出到控制台，应该做修改
   * 关闭服务，停止接受其他的请求
   * 如果是多线程部署，则通知主线程服务退出
   * 时间轮询完毕后，退出线程
   */

  // 缺点为这个异常的请求将一直等待到连接超时
  console.log('未被捕获的同步异常');
  try {
    const killTimer = setTimeout(() => {
      console.log('服务关闭退出');
      process.exit(1);
    }, 1000);
    killTimer.unref();
    server.close();
    if (cluster.worker) {
      cluster.worker.disconnect();
    }
  } catch (error) {
    // 记录异常，并且输出到日志文件中
    console.log('error when exit', error.stack);
  }
});

const server = http.createServer((req, res) => {
  const error = new Error('test');
  console.log('自己发送异常信息');
  server.emit('error', error);
  const test = Promise.reject(new Error('test error'));
  test.catch(error => {
    console.log('异步异常触发');
    throw error;
  });
  abc();
  res.end('hello word');
});

// 服务异常统一处理，可以通过server.emit('error')，将所有错误信息发送到这里进行记录
server.on('error', error => {
  console.log('接受到自己发送的服务异常');
});

server.listen(3000, () => {
  console.log('服务启动成功');
});
