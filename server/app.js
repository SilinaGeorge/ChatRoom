// imports
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const app = express();

// create socket and server
const server =http.createServer(app);
const io = socketio(server);

io.on('connection', (socket)=>{
    console.log('new socket connection')

    socket.on('disconnect', () =>{
        console.log('socket has been disconnected')
    })

});


app.use(router);
const port = process.env.PORT || 5000;
server.listen( port, ()=> console.log('listening on 5000'));



