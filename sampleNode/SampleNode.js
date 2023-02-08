console.log("Sample Node using servers")
const servers =require('http')
servers.createServer(function(request,response){response.writeHead(200,{'Content-type':'text/plain'});
response.end('Hello All');}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
