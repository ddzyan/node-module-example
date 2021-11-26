const net = require("net");
// 创建服务实例
const server = net.createServer();
/**
 * 每一个客户端的连接都会创建一个 socket 实例
 */
let count = 0;
let users = new Map();
server.on("connection", function(client) {
  client.setEncoding("utf-8");
  client.write("please input your nickname");
  count++;
  let nickname;
  client.on("data", function(data) {
    // 去除换行和回车
    data = data.replace(/\r\n/, "");
    console.log("received data from client is: " + data);
    if (!nickname) {
      if (users[nickname]) {
        client.write("\n nickname already used,try again");
      } else {
        nickname = data;
        users.set(nickname, client);
        users.forEach(user => user.write(nickname + " join the romm\n"));
      }
    } else {
      client.write("发送者nickname: " + nickname + "\n");
      users.forEach((user, index) => {
        if (index !== client) {
          user.write(nickname + ": " + data + "\n");
        }
      });
    }
  });

  client.on("close", () => {
    count--;
    console.log("clent is close");
  });

  client.on("error", err => {
    console.error("server error", err);
  });
});

// 绑定端口
server.listen(6666, "localhost", () => {
  console.log("server 已经启动");
});
