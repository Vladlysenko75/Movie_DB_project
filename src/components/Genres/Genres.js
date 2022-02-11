import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Genres.css';
import {getGenres} from "../../store/slices";
import {GenreBadge} from "../GenreBadge/GenreBadge";

export const Genres = () => {
    const {genres} = useSelector(state => state['genresReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])


    console.log(genres);

    return (
        <div className={'genres'}>
            <h1>Genres:</h1>
            <div className="allGenres">
                {genres && genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};
