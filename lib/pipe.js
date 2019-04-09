const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', { encoding: 'utf8' });

const ws = fs.createWriteStream('./LAB-copy-2.md', {
    flags: 'w'
});

rs.pipe(ws);

rs.on('end', () => {
    ws.end();
});
