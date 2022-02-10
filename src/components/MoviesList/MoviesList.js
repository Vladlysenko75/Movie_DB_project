import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Slider from "react-slick";

import {getPopularMovies} from "../../store/slices";
import {Movie} from "./Movie";
import './MovieList.css';
import scrollRight from "../../img/scrollRight.svg";

export const MoviesList = () => {
    const {movies} = useSelector(state => state['moviesReducer']);
    const moviesArray = movies.results;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularMovies())
    }, [dispatch])

    console.log(moviesArray);

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
                    {moviesArray && moviesArray.slice(1, 12).map(movie => <Movie key={movie.id} movie={movie}/>)}
                </Slider>
            </div>
        </div>
    );
};
