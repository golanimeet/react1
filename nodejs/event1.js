var http = require('http');
var events = require('events');
var em = new events.EventEmitter();
var server = http.createServer(function (request, response) {
     response.writeHead(200, { 'content-type': 'text/html' });
     if (request.url == "/start") {
          em.once('startLearning', (data) => { // Use 'once' instead of 'on' to listen only once
               console.log("I have Started Learning " + data);
          });
          em.emit("startLearning", "javascript");
          response.write("Learning Started ");
     }
     else if (request.url == '/complete') {
          em.once('completeLearning', (data) => { // Use 'once' instead of 'addListener' to listen only once
               console.log("I have Completed Learning " + data)
          });
          em.emit("completeLearning", "javascript");
          response.write("Learning Completed ");
     }
     response.end();
});
server.listen(5000);
console.log("Server ready ");
