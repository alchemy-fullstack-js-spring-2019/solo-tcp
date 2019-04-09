const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8',
  highWaterMark: 2  //how many characters per chunk
});

//the data event
rs.on('data', data => {
  console.log('chunk', data);
});



