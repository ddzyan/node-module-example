参考网址：https://www.npmjs.com/package/redis

### 安装
```bash
npm install --save redis redlock
```

### 更新内容
#### 2018-12-17
1. 完成redis本地连接
2. 选择数据库
3. 创建key
4. 创建hash和读取

#### 2018-12-18
1. 增加错误，连接成功，退出监听
2. 添加promise，实现同步
3. 实现string,hash数据结构的存储