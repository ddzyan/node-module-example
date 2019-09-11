const unhandledRejections = new Map();

process.on('unhandledRejection', (reason, promise) => {
  console.log('捕捉未被 catch 的 异步 异常');
  console.log('添加到异常列表，等待被处理');
  unhandledRejections.set(promise, reason);
  setTimeout(() => {
    promise.catch(error => {
      console.log('异常被处理');
    });
  }, 1000);
});

process.on('rejectionHandled', promise => {
  unhandledRejections.has(promise) && unhandledRejections.delete(promise);
  console.log('移出异常列表');
});

process.on('uncaughtException', error => {
  console.log('未被捕获的同步异常');
  /**
   * 在此将异常信息保存在日志中，并且执行一些列操作
   * 保证在线程关闭前，可以达到优雅退出
   * process.exit(1);
   */
});

const test = Promise.reject(new Error('test error'));
abc();
test.catch(error => {
  console.log('异常触发');
  throw error;
});
