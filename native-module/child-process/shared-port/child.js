const http = require("http");

function fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
const server = http.createServer(function(req, res) {
  console.log(`handled by child ,pid is ${process.pid}`);
  fibonacci(20);

  res.writeHead(200, { "Content-Type": "text/palin" });
  res.end(`handled by child ,pid is ${process.pid} \n`);
});

process.on("message", function(m, tcp) {
  if (m === "server") {
    tcp.on("connection", function(socket) {
      server.emit("connection", socket);
    });
  }
});

console.log("child start process.pid :", process.pid);
