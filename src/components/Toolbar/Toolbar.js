import React from 'react';

import './Toolbar.css';
import Logo from './Logo/Logo';
import SignIn from './SignIn/SignIn';
import SignOut from './SignOut/SignOut';

const toolbar = (props) => {
    const auth = props.signedin ? <SignOut clicked={props.onAuthAction} /> : <SignIn clicked={props.onAuthAction}/>
    return (<header className='Toolbar'>
                <div>
                    <Logo />
                </div>
                {auth}
            </header>);
}

export default toolbar;