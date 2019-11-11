const net = require("net");

// 恢复监听控制台的输入监听
process.stdin.resume();
let stop = false;
/**
 * 监听控制台的输入 stdin
 * stdin 标准输入
 * stdout 标准输出
 * stderr 标准错误
 */
process.stdin.on("data", function(data) {
  if (
    data
      .toString()
      .toLowerCase()
      .trim() === "stop"
  ) {
    stop = true;
    console.log("client stop \n");
    client.end();
  } else {
    client.write(data);
  }
});

const client = net.createConnection({ port: 6666, host: "localhost" }, () => {
  console.log("client 已经启动");
});

// 设置字符串编码格式，防止出现中文乱码
client.setEncoding("utf-8");
client.on("data", data => {
  console.log("received data from server is :" + data);
});

// 接收到服务器发送的关闭信息，关闭客户端
client.on("end", () => {
  console.log("client is end");
});

client.on("error", err => {
  console.error("client error", err);
});

// 异常退出
client.on("close", () => {
  if (!stop) {
    console.log("client is close");
  }
});
