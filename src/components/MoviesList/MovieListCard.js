import React from 'react';
import {useSelector} from "react-redux";

import rating from '../../img/rating.svg';
import {Link} from "react-router-dom";
import {urls} from "../../constants";
import "./MovieListCard.css";

export const MovieListCard = ({movie}) => {
    const {vote_average, poster_path, id, genre_ids} = movie;
    const {genres} = useSelector(state => state['genresReducer']);
    const filteredGenre = genres.filter(genre => genre.id === genre_ids[0])[0];
    const background = `url(${urls.img185.concat(poster_path)})`;

    return (
        <div className='movie'>
            <Link to={`/movie/${id}`} style={{textDecoration: 'none'}}>
                <div style={{backgroundImage: background}} className="movieInfo">
                    <div className="info">
                        <div className="genreBadge">
                            <p>{filteredGenre && filteredGenre.name}</p>
                        </div>
                        <div className="popularRating">
                            <p>{vote_average}</p>
                            <img src={rating} alt="rating"/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
