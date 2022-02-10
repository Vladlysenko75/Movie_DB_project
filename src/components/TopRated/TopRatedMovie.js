import React from 'react';
import {useSelector} from "react-redux";

import {urls} from "../../constants";
import rating from "../../img/rating.svg";
import {Link} from "react-router-dom";

export const TopRatedMovie = ({movie}) => {
    const {vote_average, poster_path, id, genre_ids} = movie;
    const {genres} = useSelector(state => state['genresReducer']);
    const filteredGenre = genres.filter(genre => genre.id === genre_ids[0])[0];

    return (
        <div>
            <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
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
            </Link>
        </div>
    );
};
