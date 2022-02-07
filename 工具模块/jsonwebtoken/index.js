const jwt = require("jsonwebtoken");
const tools = require("./tools");
const secretKey = "123456";

const token = jwt.sign(
  {
    username: "bar",
    password: "123456"
  },
  secretKey,
  { expiresIn: 60 * 60 }
);

console.log("加密完成 token", token);

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 --- header
eyJ1c2VybmFtZSI6ImJhciIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNTk2NDM4MzMzLCJleHAiOjE1OTY0NDE5MzN9 --- claims
Fd9Kdo5PUUbgBPqIsOQu99jXMiPnmoOh2IGOpJ7tiME --- signature
*/

// 错误将直接抛出异常
const decoded = jwt.verify(token, secretKey);
console.log("解密完成 decoded", decoded);
/*
 {
  username: 'bar',
  password: '123456',
  iat: 1596438439, // 构建时间
  exp: 1596442039 // 过期时间
 }
 */

const tokenArr = token.split(".");
// 第一部分声明类型，以及签名使用的算法
// 解析token header {"alg":"HS256","typ":"JWT"} 表示 签名使用的是 HS256 算法
const header = tools.base64Decode(tokenArr[0]);
console.log("解析token header", header);
// 第二部分表示要发送的用户信息
// 解析token claims {"username":"bar","password":"123456","iat":1596438988,"exp":1596442588}
const claims = tools.base64Decode(tokenArr[1]);
console.log("解析token claims", claims);
// 第三部分使用特定的算法对 Header 和 Claims 进行混淆产生的签名信息，接收方用来验证信息是否被篡改的依据
// 下面方法仅为demo，因为加密内容与 jsonwebtoken 使用的不一致
console.log(
  "解析token signature",
  tools.sha256Encryption({ header, claims }, secretKey)
);
