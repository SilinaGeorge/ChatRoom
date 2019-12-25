import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client'
import './Room.css';

import Header from '../Header/Header'
import MessageBar from '../MessageBar/MessageBar'
import DisplayMessages from '../DisplayMessages/DisplayMessages'


let socket;

// chat room
const Room = () =>{

    const [username, setUsername] = useState('');
    const [roomname, setRoomname] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    const usernameSelector = useSelector((state)=> state.username)
    const roomnameSelector = useSelector((state)=> state.roomname)
    const URL = 'localhost:5000'

    useEffect(()=>{
        socket = io(URL)

        setUsername(usernameSelector)
        setRoomname(roomnameSelector)
        console.log(socket)
        socket.emit('enter', {username: usernameSelector, roomname: roomnameSelector}, ()=>{
            
        });

        //unmounting
        return () =>{
            socket.emit('disconnect') //leaving chat
            socket.off() // turn off instance of socket
        }

    },[URL, usernameSelector, roomnameSelector]); // useEffect will only execute when any of these 3 variables change

    // listen for new messages 
    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages, message])

        })
    }, [messages])

    //send message
    const sendMessage = (event) =>{
        event.preventDefault();

        if (message){
            socket.emit('sendMessage', message,()=>{
                setMessage('')
            })
        }
    }
    console.log(message, messages)

    return (
        <div>
            <Header roomname={roomname}></Header>
            <DisplayMessages messages={messages} username={username}></DisplayMessages>
            <MessageBar message={message} setMessage ={setMessage} sendMessage={sendMessage}></MessageBar>
        </div>
    )
}

export default Room