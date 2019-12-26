import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message'



const DisplayMessages = ({messages, username}) => (
 
   <div style={{maxHeight:window.innerHeight - 140 + 'px', overflowY:'auto' }}>
         {
         messages.map((message, i) => (
            <div key={i}><Message message={message} currentUser={username}></Message></div>
         )

         )
    }
        
   </div>
  


    
)

export default DisplayMessages;