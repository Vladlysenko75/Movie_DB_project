import React from 'react';

export const Movie = ({movie}) => {
    const {title, vote_average} = movie;
    return (
        <div>
            {title}-{vote_average}
        </div>
    );
};
