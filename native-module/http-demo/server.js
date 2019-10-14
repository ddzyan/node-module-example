const http = require('http');
const qs = require('querystring');
const fs = require('fs');

const server = http.createServer(/* (req, res) => {
  let body = '';
  req.setEncoding('utf8');
  // 如果添加了监听器，则可读流会触发 'data' 事件。
  req.on('data', chunk => {
    body += chunk;
  });

  // 'end' 事件表明整个请求体已被接收。
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      // 响应信息给用户。
      res.write(typeof data);
      res.end();
    } catch (er) {
      // json 解析失败。
      res.statusCode = 400;
      return res.end(`错误: ${er.message}`);
    }
  });
} */);

server.on('request', (req, res) => {
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
          console.log('正在读取');
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

server.listen(3000, '127.0.0.1', () => {
  console.log('服务启动成功');
});
