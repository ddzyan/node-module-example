const crypto = require('crypto');

/**
 * aes加密
 * @param data 待加密内容
 * @param key 必须为16位私钥
 * @param iv 向量
 * @returns {string}
 */
const encryption = function(data, key, iv = '') {
  if (!data && key.length == 16) {
    console.error('parameter error');
    return '';
  }
  const algorithm = 'aes-128-ecb'; //算法
  const clearEncoding = 'utf8'; //字符串编码
  const cipherEncoding = 'base64';
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
const decryption = function(data, key, iv = '') {
  if (!data && key.length == 16) {
    console.error('parameter error');
    return '';
  }
  const clearEncoding = 'utf8';
  const cipherEncoding = 'base64';
  const algorithm = 'aes-128-ecb';
  const decipher = crypto.createDecipheriv(algorithm, key, iv); // 创建解密对象

  let decryption = decipher.update(data, cipherEncoding, clearEncoding);
  decryption += decipher.final(clearEncoding);
  return decryption;
};

const data = '3ik3FCGhWHNzofdJUNNaPtCbhX5Km7YFBjxjdJUzCb1Q';
const key = ' '; // key 必须为16位字符串

const encryptedData = '//nKACT5gz/mVHWAZSMV2hib826Tdn6UXD5vUHcpQFlrogyPKrUqSutMcag=';
console.log('\n%s \n加密后：', data, encryptedData);

const decryptionData = decryption(encryptedData, key);
console.log('\n%s \n解密后：', encryptedData, decryptionData);
