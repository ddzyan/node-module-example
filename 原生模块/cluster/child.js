const http = require("http");

const server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/palin" });
  res.end("child processId" + process.pid);
});

server.listen(1377);
