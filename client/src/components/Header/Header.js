import React from 'react'

import closeImage from '../../assets/images/closeImage.png'


const Header = ({roomname}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h4>Welcome to {roomname}</h4>
        <a className='ml-auto' href="/"><img src={closeImage} alt='close'/></a>
    </nav>

)

export default Header;