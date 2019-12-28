import {SET_USERNAME, SET_ROOMNAME} from '../actions/rootActions'

const initialState={
    username: IntiateUsername(),
    roomname: IntiateRoomname()

}

function IntiateUsername(){
    let usernameStorage = sessionStorage.getItem('username')

    if (usernameStorage){
        return JSON.parse(usernameStorage)
    }
    else return null
}

function IntiateRoomname(){
    let roomnameStorage = sessionStorage.getItem('roomname')

    if (roomnameStorage){
        return JSON.parse(roomnameStorage)
    }
    else return null
}

function rootReducer(state=initialState, action){

    switch(action.type){
        case SET_USERNAME:
            sessionStorage.setItem("username", JSON.stringify(action.payload.username))
            return {...state,username: action.payload.username}
        case SET_ROOMNAME:
            sessionStorage.setItem("roomname", JSON.stringify(action.payload.roomname))
            return {...state,roomname: action.payload.roomname}
        default:
            return state
    }

}

export default rootReducer;