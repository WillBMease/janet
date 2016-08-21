var express = require('express');
var app = express();
var http = require('http').Server(app) ;
var io = require('socket.io')(http) ;


app.set('view engine', 'ejs');

http.listen(8887, function(){
    console.log('listening on *:8887');
});


app.get('/', function(req, res) {
    res.render('janet', {

    });
});


app.use(express.static(__dirname + '/public'));

io.sockets.on('connection', function (socket) {

  socket.on('chat', function(data){
    io.sockets.emit('chat', data)
  })

})
