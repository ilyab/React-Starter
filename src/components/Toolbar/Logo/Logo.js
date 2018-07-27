import React from 'react';
import {NavLink} from 'react-router-dom';

import './Logo.css';

const logo = (props) => (
    <div className='Logo'>
        <NavLink 
            to='/'
            exact >
            LOGO</NavLink>
    </div>
);

export default logo;