const http = require('http');
const qs = require('querystring');

const postMethod = () => {
  const req = http.request(
    {
      host: '127.0.0.1',
      port: 3000,
      path: '/fileDown',
      method: 'POST'
    },
    res => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', chunk => {
        rawData += chunk;
      });

      res.on('end', () => {
        console.log('接收完成');
      });
    }
  );

  req.on('error', error => {
    console.error(error);
  });

  req.end();
};
const getMethod = () => {
  const data = {
    a: 123,
    time: new Date().getTime()
  }; //这是需要提交的数据

  // 将对象转换为 url 查询字符串
  const content = qs.stringify(data);
  const option = {
    host: '127.0.0.1',
    port: 3000,
    path: '/getInfo?' + content,
    method: 'GET'
  };

  const req = http.request(option, res => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', chunk => {
      rawData += chunk;
      console.log('chunk :', chunk);
    });

    res.on('end', () => {
      console.log('接收完成', rawData);
    });
  });

  req.on('error', error => {
    console.error(error);
  });

  req.end();
};

getMethod();
postMethod();
