import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {MovieListCard} from "../../MoviesList/MovieListCard";
import {getGenreList} from "../../../store/slices";
import './GenreList.css';

export const GenreList = () => {
    const {genreList} = useSelector(state => state['genresReducer']);
    const [page, setPage] = useState(1);
    const {results} = genreList;
    const {id, genre} = useParams();
    const dispatch = useDispatch();


    const pageForward = (pagenumber) => {
        if (pagenumber < 500) {
            setPage(pagenumber + 1);
        } else setPage(1)
    }

    const pageBackward = (pagenumber) => {
        if (pagenumber <= 1) {
            setPage(500)
        }
        else setPage(pagenumber - 1)
    }

    console.log(page)

    useEffect(() => {
        dispatch(getGenreList({id, page}))
    }, [dispatch, id, page])

    console.log(genreList)



    return (
        <div className={'certainGenre'}>
            <h1>Genre: {genre}</h1>
            <div className="genreList">
                {results && results.slice(0, 12).map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className="genreButtons">
                <button onClick={() => pageForward(page)}>Forward</button>
                <button onClick={() => pageBackward(page)}>Backward</button>
            </div>
        </div>
    );
};
