const net = require('net');
const readline = require('readline');
//local host would be your ip address if you want other people to connect to your server
//client is a connection to our server - writing to our server

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

rl.prompt();
rl.on('line', line => {
    console.log(line);
    rl.prompt();
});

const client = net.createConnection(5504, 'localhost', () => {
    console.log('I am connected');
    
    rl.prompt();
    rl.on('line', line => {
        client.write(line);
        rl.prompt();
    });
});

client.on('data', data => {
    console.log(`\n${data.toString()}`);
    rl.prompt();
});
