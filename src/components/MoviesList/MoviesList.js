import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getPopularMovies} from "../../store/slices";
import {Movie} from "./Movie";

export const MoviesList = () => {
    const {movies} = useSelector(state => state['moviesReducer']);
    const moviesArray = movies.results;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularMovies())
    }, [dispatch])

    console.log(moviesArray);

    return (
        <div>
            {moviesArray && moviesArray.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};
