import React from 'react';

import './NavBar.css';
import logo from '../../img/logo.svg';
import home from '../../img/home.svg';
import favourite from '../../img/favourite.svg';
import movie from '../../img/Movie.svg';
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <div className='navBar'>
            <img src={logo} alt="logo"/>
            <NavLink to={'/'}>
                <img src={home} alt="home"/>
            </NavLink>
            <img src={movie} alt="movie"/>
            <img src={favourite} alt="favourite"/>
        </div>
    );
};
