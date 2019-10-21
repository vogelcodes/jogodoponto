var express = require('express');
var socket = require('socket.io');


//App start
var app = express();
var port = process.env.PORT || 3000;
var server = app.listen(port, function(){
    console.log('listening to requests on port 3000');
})

//Static files

app.use(express.static('public'));
//Socket setup
var io = socket(server);
io.on('connection', function(socket){
    console.log('made socket connection', socket.id);
    //Handle Chat event
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    //Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    });
    socket.on('cleartyping', function(data){
        socket.broadcast.emit('cleartyping', data)
    });
});