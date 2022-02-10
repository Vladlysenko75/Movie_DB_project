import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Slider from "react-slick";

import {getPopularMovies} from "../../store/slices";
import {MovieListCard} from "./MovieListCard";
import './MovieList.css';
import scrollRight from "../../img/scrollRight.svg";

export const MoviesList = () => {
    const {popularMovies} = useSelector(state => state['moviesReducer']);
    const moviesArray = popularMovies.results;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularMovies())
    }, [dispatch])


    function SampleNextArrow(props) {
        const {className, style, onClick} = props;
        return (
            <img className={className} style={style} onClick={onClick} src={scrollRight} alt="scroll Right"/>
        );
    }

    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow/>
    };

    return (
        <div>
            <div className='carousel2'>
                <Slider {...settings}>
                    {moviesArray && moviesArray.slice(1, 12).map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
                </Slider>
            </div>
        </div>
    );
};
