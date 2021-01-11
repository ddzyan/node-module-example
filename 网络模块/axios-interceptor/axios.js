const axios = require('axios');

const reportCgi = (res, config) => {
  const { config: conf } = res || { config };
  console.log('response', conf.url, new Date() - conf.requestTime);
};

axios.interceptors.request.use(config => {
  return { ...config, ...{ requestTime: new Date() } };
});

axios.interceptors.response.use(
  response => {
    reportCgi(response);
    return response;
  },
  error => {
    reportCgi(error.response, error.config);
    return error;
  }
);

const main = async function () {
  const res = await axios.get(
    'https://filfox.info/api/v1/message/bafy2bzacedotalbhs6nlsqdxbyu6yqajizqj3nch25m3svyx6tocd4732vzvi'
  );
  console.log(res);
};

main();
