import React from 'react';
import logo from './logo32.png';
import './App.css';
import {Link} from 'react-router-dom';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

export default function Navbar() {
    return (
        <nav>
            <Link style={{ color: "gold", textDecoration: "none"}} 
            to='/'>
                <div>
                    <img src={logo} alt="cheetahws"/>
                </div>
            </Link>
            <ul className="nav-links">
                <Link style={{ color: "gold", textDecoration: "none", marginTop: "10px"}} 
                to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}
