/**
 * 流程设计：
 * 工作进程:index.js
 * 守护进程:daemon.js
 *
 * 创建守护进程，设计流程
 * 1. 创建 工作进程
 * 2. 在 工作进程 创建 守护进程
 * 3. 终止 工作进程 , 关闭文件描述符
 * 4. 守护进程 由 init进程 接管
 */

const spawn = require("child_process").spawn;

/**
 * 默认情况下，父进程会等待被分离的 subprocess 退出
 * 为了防止父进程等待 subprocess ，则调用 subprocess 的 unref 方法
 * 这样会导致父进程的事件循环不包含子进程在其引用计数中，使父进程可以独立于子进程退出
 *
 * 当使用 detached 选项来启动一个长期运行的进程时
 * 子进程在父进程退出后继续运行，子进程由自己的控制台窗口，一旦启用无法关闭。
 *
 * 一个长期运行的进程，为了忽视父进程的终止，通过分离且忽视其父进程的 stdio 文件描述符来实现
 *
 * subprocess unref() 使父进程的事件循环中不再将子进程包含,使父进程可以独立于子进程退出
 * detached 保证子进程在父进程退出后，还可以持续运行
 * stdio 关闭父进程与子进程之间的通讯管道 [stdin,stdout,stderr]，忽略子进程的输出
 */
function startDaemon() {
  const daemon = spawn("node", ["daemon.js"], {
    detached: true, // 使父子进程分离，子进程独立于父进程运行
    stdio: "ignore" // 关闭父进程与子进程之间的通讯管道[stdin,stdout,stderr]，如果父进程和子进程有标准I/O有交互，它还是会挂掉
  });

  console.log(
    "守护进程开启 父进程 pid: %s, 守护进程 pid: %s",
    process.pid,
    daemon.pid
  );
  daemon.unref();
}

startDaemon();
