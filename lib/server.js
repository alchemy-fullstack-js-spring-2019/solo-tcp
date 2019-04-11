const net = require('net');
//every client is a socket
const server = net.createServer(client => {
  console.log('client connected');
  client.on('data', data => {
    client.write(`ECHO FROM SERVER: ${data}`);
  });
  client.on('end', () => {
    console.log('client disconnected');
  });
});

server.listen(5050);
