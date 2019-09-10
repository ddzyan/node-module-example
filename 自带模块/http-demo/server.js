const http = require('http');
const qs = require('querystring');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const method = req.method;
  const [url, paramsUrl] = req.url.split('?');
  if (method === 'GET') {
    const params = qs.parse(paramsUrl);
    console.log('接收到 GET 请求 params:', params);
    switch (url) {
      case '/getInfo':
        res.end('hello word getInfo');
        break;
      default:
        res.end('404 路径错误');
    }
  } else if (method === 'POST') {
    switch (url) {
      case '/fileDown':
        const readStream = fs.createReadStream('./downFile.txt', { encoding: 'utf-8' });
        readStream.on('data', data => {
          console.log('正在读取 :', data);
        });

        readStream.on('end', () => {
          console.log('读取完成');
        });

        readStream.on('error', error => {
          console.error('读取失败', error);
          readStream.close();
        });
        readStream.pipe(res);

        break;

      default:
        res.end('404 路径错误');
    }
  }
});

app.listen(3000, '127.0.0.1', () => {
  console.log('服务启动成功');
});
