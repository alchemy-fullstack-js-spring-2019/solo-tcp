const net = require('net');

const server = net.createServer(() => {
  console.log('client connecter');
});

server.listen(5500);
