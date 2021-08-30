import React, {Component} from 'react'

import { NavLink} from 'react-router-dom';


class Header extends Component{

    render() {

    return (
        <header className="App-header w3-card w3-top w3-blue w3-xlarge w3-container">
        
        <NavLink to='/' className="w3-button w3-padding w3-left w3-hover-none w3-hover-text-white">Scrum Board</NavLink>
        <NavLink to='/add/story' className="  w3-button  w3-right w3-hover-light-grey" >Add</NavLink>
       </header>
    )
}
}

export default Header