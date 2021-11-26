const Koa = require('koa');
const domain = require('domain');
const app = new Koa();

app.use(async (ctx, next) => {
  const req_domain = domain.create();

  req_domain.on('error', err => {
    console.log(err); // 打印错误日志
    res.send(500, err.stack);
  });

  req_domain.run(next);
});

app.use(async (ctx, next) => {
  abc();
  ctx.response.body = 'hello word';
  next();
});

app.on('error', error => {
  console.log('koa error :', error);
});

const unhandledRejections = new Map();
// 在事件循环中，遇到 promise 的异常没有被捕获，则会触发
process.on('unhandledRejection', (reason, promise) => {
  console.log('unhandledRejection :', error);
  unhandledRejections.set(promise, reason);
});

process.on('rejectionHandled', promise => {
  console.log('rejectionHandled :', error);
  unhandledRejections.delete(promise);
});

// 同步代码未被捕获的异常会触发
process.on('uncaughtException', error => {
  console.log('uncaughtException :', error);
});

app.listen(3000, () => {
  console.log('server success');
});
