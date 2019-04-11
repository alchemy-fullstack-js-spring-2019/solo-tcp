const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});


const client = net.createConnection(5500, '192.168.1.74', () => {
  console.log('i am connected');
  
  rl.prompt();
  rl.on('line', line => {
    client.write(line);
    rl.prompt();
  });
});

client.on('data', data => {
  // rl.write(data);
  console.log(`\n${data.toString()}`);
  rl.prompt();
});
