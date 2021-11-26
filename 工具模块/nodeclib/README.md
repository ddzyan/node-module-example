# 简介

nodejs 调用动态库 so。

## 目的

由于 nodejs 代码即使使用混淆也容易被破解，可以结合 so 库不容易破解的特点实现部分加密算法的安全性。

# npm 依赖

- ode-gyp
- ffi bindings

# 操作方法

## 前提

由于 node-gyp 不支持 Python 3.x，系统需要安装 python 2.7 版本。
gcc 版本至少高于 4.8

```bash
# 安装依赖
npm i node-gyp --save
npm i ffi bindings --save

# 编译.so文件
cd nodeclib
Makefile
cp libdemo.so  /usr/lib/
ldd *

# 测试
cd ..
node ./index.js
2019-04-17T08:24:25.492Z
1111111110
2019-04-17T08:24:25.498Z
```
