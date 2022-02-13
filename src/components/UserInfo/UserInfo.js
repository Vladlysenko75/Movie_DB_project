import React from 'react';

import settings from '../../img/settings.svg';
import user from '../../img/user.svg';
import './UserInfo.css';

export const UserInfo = () => {
    return (
        <div className={'userInfo'}>
            <img src={user} alt="user icon"/>
            <img src={settings} alt="settings icon"/>
        </div>
    );
};
