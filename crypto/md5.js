const crypto = require("crypto");

const algorithm = "md5";
const MD5Encryption = function(data, key) {
  const encryption = crypto.createHash(algorithm, key); //创建指定加密算法的对象
  let encryptionted = encryption.update(data).digest("hex");
  return encryptionted;
};

const data = "12312";
const key = "d9oq0A3vooaDod8X";
const encrypted = MD5Encryption(data, key);

console.log("%s 加密后：", data, encrypted);
