参考文档：https://www.npmjs.com/package/pm2

### 简介
pm2 是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等

### 安装
```bash
//全局安装
npm i pm2 -g

//更新
pm2 update
```

### 常用命令
#### 管理应用程序
```bash
//查看所有服务信息
pm2 list

//监控所有服务详细信息包括日志
pm2 monit

pm2 start    <file.js|json_conf>
pm2 [stop/restart/reload/delete]  <app_name|id|'all'|json_conf>

pm2 [start/stop/restart/reload/delete] ecosystem.config.js --only worker-app
```
##### 参数
- file.js - 服务启动文件
- json_conf - pm2 配置文件
- app_name - 指定 pm2 服务名称
- id - 指定 pm2 id
- all 全部服务
- json_conf 配置文件中的全部服务
- --only - 只操作配置文件中的指定服务

#### 添加自启
```
//添加系统启动
pm2 startup centos

//保存
pm2 save
```

#### 查看日志
```
//查看全部服务
pm2 logs 

//查看指定 APP-NAME  服务日志
pm2 logs APP-NAME 

//重新加载日志
pm2 reloadLogs

//清空全部日志
pm2 flush
```