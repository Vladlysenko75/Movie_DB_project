import React from 'react';

import favourite from '../../img/favourite.svg';
import search from '../../img/search.svg';
import {NavLink} from "react-router-dom";
import movie from '../../img/Movie.svg';
import logo from '../../img/logo.svg';
import home from '../../img/home.svg';
import './NavBar.css';

export const NavBar = () => {

    const switchTheme = () => {
        const body = document.getElementsByTagName("body")[0];
        if (!body.className) {
            body.classList.add('switcher')
        } else {
            body.classList.remove('switcher')
        }
    }

    return (
        <div className='navBar'>
            <img className='navImg' src={logo} alt="logo"/>
            <NavLink to={'/'}>
                <img className='navImg' src={home} alt="home"/>
            </NavLink>
            <NavLink to={'/genres'}>
                <img className='navImg' src={movie} alt="genres"/>
            </NavLink>
            <NavLink to={'/search'}>
                <img className='search' src={search} alt="favourite"/>
            </NavLink>
            {/*<img src={favourite} alt="favourite"/>*/}
            <div className="theme">
                <input type="checkbox" className='toggle-switch' onClick={switchTheme}/>
            </div>
        </div>
    );
};
