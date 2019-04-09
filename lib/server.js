const net = require('net');
//every client is a socket
const server = net.createServer(client => {
    console.log('client connected');
    client.on('data', data => {
        const newString = data.toString().charAt(0).toUpperCase();
        client.write(`ECHO FROM SERVER: ${newString}`);
    });
});

server.listen(5050);