import React, { Component } from 'react';
import {Home, About} from './components';
import Navbar from './Navbar';
import {BrowserRouter as Browser, Switch, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Browser>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Browser>
    );
  }
}
