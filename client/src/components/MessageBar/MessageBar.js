import React from 'react'

const MessageBar = ({message, setMessage, sendMessage}) => (
    <div className="input-group mb-3">
    <input type="text" className="form-control" maxLength='200' placeholder="type your message here, use emojis too"
    value={message}
    onChange={(event)=> setMessage(event.target.value)}
    onKeyPress={(event) => event.key === 'Enter'? sendMessage(event): null}
     ></input>
    <div className="input-group-append">
      <button className="btn btn-secondary" type="button" onClick={(event) => sendMessage(event)}>Send</button>
    </div>
  </div>
)

export default MessageBar;