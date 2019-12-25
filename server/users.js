const users = [];

const addUser = ({id, username, roomname}) =>{
    username = username.trim().toLowerCase();
    roomname = roomname.trim().toLowerCase();

    // check if  user is trying to sign up as someone else in the same room with the same name
    const existingUser = users.find((user)=> user.roomname == roomname && user.username == username);

    if (existingUser) return {error: 'Username is taken'}

    const newUser = {id, username, roomname}

    users.push(newUser)

    return {newUser}

}

const getUser = (id) =>{
   return users.find ((user)=> user.id == id);
    
}

const removeUser = (id) =>{
    const index = users.findIndex((user)=> user.id == id)

    if (index !== -1) return users.splice(index, 1)[0]; // return deleted user
    
}

const getRoomUsers = (roomname) =>{
    return users.filter((user) => user.roomname == roomname)
    
}

module.exports = {addUser, getUser, removeUser, getRoomUsers}