## 简介

由于 nodejs 是单进程单线程服务，如果要利用多进程优势，就需要进行多进程服务部署。但是这又会遇到多服务之间无法贡献端口的问题，这里可以使用 child_process 创建一个主线程监听端口，然后 fork 出一些子进程，再利用进程间的通讯，将句柄传递给子进程进行处理，从而实现多进程共享端口。

此 demo 为简单的操作，更多进程管理通讯，请参考：https://github.com/ddzyan/node-project/tree/master/multi-process

### 测试

正常测试结果都将被测试代码的 child 所执行，只有在高并发测试，或者提高 CPU 密集性任务难度，导致一个线程堵塞，另外一个线程才可能处理。

高并发测试

```
npm install -g loadtest

loadtest http://localhost:3000/ -t 20 -c 10
```
