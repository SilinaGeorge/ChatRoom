// imports
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const {addUser, getUser, removeUser, getRoomUsers} = require( './users.js')

const app = express();

// create socket and server
const server =http.createServer(app);
const io = socketio(server);

io.on('connection', (socket)=>{
    console.log('new socket connection')

    socket.on('enter', ({username, roomname}, callback) =>{
        const {error, newUser} = addUser({id: socket.id, username, roomname})

        if (error) return callback({error})

        // send message to new user
        socket.emit('message', {username: 'auto', text:`Hi ${newUser.username} Welcome to ${newUser.roomname}`})
        
        // send everyone in the room a message except new user
        socket.broadcast.to(newUser.roomname).emit('message',{username:'auto', text:`${newUser.username} has joined the chat`})
        
        //joins user in a room
        socket.join(newUser.roomname)

        callback();
        
    })

    socket.on('sendMessage', (message, callback) =>{
        const user = getUser(socket.id)

        io.to(user.roomname).emit('message',{username: user.username, text:message});

        callback();
    })

    socket.on('disconnect', () =>{
        console.log('socket has been disconnected')
    })

});


app.use(router);
const port = process.env.PORT || 5000;
server.listen( port, ()=> console.log('listening on 5000'));



