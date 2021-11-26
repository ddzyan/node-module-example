/**
 * 使用 child_process 创建子进程
 *
 * spawn 创建
 * 结果采用流的方式来输出
 *
 * exec 创建
 * 将执行结果缓存起来，通过回调函数将 stderr 和 stdout 作为参数返回
 * 因此 exec 只适合处理数据小的命令
 */

const { exec, spawn } = require("child_process");

const child1 = spawn("ls", ["-l"]);
const child2 = spawn("wc", ["-l"]);

child1.stdout.pipe(child2.stdin);
child2.stdout.pipe(process.stdout);

exec("ls -l | wc -l", function(err, stdout, stderr) {
  if (err) {
    console.log("exec error :", error);
  } else {
    console.log("exec stdout", stdout);
    console.log("exec stderr", stderr);
  }
});
