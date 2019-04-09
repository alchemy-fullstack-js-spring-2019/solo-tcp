const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
  encoding: 'utf8',
  highWaterMark: 64 * 1028
});

ws.write('D');
ws.write('O');
ws.write('G');

ws.write('{');
ws.write(' ');
ws.write('n');
ws.write('a');
ws.write('m');
ws.write('e');
ws.write(':');

ws.write(' ');
ws.write('\'');
ws.write('S');
ws.write('p');
ws.write('o');
ws.write('t');
ws.write('\'');
ws.write(' ');
ws.write('}');
ws.write(';');

ws.end();
