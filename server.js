const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  let myData = [];
  req.on('data', (chunk) => {
    myData.push(chunk);
  });
  req.on('end', () => {
    myData = Buffer.concat(myData).toString();
    console.log(`Got request: ${myData}`);
    res.end('be quiet');
  });
});

server.listen(5500, () => {
  console.log('listening on port 5500');
});
