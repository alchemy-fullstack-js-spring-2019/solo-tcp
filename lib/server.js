const net = require('net');


//every client is a socket
//client in this doc is a connected client -we're writing to a connected client

const allClients = [];

const server = net.createServer(client => {
    console.log('client connected!');
    allClients.push(client);
    client.on('data', data => {
        console.log(data);
        allClients.forEach(client => {
            client.write(`ECHO FROM SERVER: ${data}`);
        });
    });
});

server.listen(5504);
