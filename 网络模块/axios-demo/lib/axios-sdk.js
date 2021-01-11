const axios = require('axios');

/**
 * axios支持 post , get ,put ,delete等方法
 * 默认为 get,axios("www.baidu.com")
 */

async function getMethod(url, params) {
  const result = await axios.get(url, {
    params,
  });
  return result.data;
}

async function postMethod(url, params) {
  const result = await axios.post(url, params);
  return result.data;
}

/**
 * 并发执行全部请求
 */
async function asyncMethod(...params) {
  const result = await axios.all(params);
  return result.data;
}

module.exports = {
  getMethod,
  postMethod,
  asyncMethod,
};
