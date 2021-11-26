## 简介
koa-await-breakpoint 是一个 Koa 的中间件，是一个在 routes/controllers 里（作用域包含 ctx）的 await 表达式前后自动打点的工具，不用插入一行日志打点代码，只需要在引入时配置一下，就可以记录每个请求到来时 await 表达式前后的现场，例如：

1. await 表达式所在的文件及行列号（filename）。
2. await 表达式是执行的第几步（step）。
3. await 表达式字符串形式（fn）。
4. 执行 await 表达式所花费的毫秒（take）。
5. 执行 await 表达式的结果（result）。
6. 当前请求的 ctx。

## 使用
```sh
npm i 

node ./app
```

## 注意
注意：type 是以下其中一种，take 的单位是 ms。

-  start：请求到来时第 1 次打点。
- beforeAwait：上一个 awaitExpression 之后到这一个 awaitExpression 之前。
- afterAwait：这个 awaitExpression 开始到结束。
- error：错误日志，包含了错误信息。
- end：请求结束时打点。


