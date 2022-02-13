import React from 'react';
import {urls} from "../../constants";

export const ProductionCompanies = ({company}) => {
    const {logo_path, name} = company;

    return (
        <div className={'company'}>
            <p>{name}</p>
            {logo_path && <img src={urls.img92.concat(logo_path)} alt="company logo"/>}
        </div>
    );
};
