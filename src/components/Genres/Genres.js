import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {GenreBadge} from "../GenreBadge/GenreBadge";
import {getGenres} from "../../store/slices";
import './Genres.css';

export const Genres = () => {
    const {genres} = useSelector(state => state['genresReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    return (
        <div className={'genres'}>
            <h1>Genres:</h1>
            <div className="allGenres">
                {genres && genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};
