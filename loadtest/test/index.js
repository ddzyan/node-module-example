const loadtest = require('loadtest');

const options = {
  url: 'http://127.0.0.1:3000',
  concurrency: 5, //并发数量
  method: 'POST',
  body: '',
  requestsPerSecond: 10, //每秒发送的请求数量
  maxSeconds: 10, // 运行测试的结束时间
  requestGenerator: (params, options, client, callback) => {
    const message = '{"hi": "ho"}';
    options.headers['Content-Length'] = message.length;
    options.headers['Content-Type'] = 'application/json';
    options.body = '';
    options.path = '/';
    const request = client(options, callback);
    request.write(message);
    return request;
  }
};

loadtest.loadTest(options, (error, results) => {
  if (error) {
    return console.error('Got an error: %s', error);
  }
  console.log(results);
  console.log('Tests run successfully');
});
