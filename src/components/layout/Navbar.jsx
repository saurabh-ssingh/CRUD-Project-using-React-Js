import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className = "navbar navbar-expand-sm navbar-dark bg-dark">
                <div className = "container">
                    
                    <NavLink to = "/" className = "navbar-brand"> LOGO </NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarid" >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarid">
                        <ul className = "navbar-nav  text-center ml-auto">
                            <li className = "nav-item">
                                <NavLink exact to = "/" className = "nav-link"> Home </NavLink>
                            </li>
                            <li className = "nav-item">
                                <NavLink exact to = "/about" className = "nav-link"> About </NavLink>
                            </li>
                            <li className = "nav-item">
                                <NavLink exact to = "/contact" className = "nav-link"> Contact</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                    <NavLink className = "btn btn-outline-light ml-3" exact to ="/users/add">Add User</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar
