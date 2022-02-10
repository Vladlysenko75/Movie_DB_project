import React, {useEffect} from 'react';
import StarRatings from "react-star-ratings";

import {urls} from '../../constants'
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../store/slices";

export const Slide = ({movie}) => {
    const {original_title, overview, id, vote_average, backdrop_path} = movie;
    const {genres} = useSelector(state => state['genresReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    const filteredGenre = genres.filter(genre => genre.id === movie.genre_ids[0])[0];

    return (
        <div style={{backgroundImage: `url(${urls.img1280.concat(backdrop_path)})`}} className={'carouselSlide'}>
            <div className="carouselInfo">
                <div className="genreBadge">
                    <p>{filteredGenre && filteredGenre.name}</p>
                </div>
                <h1>{original_title}</h1>
                <div className="rating">
                    <StarRatings
                        rating={vote_average}
                        starDimension='20px'
                        starSpacing='5px'
                        starRatedColor="gold"
                        numberOfStars={10}
                        name='rating'
                    />
                </div>
                <p className='info'>{overview}</p>
                <button className={'carouselBtn'}>More Details</button>
            </div>
        </div>
    );
};
