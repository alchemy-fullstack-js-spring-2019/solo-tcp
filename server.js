const net = require('net');

const allClients = [];

const server = net.createServer(connectedClient => {
  console.log('client connected with server listening on 7890');
  allClients.push(connectedClient);

  connectedClient.on('data', data => {
    connectedClient.write(`ECHO FROM SERVER: ${data}`);
  });
  connectedClient.end('end', () => {
    console.log('server disconnected');
  });
});

server.listen(7890);
