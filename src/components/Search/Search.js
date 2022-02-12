import React, {useEffect, useState} from 'react';

import './Search.css';
import searchButton from '../../img/search.svg'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {searchMovie} from "../../store/slices";
import {MovieListCard} from "../MoviesList/MovieListCard";

export const Search = () => {
    const [page, setPage] = useState(1);
    const [key, setKey] = useState();
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const {searchMovies} = useSelector(state => state['moviesReducer']);
    const {results, total_pages} = searchMovies;

    const submitSearch = (keyWord) => {
        setKey(keyWord)
        reset()
    }

    useEffect(() => {
        if (key) {
            let keyWord = key.keyWord;
            dispatch(searchMovie({keyWord, page}))
        }
    }, [dispatch, page, key])

    const pageForward = (pagenumber) => {
        if (pagenumber < total_pages) {
            setPage(pagenumber + 1);
        } else setPage(1)
    }

    const pageBackward = (pagenumber) => {
        if (pagenumber <= 1) {
            setPage(total_pages)
        } else setPage(pagenumber - 1)
    }

    console.log(results)
    console.log(page);
    console.log(searchMovies);

    return (
        <div className={'searchPage'}>
            <form onSubmit={handleSubmit(submitSearch)} className="searchInput">
                <input type="text" {...register('keyWord')}/>
                <button className={'searchButton'}><img src={searchButton} alt="Search Button"/></button>
            </form>
            <div className="searchResults">
                {results && results.slice(0, 12).map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            {results &&
                <div className="genreButtons">
                    <button onClick={() => pageForward(page)}>Forward</button>
                    <button onClick={() => pageBackward(page)}>Backward</button>
                </div>
            }
        </div>
    );
};
