var socket= io();

    socket.on('connect', function()  {
        console.log('Terhubung ke server');

        
    });

    socket.on('disconnect', function() {
        console.log('Tidak bisa Terhubung ke server');
    });

    socket.on('newMessage', function(message){
        console.log('newMessage', message);
    });