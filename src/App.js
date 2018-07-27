import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Auth from './components/Auth/Auth';
import Main from './containers/Main/Main';

class App extends Component {

  state = {
    signedin: false
  }

  componentDidMount() {
    const isSignedIn = localStorage.getItem('user') ? true : false;
    if(isSignedIn !== this.state.signedin) {
      this.setState({signedin: isSignedIn});
    }
  }

  onAuthAction = (state) => {
    this.setState({signedin: state});
  }

  render() {
    return (
      <Layout signedin={this.state.signedin} onAuthAction={this.onAuthAction}>
        <Switch>
          <Route path="/signin" render={() => <Auth onAuthAction={this.onAuthAction} />} />
          <Route path="/" component={Main} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
