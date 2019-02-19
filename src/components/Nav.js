import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = props => {
    const search = props.setSearch;
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink onClick={() => search('cats')} to='/search/cats'>Cats</NavLink></li>
                <li><NavLink onClick={() => search('dogs')} to='/search/dogs'>Dogs</NavLink></li>
                <li><NavLink onClick={() => search('computers')} to='/search/computers'>Computers</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;