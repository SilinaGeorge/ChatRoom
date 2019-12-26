import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client'
import './Room.css';

import Header from '../Header/Header'
import MessageBar from '../MessageBar/MessageBar'
import DisplayMessages from '../DisplayMessages/DisplayMessages'
import UserList from '../UserList/UserList'


let socket;

// chat room
const Room = () => {

    const [username, setUsername] = useState('');
    const [roomname, setRoomname] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    const usernameSelector = useSelector((state) => state.username)
    const roomnameSelector = useSelector((state) => state.roomname)
    const URL = 'localhost:5000'

    useEffect(() => {
        socket = io(URL)

        setUsername(usernameSelector)
        setRoomname(roomnameSelector)
        console.log(socket)
        socket.emit('enter', { username: usernameSelector, roomname: roomnameSelector }, () => {

        });

        //unmounting
        return () => {
            socket.emit('disconnect') //leaving chat
            socket.off() // turn off instance of socket
        }

    }, [URL, usernameSelector, roomnameSelector]); // useEffect will only execute when any of these 3 variables change

    // listen for new messages and new users
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])

        })

        socket.on('usersInRoom', (userList) => {
            setUsers(userList)

        })

    }, [messages])



    //send message
    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => {
                setMessage('')
            })
        }
    }


    return (

        <div className='container-fluid'>
            <div>
                <Header roomname={roomname}></Header>
            </div>
            <div className='row'>
                <div className='col-2'>
                    <UserList userList={users}></UserList>
                </div>

                <div className='col-10'>
                    <DisplayMessages messages={messages} username={username}></DisplayMessages>
                   

                </div>
            </div>
            <div>
            <MessageBar message={message} setMessage={setMessage} sendMessage={sendMessage}></MessageBar>

            </div>

        </div>

    )
}

export default Room