## 简介
sequelize orm模型使用demo

### 使用
```bash
npm i

npm i mocha -g

mocha
```

### 更新记录
#### [2018-12-25]
1. 创建sequelize实例
2. 创建 2张表，关系为1对多
3. 循环遍历文件夹，创建model对象
4. 通过sync方法，在mysql中创建表
5. 添加sequlize配置文件,添加sequelize-auto模块使用方法

#### [2018-12-26]
1. 添加dao实例对象，用来操作model。
2. 添加测试用例