import React from 'react';
import {NavLink} from 'react-router-dom';

import './SignIn.css'

const signIn = () => (
    <div className='SignIn'>
        <NavLink 
        to='signin'
        exact >
        Sign In</NavLink>
    </div>
);

export default signIn;