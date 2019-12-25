import React from 'react'

const Message = ({ message: { username, text }, currentUser }) => {
    let isSentByCurrentUser = false;

    currentUser = currentUser.trim().toLowerCase();

    if (currentUser == username) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div class="card text-white bg-info mb-3 d-flex flex-row">
                    <div class="card-body">
                        <p class="card-text">
                            <small class="text-muted">{currentUser}</small>
                            {text}
                        </p>
                    </div>
                </div>
            )
            : (
                <div class="card bg-light mb-3 d-flex flex-row-reverse">
                    <div class="card-body">
                        <p class="card-text">
                            <small class="text-muted">{username}</small>
                            {text}
                        </p>
                    </div>
                </div>
            )
    )
}

export default Message;