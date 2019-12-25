import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client'

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

    },[URL, usernameSelector, roomnameSelector]); // useEffect will only execute of these 3 variables change

    // update messages 
    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages, message])

        }, [messages])
    })

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
            <div>
                <input value={message}
                onChange={(event)=> setMessage(event.target.value)}
                onKeyPress={(event) => event.key == 'Enter'? sendMessage(event): null}
                
                />
                    
               
            </div>
        </div>
    )
}

export default Room