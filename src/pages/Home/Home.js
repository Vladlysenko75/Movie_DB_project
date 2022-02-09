import React from 'react';
import {Outlet} from 'react-router-dom';

import './Home.css';
import {NavBar} from "../../components/NavBar/NavBar";

export const Home = () => {
    return (
        <div className={'home'}>
            <NavBar/>
            <Outlet/>
        </div>
    );
};
