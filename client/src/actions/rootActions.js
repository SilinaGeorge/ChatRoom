
export const SET_USERNAME = 'SET_USERNAME'
export const SET_ROOMNAME = 'SET_ROOMNAME'


export function setUsernameAction(username) {
    return {
      type: SET_USERNAME,
      username
    }
  }

export function setRoomnameAction(roomname) {
    return {
      type: SET_ROOMNAME,
      roomname
    }
  }