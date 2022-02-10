import React from 'react';
import {Outlet} from 'react-router-dom';

import './Home.css';
import {NavBar} from "../../components/NavBar/NavBar";
import {MoviesList} from "../../components/MoviesList/MoviesList";
import chevronRight from "../../img/chevronRight.svg"

export const Home = () => {
    return (
        <div>
            <div className="home">
                <NavBar/>
                <Outlet/>
            </div>
            <div className={'popular'}>
                <div className="morePopular">
                    <h3>Popular</h3>
                    <img src={chevronRight} alt="Arrow right"/>
                </div>
                <MoviesList/>
            </div>
        </div>
    );
};
