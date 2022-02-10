import React from 'react';

export const GenreBadge = ({genre}) => {
    const {name} = genre;

    return (
        <div className={'genre'}>
            <p>{name}</p>
        </div>
    );
};
