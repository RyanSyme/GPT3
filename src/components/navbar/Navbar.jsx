import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-link_logo">
                    <img src={logo} alt="Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
