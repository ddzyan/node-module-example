const koaAwaitBreakpoint = require('koa-await-breakpoint')({
    name: 'api',
    files: ['./routes/*.js']
})

const Koa = require("koa");
const koa = new Koa();
const router = require('./routes/user');

koa.use(koaAwaitBreakpoint);

koa.use(router.routes(), router.allowedMethods());

koa.listen(3000, () => {
    console.log("koa启动成功");
});


