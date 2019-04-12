const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md');

const ws = fs.createWriteStream('./write-duplex.json');

rs 
  .pipe(ws);
