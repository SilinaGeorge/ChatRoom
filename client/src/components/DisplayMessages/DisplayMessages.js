import React from 'react'
import Message from '../Message/Message'

const DisplayMessages = ({messages, username}) => (
 
   
   <div id='messagesDiv' style={{maxHeight:window.innerHeight - 140 + 'px', overflowY:'auto' }}>
      
         {messages.map((message, i) => (

            <div key={i}><Message message={message} currentUser={username}></Message></div>
            
         ))}
          
   </div>
)

export default DisplayMessages;