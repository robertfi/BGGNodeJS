var app = require('http'),
    fs = require('fs');
 
var names = {};
 
var server = app.createServer( function (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html file');
            }
            res.writeHead(200);
            // return index.html contents to client
            res.end(data);
        });
});
server.listen(process.env.PORT);