const net = require('net');

//every client is a socket
const allClients = [];

const server = net.createServer(connectedClient => {
  console.log('client connected with server listening on 7890');
  //client.pipe(client);
  allClients.push(connectedClient);

  connectedClient.on('data', data => {
    connectedClient.write(`ECHO FROM SERVER: ${data}`);
    // console.log(data.toString);  
    // console.log('Client: /`${data}/`');
  });
  connectedClient.end('end', () => {
    console.log('server disconnected');
  });
});

server.listen(7890);
