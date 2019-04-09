const net = require('net');

//local host would be your ip address if you want other people to connect to your server
const client = net.createConnection(5504, 'localhost', () => {
    console.log('I am connected');
    client.write('hello I am megan');
});
