import React, {useEffect} from 'react';
import StarRatings from "react-star-ratings";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import './MovieInfo.css';
import {getMovie} from "../../store/slices";
import {urls} from "../../constants";
import imdb from "../../img/imdb.png";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {ProductionCompanies} from "./ProductionCompanies";

export const MovieInfo = () => {
    const {id} = useParams();
    const {singleMovie} = useSelector(state => state['moviesReducer']);

    const dispatch = useDispatch();
    const {
        poster_path,
        title,
        release_date,
        overview,
        imdb_id,
        vote_average,
        budget,
        revenue,
        vote_count,
        tagline,
        status,
        homepage,
        genres,
        backdrop_path,
        production_companies,
        belongs_to_collection
    } = singleMovie;


    useEffect(() => {
        dispatch(getMovie(id))
    }, [dispatch, id])

    console.log(singleMovie);

    return (
        <div style={{backgroundImage: `url(${urls.img1280.concat(backdrop_path)})`}} className='movieInformation'>
            <div className="aboutMovie">
                <div className="poster">
                    <img src={urls.img342.concat(poster_path)} alt="Poster"/>
                    <div className="posterGenres">
                        {genres && genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
                    </div>
                    {homepage && <h4>Homepage: <a href={homepage}>{homepage}</a></h4>}
                </div>
                <div className="details">
                    <div className="titleBadge">
                        <h1>{title}</h1>
                        <div className="imdb">
                            <a href={`https://www.imdb.com/title/${imdb_id}`}><img src={imdb} alt="imdb logo"/></a>
                        </div>
                    </div>
                    <h1 className={'releaseDate'}>({release_date && release_date.substring(0, 4)})</h1>
                    <h3 className={'tagline'}>{tagline}</h3>
                    <div className="stars">
                        <StarRatings
                            rating={vote_average}
                            starDimension='20px'
                            starSpacing='5px'
                            starRatedColor="gold"
                            numberOfStars={10}
                            name='rating'
                        />
                        <p>({vote_count})</p>
                    </div>
                    <h3>{overview}</h3>
                    {budget && <div className="money">
                        <h4>Status: {status}</h4>
                        <h4>Budget: {budget} $</h4>
                        <h4>Revenue: {revenue} $</h4>
                    </div>}
                    <div className="productionCompanies">
                        <h3>Production Companies:</h3>
                        <div className="production">
                            {production_companies && production_companies.map(company => <ProductionCompanies
                                key={company.id} company={company}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
