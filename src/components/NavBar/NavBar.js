import React from 'react';

import './NavBar.css';
import logo from '../../img/logo.svg';
import home from '../../img/home.svg';
import favourite from '../../img/favourite.svg';
import movie from '../../img/Movie.svg';

export const NavBar = () => {
    return (
        <div className='navBar'>
            <img src={logo} alt="logo"/>
            <img src={home} alt="home"/>
            <img src={movie} alt="movie"/>
            <img src={favourite} alt="favourite"/>
        </div>
    );
};
