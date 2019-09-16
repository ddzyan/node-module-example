const http = require('http');

const server = http.createServer((req, res) => {
  res.end('hello word');
});

server.listen(3000, () => {
  console.log('服务启动成功');
});
