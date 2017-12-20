import React, { Component } from 'react';
import { BrowserRouter, hashHistory, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Main from '../../src/components/stocks/Main';
import Header from '../../src/components/Header';
import AddValue from '../../src/components/stocks/AddValue';
import NewTicker from '../../src/components/stocks/NewTicker';
import 'react-s-alert/dist/s-alert-default.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Main} />
            <Route exact path="/newticker" component={NewTicker} />
            <Route exact path="/addvalue" component={AddValue} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
