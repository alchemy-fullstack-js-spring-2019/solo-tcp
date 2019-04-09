const fs = require('fs');
const rs = fs.createReadStream('./spot.json');
const ws = fs.createWriteStream('./copiedSpot.json');

rs.on('data', data => {
    ws.write(data);
});

rs.on('end', () => {
    ws.end();
});