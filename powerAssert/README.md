# 简介
代码仓库：https://github.com/power-assert-js/power-assert

使用power-assert，不需要学习许多断言库API，比如复杂的expect

提供标准的测试信息，方便定位问题
```bash
 1) Array #indexOf() should return index when the value is present:
     AssertionError: # path/to/test/mocha_node.js:10

  assert(ary.indexOf(zero) === two)
         |   |       |     |   |
         |   |       |     |   2
         |   -1      0     false
         [1,2,3]

  [number] two
  => 2
  [number] ary.indexOf(zero)
  => -1
```

## 使用
```bash
npm install --save-dev mocha power-assert intelli-espower-loader

npm i 

npm run test
```
