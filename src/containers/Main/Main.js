import React, { Component } from 'react';

import Aux from '../../hoc/Wrapper';
import SideBar from '../../components/SideBar/SideBar';

class Main extends Component {

    state = {

    }

    render() {
        return (
            <Aux>
                <SideBar />
                <div className='Content'>

                </div>
            </Aux>
        );
    }

}

export default Main;