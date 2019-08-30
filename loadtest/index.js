const Koa = require('koa');
const app = new Koa();

let count = 0;
app.use(async ctx => {
  count++;
  console.log('count :', count);
  ctx.body = 'hello word';
});

app.listen(3000, () => {
  console.log('服务器启动成功');
});
