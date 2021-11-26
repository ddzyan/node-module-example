const Router = require("koa-router");
const router = new Router();

function sleepTime(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("时间到");
            resolve();
        }, params * 1000);
    });
}

router.get("/users", async function (ctx) {
    console.log("接收到请求");
    await sleepTime(2);
    ctx.body = "成功";
});

module.exports = router;

