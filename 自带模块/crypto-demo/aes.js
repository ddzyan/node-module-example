const crypto = require("crypto");

/**
 * aes加密
 * @param data 待加密内容
 * @param key 必须为16位私钥
 * @param iv 向量
 * @returns {string}
 */
const encryption = function(data, key, iv = "") {
  if (!data && key.length == 16) {
    console.error("parameter error");
    return "";
  }
  const algorithm = "aes-128-ecb"; //算法
  const clearEncoding = "utf8"; //字符串编码
  const cipherEncoding = "base64";
  const cipher = crypto.createCipheriv(algorithm, key, iv); // 创建加密对象

  let encrypted = cipher.update(data, clearEncoding, cipherEncoding);
  encrypted += cipher.final(cipherEncoding);
  return encrypted;
};

/**
 * aes解密
 * @param data 待解密内容
 * @param key 必须为16位私钥
 * @param iv 向量
 * @returns {string}
 */
const decryption = function(data, key, iv = "") {
  if (!data && key.length == 16) {
    console.error("parameter error");
    return "";
  }
  const clearEncoding = "utf8";
  const cipherEncoding = "base64";
  const algorithm = "aes-128-ecb";
  const decipher = crypto.createDecipheriv(algorithm, key, iv); // 创建解密对象

  let decryption = decipher.update(data, cipherEncoding, clearEncoding);
  decryption += decipher.final(clearEncoding);
  return decryption;
};

const data = "FYLXp1ecxQ6WCPD4axTotHU9RVfPCBLfSeKx1XSCyvdT";
const key = "X9WOSR8I-V9YJPMC"; // key 必须为16位字符串

const encryptedData = encryption(data, key);
console.log("\n原数据：%s \n加密后：", data, encryptedData);
const decryptionData = decryption(encryptedData, key);
console.log("\n加密数据：%s \n解密数据：", encryptedData, decryptionData);
