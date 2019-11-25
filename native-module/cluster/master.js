const cluster = require("cluster");
const cups = require("os").cpus();

cluster.setupMaster({
  exec: "./child.js", // 执行的必须是nodejs脚本
  args: ["--use", "http"]
});

for (let index = 0; index < cups.length; index++) {
  cluster.fork();
}

cluster.on("exit", (worker, code, signal) => {
  console.log(`工作进程 ${worker.process.pid} 已退出`);
});
