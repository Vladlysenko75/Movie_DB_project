import React from 'react';
import {useSelector} from "react-redux";

import {urls} from "../../constants";
import "./MovieListCard.css";
import rating from '../../img/rating.svg';

export const MovieListCard = ({movie}) => {
    const {title, vote_average, poster_path, id, genre_ids} = movie;
    const {genres} = useSelector(state => state['genresReducer']);

    const filteredGenre = genres.filter(genre => genre.id === genre_ids[0])[0];

    return (
        <div  className='movie'>
            <div style={{backgroundImage: `url(${urls.img185.concat(poster_path)})`}} className="movieInfo">
                <div className="info">
                    <div className="genreBadge">
                        <p>{filteredGenre && filteredGenre.name}</p>
                    </div>
                    <div className="popularRating">
                        <p>{vote_average}</p>
                        <img src={rating}  alt="rating"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
