import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {useDispatch} from "react-redux";

import {NavBar} from "../../components/NavBar/NavBar";
import {getGenres} from "../../store/slices";
import './Home.css';

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    return (
        <div>
            <div className="home">
                <NavBar/>
                <Outlet/>
            </div>

        </div>
    );
};
