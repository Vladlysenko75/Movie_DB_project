import React from 'react';

import './NavBar.css';
import logo from '../../img/logo.svg';
import home from '../../img/home.svg';
import favourite from '../../img/favourite.svg';
import movie from '../../img/Movie.svg';
import {NavLink} from "react-router-dom";

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
            <img src={logo} alt="logo"/>
            <NavLink to={'/'}>
                <img src={home} alt="home"/>
            </NavLink>
            <NavLink to={'/genres'}>
                <img src={movie} alt="genres"/>
            </NavLink>
            <img src={favourite} alt="favourite"/>
            <button onClick={switchTheme}>change</button>
        </div>
    );
};
