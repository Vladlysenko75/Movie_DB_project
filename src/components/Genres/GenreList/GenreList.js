import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

import {getGenreList} from "../../../store/slices";
import {MovieListCard} from "../../MoviesList/MovieListCard";
import './GenreList.css';

export const GenreList = () => {
    const {genreList} = useSelector(state => state['genresReducer']);
    const [page, setPage] = useState(1);
    const {results, total_pages} = genreList;
    const {id, genre} = useParams();
    const dispatch = useDispatch();

    console.log(page)

    useEffect( () => {
        dispatch(getGenreList({id, page}))
    },[dispatch, id, page])

    console.log(genreList)

    const pageForward = (pagenumber) => {
        if (pagenumber < total_pages) {
            setPage(pagenumber + 1);
        } else setPage(1)
    }

    console.log(page)


    return (
        <div className={'certainGenre'}>
            <h1>Genre: {genre}</h1>
            <div className="genreList">
                {results && results.slice(0,12).map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className="genreButtons">
                <button onClick={() => pageForward(page)}>Forward</button>
                <button>Backward</button>
            </div>
        </div>
    );
};
