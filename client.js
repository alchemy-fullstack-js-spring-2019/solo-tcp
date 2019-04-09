const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout,
  prompt: '> '
});


// const client = net.createConnection(7890, '192.168.1.145', () => {
//   console.log('I am connected!');
//   client.write('SOME PEOPLE ARE GETTING AN ERROR AND WE CANNOT FIGURE THAT ISH OUT');
// });

