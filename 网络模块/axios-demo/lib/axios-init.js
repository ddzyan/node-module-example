const axios = require('axios');
const assert = require('assert');

/** 
 * 返回的数据格式
  {
    data: {},
    statusText: 'OK',
    headers: {},
    request: {}
  }
**/
class Instance {
  constructor({ baseURL, timeout = 1000, headers = {}, params = [] }) {
    assert(baseURL, 'baseURL 不能为空');
    if (!this.axiosInstance) {
      this.axiosInstance = axios.create({
        baseURL,
        timeout,
        headers,
        params
      });
    }
  }

  async getMethod(url, pamars) {
    try {
      const result = await this.axiosInstance.get(url, {
        pamars
      });
      return result.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }

      throw error;
    }
  }

  async postMethod(url, pamars) {
    try {
      const result = await axiosInstance.post(url, pamars);
      return result.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }

      throw error;
    }
  }
}

module.exports = Instance;
