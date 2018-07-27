import React from 'react';

import './Layout.css';
import Aux from '../Wrapper';
import Toolbar from '../../components/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar signedin={props.signedin} onAuthAction={props.onAuthAction} />
        <main className='Content'>
            {props.children}
        </main>
    </Aux>
);

export default layout;