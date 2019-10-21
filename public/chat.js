// Make connection
var socket = io.connect('http://crewrpg-com.umbler.net:3000');

//Query DOM
 var message = document.getElementById('message'),
     handle = document.getElementById('handle'),
     output = document.getElementById('output'),
     btn = document.getElementById('send'),
     feedback = document.getElementById('feedback');

//Emit events

    btn.addEventListener('click', function(){
        var d = new Date();
        var time = d.getHours() + ':' + d.getMinutes();
        socket.emit('chat', {
            message: message.value,
            handle: handle.value,
            time: time
        });
        socket.emit('cleartyping', handle.value);
    });
    message.addEventListener('keypress', function(){
        socket.emit('typing', handle.value);
    });
    
//Listen  for events

    socket.on('chat', function(data){
        var d = new Date();

        output.innerHTML += '<p><strong>' + data.time + ':'+ data.handle + ':</strong>' + data.message + '</p>';
    });
    socket.on('typing', function(data){
        feedback.innerHTML='<p><em>' + data + ' is typing a message..</p></em>'
    });
    socket.on('cleartyping', function(data){
        feedback.innerHTML='<p><em>  </p></em>'
    });