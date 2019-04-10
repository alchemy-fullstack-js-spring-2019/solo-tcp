const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8',
  highWaterMark: 2
});

rs.on('data', data => {
  /*eslint-disable-next-line */
  console.log('chunk', data);
});
