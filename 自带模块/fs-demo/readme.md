### 文件读取 demo

- 使用 fs 读取文件全部内容，再写入
- 创建读取流和写入流，使用管道进行写入
- 打开文件，读取文件，再写入

#### 结果

```shell
node ./index.js
正在读取
读取结束
readAndWriteOfStream 消耗时间 29
openAndWriteOfFs 消耗时间 40
readAndWriteOfFs 消耗时间 39
```
