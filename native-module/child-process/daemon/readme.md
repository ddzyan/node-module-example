参考文章：

- https://cnodejs.org/topic/57adfadf476898b472247eac
- http://nodejs.cn/api/child_process.html#child_process_options_detached
- https://baike.baidu.com/item/%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B
- https://baike.baidu.com/item/守护进程
- http://www.ruanyifeng.com/blog/2016/02/linux-daemon.html

代码仓库：

- https://github.com/ddzyan/node-module-example/tree/master/%E8%87%AA%E5%B8%A6%E6%A8%A1%E5%9D%97/child-process/daemon

了解的内容：

1. 什么是前台任务和后台任务
2. 为什么前台任务在结束会话的适合会自动退出
3. 如何实现守护进程
   1. 第三方模块
   2. 源码实现

## 简介

### 前台任务和后台任务

```shell
node ./daemon.js
```

向如上的方式启动一个脚本，它就是前台任务，它会独占一个命令行窗口，只有运行完或者手动关闭，才能执行其他任务。

后台任务（守护进程）：是一类在后台运行的特殊进程，它不受任何终端控制，它的特点如下：

- 继承当前 session 的标准输出(stdout)和标准错误(stderr)，因此守护进程任务依然会将所有输出同步输出到控制台
- 不继承当前 session 的标准输入(stdin)，因此关闭信号将无法发送到守护进程中。

### liunx 后台任务实现

liunx 系统设计：

1. 用户准备退出 session
2. 系统向该 session 发出 sighup 信号
3. session 将 sighub 信号发送给所有 子进程
4. 子进程收到 sighub 退出

第一部分用命令行运行脚本，则就创建了一个 session。上面的流程说明了，nodejs 前台运行的任务在窗口关闭之后的退出流程。而要实现后台任务，可以将任务移除 session ，或者让任务收不到 sighub 指令。

#### 让任务收不到指令

后台任务是否会收到 sighub,由 huponexit 状态控制，off 将关闭信号发送。

```shell
$ shopt | grep huponexit
huponexit       off

# 将任务变成后台任务
node ./daemon.js &
```

而 huponexit 处于 on 状态，则需要考虑将任务移除 session 列表

#### 移除 session 列表

```shell
# 查看后台任务列表
$ jobs
[1]+  Running

# 移除最近一个正在执行的后台任务
$ disown

# 让它们不会收到 SIGHUP 信号
disown -h
```

再次查看 jobs 列表，发现后台任务为空

#### 其他方法

- screen
- nohub

### node 后台任务模块实现

#### 第三方工具

- pm2
- forever

第三方工具实现了多进程启动，标准输出(stdout)和标准错误输出(stderr)到日志，奔溃自动重启等功能。

#### 源码简易实现

使用 nodejs 自带模块 child_process，实现守护进程模式。

##### 设计流程

1. 开启工作进程
2. 在工作进程内开启守护进程
3. 关闭工作进程，关闭标准输入，标准输出和标准错误
4. 守护进程由 init 进程关闭

```shell
node ./index.js
守护进程开启 父进程 pid: 18424, 守护进程 pid: 816
```

此时查看./stdout.log 发现持续由日志在输出，标明 daemon 进程依然在运行，已经实现守护进程。
