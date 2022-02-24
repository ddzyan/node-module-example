const { CtripApolloClient } = require("@lvgithub/ctrip-apollo-client");
const Koa = require("koa");
const app = new Koa();

const apollo = new CtripApolloClient({
  configServerUrl: "http://106.54.227.205:8080",
  appId: "poolClient",
  configPath: "./config/apolloConfig.json",
  namespaceList: ["application"]
});

class User {
  constructor() {
    apollo.withValue(this, "userId", "user.id:10071");
  }
}

// 支持热更新`
const userSex = apollo.hotValue("user.sex:man");

const run = async () => {
  await apollo.init();
  const port = apollo.getValue("app.port:3000");

  const user = new User();

  app.use(async ctx => {
    // 配置变更后，会自动同步
    ctx.body = {
      userId: user.userId,
      name: user.userName,
      sex: userSex.value
    };
  });
  app.listen(port);
  console.log("listening on port:", port);
};
run();
