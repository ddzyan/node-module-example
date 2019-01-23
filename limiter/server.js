const Koa = require('koa');
const app = new Koa();

const queue = [];
const maxAllowedRequest = 1;
let count = 0;
app.use(async (ctx, next) => {
    try {
        count++;
        console.log('未处理的请求数量 :', count);
        if (count > maxAllowedRequest) {
            console.log('超过最大连接数');
            // 超过最大请求数量，返回失败
            ctx.body = {
                msg: "请求太多，请稍候再试",
                success: false
            };
            count--;
            return;
        }
        // 模拟需要进行长时间操作代码
        setTimeout(() => {
            count--;
            console.log('请求处理结束,队列长度:', count);
            queue.shift()();
        }, 3 * 1000);

        await delay();

        ctx.body = {
            msg: "ok",
            success: true
        };
    } catch (error) {
        throw error;
    }
})

const delay = function () {
    return new Promise((resolve, reject) => {
        queue.push(resolve);
        console.log('队列长度 :', queue.length);
    })
}

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});

module.exports = server;