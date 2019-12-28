import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {setRoomnameAction, setUsernameAction} from '../../actions/rootActions';

// home page, join chat room
const Home = () => {
    const [username, setUsername] = useState('');
    const [roomname, setRoomname] = useState('');
    const dispatch = useDispatch();

    const onJoinClick =()=>{
        dispatch(setUsernameAction(username))
        dispatch(setRoomnameAction(roomname))
        window.location = '/room'
    }
    return (
        <div className="card border-primary mb-3 mx-auto" style={{  maxWidth:"60vw", marginTop: '25vh' }}>
            <div className='card-header text-center'>Chat Now!</div>
            <div className="card-body">
                <form>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">User name:</label>
                    <div className="col-sm-6">
                        <input required onChange={(event)=> setUsername(event.target.value)} maxLength='25' id='username' autoComplete="off"  className="form-control mr-sm-2" type="text" placeholder="User name"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Room name:</label>
                    <div className="col-sm-6">
                        <input required onChange={(event)=> setRoomname(event.target.value)}  maxLength='25' id='roomName' className="form-control mr-sm-2" type="text" placeholder="Room name"></input>
                    </div>
                </div>
                <div className='col-md-12 text-center'>
                        <button className="btn btn-primary" type="submit" onClick={onJoinClick}>Enter Room</button>
                   
                </div>
            </form>
  
            </div>
            <div className='card-footer'>
               Made by Silina George
            </div>

            
        </div>

    )
}

export default Home