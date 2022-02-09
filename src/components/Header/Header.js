import React, {useEffect} from 'react';
import Slider from "react-slick";

import './Header.css';
import {useDispatch, useSelector} from "react-redux";
import {getMoviesNowPlaying} from "../../store/slices";
import scrollRight from '../../img/scrollRight.svg';
import {Slide} from "./Slide";

export const Header = () => {
    const {movies} = useSelector(state => state['moviesReducer']);
    const moviesArray = movies.results;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesNowPlaying())
    }, [dispatch])

    // console.log(moviesArray)

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img className={className} style={style} onClick={onClick} src={scrollRight} alt="scroll Right"/>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />
    };

    return (
        <div className='carousel'>
            <Slider {...settings}>
                {moviesArray && moviesArray.slice(4,8).map(movie => <Slide key={movie.id} movie={movie}/>)}
            </Slider>
        </div>
    );
};
