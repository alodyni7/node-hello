const http = require('http');
const port = process.env.PORT || 3000;
var express = require('express'),
    app = express(),
    server = require('http').createServer(app);
const miniget = require('miniget');
/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});
*/

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
app.get("/",function (req, res){
            res.send("");
})
