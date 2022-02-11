import React from 'react';
import {Link} from "react-router-dom";

export const GenreBadge = ({genre}) => {
    const {name, id} = genre;

    return (
        <Link to={`/${name}/${id}`}>
            <div className={'genre'}>
                <p>{name}</p>
            </div>
        </Link>
    );
};
