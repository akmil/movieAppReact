var express = require('express');
var server = express();
var port = 8080;

server.use('/public', express.static(__dirname + '/public'));

server.get('/*', function(req, res){
    res.sendFile(__dirname + './../index.html');
});

server.get('/workers', function (req, res) {
    res.send('Hello World')
})

server.listen(port, function() {
    console.log('server listening on port ' + port);
});

// server.listen(8080, () => console.log('Example app listening on port 3000!'))