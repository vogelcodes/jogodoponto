var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


//App start
app.get('/', function (req, res){
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);
});
var port = process.env.PORT || 3000;
var server = http.listen(port, function(){
    console.log('listening to requests on port 3000');
});

//Static files

app.use(express.static('public'));
//Socket setup

io.on('connection', function(socket){
    console.log();
    //Handle Chat event
    io.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    //Handle typing event
    io.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    });
    io.on('cleartyping', function(data){
        socket.broadcast.emit('typing', data)
    });
});