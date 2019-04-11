const net = require('net');

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
