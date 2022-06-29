const http = require('http');
const fs = require("fs");
const home = fs.readFileSync("./indexhome.html")
const css = fs.readFileSync("./style.css");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(home);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});