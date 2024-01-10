// imports
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');
const cors = require('cors')
require("dotenv").config();

const {addUser, getUser, removeUser, getRoomUsers} = require( './users.js')

const app = express();

// create socket and server
const server =http.createServer(app);
const io = socketio(server,
    {
        cors: {
            origin: [process.env.CLIENT_URL],
            credentials:true, 
            transports: ['websocket', 'polling'],
        },
        allowEIO3: true
      } );

io.on('connection', (socket)=>{

    // user enters a room
    socket.on('enter', ({username, roomname}, callback) =>{

        // add user to room
        const {error, newUser} = addUser({id: socket.id, username, roomname})

        if (error) return callback({error})

        // send message to new user
        socket.emit('message', {username: 'auto', text:`Hi ${newUser.username} welcome to ${newUser.roomname}`})
        
        // send everyone in the room a message except new user
        socket.broadcast.to(newUser.roomname).emit('message',{username:'auto', text:`${newUser.username} has joined the chat`})
        
        //joins user in a room
        socket.join(newUser.roomname)

        // emit users in room
        io.to(newUser.roomname).emit('usersInRoom', {roomname: newUser.roomname, users: getRoomUsers(newUser.roomname)})

        callback();
        
    })

    // user sends a message in chat room
    socket.on('sendMessage', (message, callback) =>{
        const user = getUser(socket.id)

        //emit the message
        io.to(user.roomname).emit('message',{username: user.username, text:message});

        // emit users in room
        io.to(user.roomname).emit('usersInRoom', {roomname: user.roomname, users: getRoomUsers(user.roomname)})

        callback();
    })

    // user leaves room
    socket.on('disconnect', () =>{
        const user = removeUser(socket.id)

        if (user){

            // send message to everyone in chat 
            io.to(user.roomname).emit('message', {username:'auto', text:`${user.username} has left the chat`})

            // emit users in room
            io.to(user.roomname).emit('usersInRoom', {roomname: user.roomname, users: getRoomUsers(user.roomname)})
        }
    })

});


app.use(router);
const port = process.env.PORT || 5000;
server.listen( port, ()=> console.log('listening on 5000'));



