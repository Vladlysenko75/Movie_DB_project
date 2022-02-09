import React from 'react';

export const Slide = ({movie}) => {
    const {original_title, overview} = movie;
    console.log(movie)
    return (
        <div className={'carouselSlide'}>
            <div className="carouselInfo">
                <div className="genreBadge">
                    <p>Horror</p>
                </div>
                <div className="rating">
                    stars
                </div>
                <h1>{original_title}</h1>
                <p className='info'>{overview}</p>
                <button className={'carouselBtn'}>More Details</button>
            </div>
        </div>
    );
};
