var express = require('express');
var app = express();
var http = require('http').Server(app) ;
var io = require('socket.io')(http) ;


app.set('view engine', 'ejs');

http.listen(80, function(){
    console.log('listening on *:80');
});

app.get('/', function(req, res) {
  res.render('index', {});
});

app.get('/work', function(req, res) {
  res.render('work', {});
});

app.get('/about', function(req, res) {
  res.render('about', {});
});

app.get('/art', function(req, res) {
  res.render('art', {});
});

app.get('/aquarium', function(req, res) {
  res.render('janet', {});
});


app.use(express.static(__dirname + '/public'));

io.sockets.on('connection', function (socket) {

  socket.on('chat', function(data){
    io.sockets.emit('chat', data)
  })

  socket.on('color', function(data){
    io.sockets.emit('color', data)
  })

})
