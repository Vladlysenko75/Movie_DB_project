import React, {useEffect} from 'react';
import Slider from "react-slick";

import {getMoviesNowPlaying} from "../../store/slices";
import chevronRight from "../../img/chevronRight.svg";
import {useDispatch, useSelector} from "react-redux";
import {MoviesList} from "../MoviesList/MoviesList";
import scrollRight from '../../img/scrollRight.svg';
import {UserInfo} from "../UserInfo/UserInfo";
import {TopRated} from "../TopRated/TopRated";
import {Slide} from "./Slide";
import './Header.css';

export const Header = () => {
    const {nowPlayingMovies} = useSelector(state => state['moviesReducer']);
    const moviesArray = nowPlayingMovies.results;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesNowPlaying())
    }, [dispatch])

    function SampleNextArrow(props) {
        const {className, style, onClick} = props;
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
        autoplay: true,
        autoplaySpeed: 6000,
        nextArrow: <SampleNextArrow/>

    };

    return (
        <div>
            <UserInfo/>
            <div className="carousel">
                <Slider {...settings}>
                    {moviesArray && moviesArray.slice(9, 13).map(movie => <Slide key={movie.id} movie={movie}/>)}
                </Slider>
            </div>
            <div className={'popular'}>
                <div className="morePopular">
                    <h3>Popular</h3>
                    <img src={chevronRight} alt="Arrow right"/>
                </div>
                <MoviesList/>
            </div>
            <div className="popular">
                <div className="morePopular">
                    <h3>Top Rated</h3>
                    <img src={chevronRight} alt="Arrow right"/>
                </div>
                <TopRated/>
            </div>
        </div>
    );
};
