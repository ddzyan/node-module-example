const crypto = require("crypto");
const md5 = require("md5");

const algorithm = "md5";
const MD5Encryption = function(data, key) {
  const encryption = crypto.createHash(algorithm); //创建指定加密算法的对象
  let encryptionted = encryption.update(data).digest("hex");
  return encryptionted;
};

const data = "ddzyan101";
const key = "Kzaa8qpm";
const message = data + key;
const encrypted = MD5Encryption(message);

console.log("%s 加密后：", message, encrypted);

console.log("%s 使用Md5模块加密后：", message,md5(message));
