const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = net.createConnection(9990, 'localHost', () => {
  /*eslint-disable-next-line*/
  console.log('I am connected');
  
  rl.prompt();
  rl.on('line', line => {
    /*eslint-disable-next-line*/
    console.log('client line', line);
    client.write(line);
    rl.prompt();
  });
});

client.on('data', data => {
  /*eslint-disable-next-line*/
  console.log(`\n${data.toString()}`);
  rl.prompt();
});
