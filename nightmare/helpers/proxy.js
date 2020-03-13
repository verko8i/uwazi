const http = require('http');
const https = require('https');
const httpProxy = require('http-proxy');
const url = require('url');
const net = require('net');

const proxy = httpProxy.createServer({
  ws: true,
});

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);

  const target = `${parsedUrl.protocol}//${parsedUrl.hostname}:${parsedUrl.port}`;
  proxy.web(req, res, { target, secure: false });
});

https
  .createServer((req, res) => {
    console.log('HTTPS SERVER REQUEST');

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('{}');
    res.end();
  })
  .listen(3002);

server.on('connect', (req, socket) => {
  if (req.url.includes('localhost')) {
    return;
  }
  console.log('Receiving reverse proxy request for:' + req.url);
  const serverUrl = url.parse('https://' + req.url);

  const srvSocket = net.connect(3002, 'localhost', () => {
    socket.write(
      'HTTP/1.1 200 Connection Established\r\n' + 'Proxy-agent: Node-Proxy\r\n' + '\r\n'
    );
    srvSocket.pipe(socket);
    socket.pipe(srvSocket);
  });
});

server.listen(3001);
