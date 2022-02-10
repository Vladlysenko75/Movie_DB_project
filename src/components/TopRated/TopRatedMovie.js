import React from 'react';
import {useSelector} from "react-redux";

import {urls} from "../../constants";
import rating from "../../img/rating.svg";

export const TopRatedMovie = ({movie}) => {
    const {title, vote_average, poster_path, id, genre_ids} = movie;
    const {genres} = useSelector(state => state['genresReducer']);
    const filteredGenre = genres.filter(genre => genre.id === genre_ids[0])[0];

    return (
        <div>
            <div style={{backgroundImage: `url(${urls.img342.concat(poster_path)})`}} className="movieInfo">
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
