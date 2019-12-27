import React from 'react'

const UserList = ({ roomname, userList }) => (
   userList.users
      ?
      <div style={{ height: window.innerHeight - 120 + 'px', overflowY: 'auto', wordWrap: 'break-word' }}>
         <h5 style={{ textAlign: 'center' }}>Users in {roomname}</h5>
         <ul>
            {userList.users.map((user, i) => (
               <li key={i}>{user.username}</li>
            ))
            }
         </ul>

      </div>
      : null
                    
)

export default UserList;