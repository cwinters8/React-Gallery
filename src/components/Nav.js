import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <BrowserRouter>
                <ul>
                    <li><NavLink to='/cats'>Cats</NavLink></li>
                    <li><NavLink to='/dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/computers'>Computers</NavLink></li>
                </ul>
            </BrowserRouter>
        </nav>
    )
}

export default Nav;