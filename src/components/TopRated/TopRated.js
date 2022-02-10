import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getTopRatedMovies} from "../../store/slices";
import Slider from "react-slick";
import scrollRight from "../../img/scrollRight.svg";
import {TopRatedMovie} from "./TopRatedMovie";
import './Top Rated.css';

export const TopRated = () => {
    const {topRatedMovies} = useSelector(state => state['moviesReducer']);
    const moviesArray = topRatedMovies.results;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopRatedMovies())
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
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow/>
    };

    return (
        <div className={'carousel3'}>
            <Slider {...settings}>
                {moviesArray && moviesArray.slice(1, 8).map(movie => <TopRatedMovie key={movie.id} movie={movie}/>)}
            </Slider>
        </div>
    );
};
