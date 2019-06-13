const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({
  xfwd: true,
  secure: false,
  preserveHeaderKeyCase: true,
  proxyTimeout: 10000
});
http
  .createServer(function(req, res) {
    proxy.web(req, res, { target: 'http://127.0.0.1:5060' }, function(e) {
      console.log(e);
    });
  })
  .listen(3000);
