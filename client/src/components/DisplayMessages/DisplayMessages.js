import React from 'react'
import ScrollToBottom from "react-scroll-to-bottom"
import Message from '../Message/Message'

const DisplayMessages = ({messages, username}) => (
 <ScrollToBottom>
         {
         messages.map((message, i) => (
            <div key={i}><Message message={message} currentUser={username}></Message></div>
         )

    )
    }
        
    

 </ScrollToBottom>

    
)

export default DisplayMessages;