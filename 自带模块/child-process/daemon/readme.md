参考文章：

- https://cnodejs.org/topic/57adfadf476898b472247eac
- http://nodejs.cn/api/child_process.html#child_process_options_detached
- https://baike.baidu.com/item/%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B
- https://baike.baidu.com/item/守护进程

## 简介

守护进程：是一类在后台运行的特殊进程，它不受任何终端控制。

一般在启动 nodejs 程序后，终端是无法进行关闭的。如果关闭则进程就会退出，而实际情况中，需要将进程以守护进程的方式启动，在后台保持运行。例如一个 restful 服务等。

这里可以采用一些第三方工具：

- pm2
- forever

也可以使用 nodejs 自带模块 child_process，实现 pm2 类似的守护进程模式。

测试

```shell
node ./index.js
守护进程开启 父进程 pid: 18424, 守护进程 pid: 816
```

此时查看./stdout.log 发现持续由日志在输出，标明 daemon 进程依然在运行，已经实现守护进程。
