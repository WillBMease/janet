var express = require('express');
var app = express();
var http = require('http').Server(app) ;
var io = require('socket.io')(http) ;


app.set('view engine', 'ejs');

http.listen(8888, function(){
    console.log('listening on *:8888');
});


app.get('/', function(req, res) {
    res.render('janet', {

    });
});
