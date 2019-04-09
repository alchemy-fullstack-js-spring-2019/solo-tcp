const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
    flags: 'w'
});

ws.write('{');
ws.write('\n\t');
ws.write('"name": "spot",');
ws.write('\n\t');
ws.write('"age": 15,');
ws.write('\n\t');
ws.write('"weight": 15');
ws.write('\n');
ws.write('}');


ws.end();
