const initialState={
    username: '',
    roomname: ''

}

function rootReducer(state=initialState, action){

    switch(action.type){
        case 'SET_USERNAME':
            return {...state,username: action.payload.username}
        case 'SET_ROOMNAME':
            return {...state,roomname: action.payload.roomname}
        default:
            return state
    }

}

export default rootReducer;