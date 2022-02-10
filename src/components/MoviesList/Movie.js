import React from 'react';
import {urls} from "../../constants";

export const Movie = ({movie}) => {
    const {title, vote_average, poster_path, id, genre_ids} = movie;
    console.log(movie)
    return (
        <div  className='movie'>
            <div style={{backgroundImage: `url(${urls.img185.concat(poster_path)})`}} className="movieInfo">
                <h4>Slide</h4>
            </div>
        </div>
    );
};
