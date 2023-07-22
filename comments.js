// Create a web server that can respond to requests for /comments.json with the contents of commentsFile. Use the fs module to read the file. Remember to set the Content-Type header.

var http = require('http');
var fs = require('fs');
var port = 8080;

var commentsFile = 'comments.json';

var server = http.createServer(function(request, response) {
  if (request.url === '/comments.json') {
    fs.readFile(commentsFile, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        response.setHeader('Content-Type', 'application/json');
        response.end(data);
      }
    });
  } else {
    response.statusCode = 404;
    response.end('Not Found');
  }
});

server.listen(port, function() {
  console.log('Listening on port', port);
});
