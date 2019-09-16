const loadtest = require('loadtest');

const options = {
  url: 'http://127.0.0.1:3000',
  concurrency: 5, // 并发数量
  method: 'POST',
  body: '',
  requestsPerSecond: 10, // 每秒发送的请求数量
  maxSeconds: 10 // 运行测试的结束时间
  /*  requestGenerator: (params, options_1, client, callback) => {
    const message = '{"username": "admin","password":"123456"}'; // poss请求参数
    options_1.headers['Content-Length'] = message.length;
    // options_1.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTY3MTUyMTYwLCJleHAiOjE1NjcxNTUxNjB9.rvNOhlkEfmrGEK4SnXFlvhu77Tk8LxD5sjkn9YkJP9E';
    options_1.headers['Content-Type'] = 'application/json';
    options_1.path = '/loginUser';
    const request = client(options_1, callback);
    request.write(message);
    return request;
  }, */
};

loadtest.loadTest(options, (error, results) => {
  if (error) {
    console.error('Got an error: %s', error);
  } else {
    console.log(results);
    console.log('Tests run successfully');
  }
});
