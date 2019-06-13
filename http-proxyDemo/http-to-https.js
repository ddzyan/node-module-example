const http = require('http');
const https = require('https');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({
  xfwd: true,
  secure: false,
  preserveHeaderKeyCase: true,
  proxyTimeout: 10000
});
http
  .createServer(function(req, res) {
    proxy.web(req, res, { target: 'https://api.eospark.com', agent: https.globalAgent, preserveHeaderKeyCase: true, headers: { host: 'api.eospark.com' } }, function(e) {
      console.log(e);
    });
  })
  .listen(3000);
