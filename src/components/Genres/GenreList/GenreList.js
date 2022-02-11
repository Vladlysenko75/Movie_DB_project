import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenreList} from "../../../store/slices";

export const GenreList = () => {
    const {genreList} = useSelector(state => state['genresReducer']);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getGenreList())
    },[dispatch])

    return (
        <div>

        </div>
    );
};
