import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = props => {
    const search = props.setSearch;
    const setLoading = props.setLoading;
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink onClick={() => {search('cats'); setLoading()}} to='/search/cats'>Cats</NavLink></li>
                <li><NavLink onClick={() => {search('dogs'); setLoading()}} to='/search/dogs'>Dogs</NavLink></li>
                <li><NavLink onClick={() => {search('computers'); setLoading()}} to='/search/computers'>Computers</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;