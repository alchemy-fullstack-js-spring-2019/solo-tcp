const fs = require('fs');
const ws = fs.createWriteStream('./spot.json', {flag: 'r+'});

ws.write('{');
ws.write('"name":');
ws.write('"spot"');
ws.write(',')
ws.write('"type":');
ws.write('"dog"');
ws.write('}');
ws.end();