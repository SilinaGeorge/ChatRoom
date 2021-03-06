import React from 'react'
const { Emojione } = require('react-emoji-render') ;

const Message = ({ message: { username, text }, currentUser }) => {
    let isSentByCurrentUser = false;

    currentUser = currentUser.trim().toLowerCase();

    if (currentUser === username) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className='d-flex flex-row'>
                    <small style={{align:'center !important'}}>{currentUser}:</small>
                    <div className="card text-white bg-info mb-3 " style={{maxWidth: "40%", minWidth:'25%'}}>
                            <p className="card-text" style={{margin:'2%'}}>
                            <Emojione text={text} />
                         
                            </p>
                      
                    </div>
                </div>
            )
            : (
                <div className=' d-flex flex-row-reverse'>
                    
                    <div className="card bg-light mb-3" style={{maxWidth: '40%', minWidth:'25%'}}>
                            <p className="card-text" style={{margin:'2%'}}>                   
                            <Emojione text={text} />
                            </p>
                  
                    </div>
                    <small style={{align:'center !important'}}>{username}:</small>
                </div>

            )
    )
}

export default Message;