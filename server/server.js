const path = require('path');
const http = require ('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT ||3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('Terhubung ke user baru');

    socket.emit('newMessage',{
        from: 'Andi',
        text: 'Hallo, kita sedang belajar node.js',
        createAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });
});



server.listen(port, () => {
    console.log('Server sudah di up ke port ', port);
});