import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './Auth.css'

class Auth extends Component {

    state = {
        name: ''
    }

    inputChangedHandler = (event, inputIdentifier) => {
        this.setState({[inputIdentifier]: event.target.value})
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        if(this.state.name === '') {
            alert('Please enter name.');
            return;
        }
        localStorage.setItem('user', this.state.name);
        this.props.onAuthAction(true);
        this.props.history.push('/');
    }

    render() {
        return (
            <form className='Form' onSubmit={this.onSubmitForm}>
                <label className='Label'>Choose Name: </label>
                <input 
                    className='InputElement'
                    value={this.state.name}
                    onChange={(event) => this.inputChangedHandler(event, 'name')} />
                    <button className='Button'>Sign In</button>
                </form>
        );  
    }
}

export default withRouter(Auth);