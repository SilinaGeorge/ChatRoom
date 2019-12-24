import React, { useState } from 'react';

// home page, join chat room
const Home = () => {
    const [username, setUsername] = useState('');
    const [roomname, setRoomname] = useState('');

    return (
        <div className="card border-primary mb-3 mx-auto" style={{ width: "40vw", height: "50vh", marginTop: '25vh' }}>
            <div className='card-header text-center'>Chat Now!</div>
            <div className="card-body">
                <form>
                <div className="form-group row">
                    <label for="username" className="col-sm-3 col-form-label">User name:</label>
                    <div className="col-sm-6">
                        <input required='true' onChange={(event)=> setUsername(event.target.value)} maxLength='25' id='username' autocomplete="off"  className="form-control mr-sm-2" type="text" placeholder="User name"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="roomName" className="col-sm-3 col-form-label">Room name:</label>
                    <div className="col-sm-6">
                        <input required='true' onChange={(event)=> setRoomname(event.target.value)}  maxLength='25' id='roomName' className="form-control mr-sm-2" type="text" placeholder="Room name"></input>
                    </div>
                </div>
                <div className='col-md-12 text-center'>
                    <button className="btn btn-primary" type="submit">Join</button>
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