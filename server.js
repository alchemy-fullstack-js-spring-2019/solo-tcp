const net = require('net');
const server = net.createServer(client => {
  console.log('client connected!');

  const allClients = [];

  const server = net.createServer(connectedClient => {
    console.log('client connected!');
    allClients.push(connectedClient);
    
  connectedClient.on('data', data => {
    allClients.forEach(client => {
      client.write(`ECHO FROM SERVER: ${data}`);
    });
  });
});
// every client is a socket (node js calls it a socket)
// sockets are when clients request data from you
