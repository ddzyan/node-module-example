const axios = require('axios');

/**
 * axios支持 post , get ,put ,delete等方法
 * 默认为 get,axios("www.baidu.com")
 */

async function getMethod(url, pamars) {
  const result = await axios.get(url, {
    pamars
  });
  return result.data;
}

async function gpostMethod(url, pamars) {
  const result = await axios.post(url, pamars);
  return result.data;
}

/**
 * 并发执行全部请求
 */
async function asyncMethod(...pamars) {
  const result = await axios.all(pamars);
  return result.data;
}

module.exports = {
  getMethod,
  gpostMethod,
  asyncMethod
};
