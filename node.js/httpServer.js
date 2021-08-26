const http = require('http');

http.createServer((req,res) => {
    res.writable('hi');
    res.end()
}).listen(5000,() => console.log('Server running..'))