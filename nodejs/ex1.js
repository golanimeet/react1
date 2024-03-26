var http = require('http');
var server = http.createServer(function(request,response){

    function printTriangle(height) {
        for (let i = 1; i <= height; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += '*';
            }
            console.log(row);
        }
    }
    
    const height = 5; // You can change the height of the triangle
    printTriangle(height);

});
server.listen(5000);
console.log("server ready...");
