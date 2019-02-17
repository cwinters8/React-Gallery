import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';

const Nav = props => {
    return (
        <nav className="main-nav">
            <BrowserRouter>
                <ul>
                    <li><NavLink to='/cats' onClick={() => props.performSearch('cats')}>Cats</NavLink></li>
                    <li><NavLink to='/dogs' onClick={() => props.performSearch('dogs')}>Dogs</NavLink></li>
                    <li><NavLink to='/computers' onClick={() => props.performSearch('computers')}>Computers</NavLink></li>
                </ul>
            </BrowserRouter>
        </nav>
    )
}

export default Nav;