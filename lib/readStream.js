const fs = require('fs');

// streams data to us
const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8' //will encode buffer into words
  // default highWaterMark is 64 * 1028
  // highWaterMark is how big your chunk is
});

// read stream and gives back data as a buffer
rs.on('data', data => {
  console.log(data);
});
