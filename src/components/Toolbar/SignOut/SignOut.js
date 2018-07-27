import React from 'react';
import { withRouter } from 'react-router';

import './SignOut.css';

const SignOut = (props) => {
    const onClickHandler = () => {
        localStorage.removeItem('user');
        props.history.push('/');
        props.clicked(false);
    }

    return (
        <div className='SignOut'>
            <span>{localStorage.getItem('user')}</span>
            <button onClick={onClickHandler} >Sign Out</button>
        </div>
    );
}

export default withRouter(SignOut);