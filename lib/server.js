const net = require('net');
//every client is a socket
const server = net.createServer(client => {
    console.log('client connected');
    client.pipe(client);
});

server.listen(5050);