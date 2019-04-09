const fs = require('fs');
const ws = fs.createWriteStream('./spot.json', {flags: 'a'});

ws.write('{');
ws.write('\n\t"name": "spot",');
ws.write('\n\t"type": "greyhound",');
ws.write('\n\t"age": "4"')
ws.write('\n}');
ws.end();