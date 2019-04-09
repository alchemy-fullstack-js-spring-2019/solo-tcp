const fs = require('fs');

const ws = fs.createWriteStream('./spot.json');


ws.write('{');
ws.write('\n\t');
ws.write('"name":"spot",');
ws.write('\n\t');
ws.write('"age":"12",');
ws.write('\n\t');
ws.write('"profession":"Very Good Boy",');
ws.write('\n\t');
ws.write('"hobby":"walking"');
ws.write('\n');
ws.write('}\n');

ws.end();
