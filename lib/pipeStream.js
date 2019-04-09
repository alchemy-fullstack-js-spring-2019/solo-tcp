const fs = require('fs');
const rs = fs.createReadStream('./1_streams.md');
const ws = fs.createWriteStream('./copiedStreams.md');

ws.on('pipe', (src) => {
    console.log('something is piping into the writer');
}); 

rs.pipe(ws);