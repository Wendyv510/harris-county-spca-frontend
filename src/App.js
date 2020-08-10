import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

import ApplicantsContainer from './containers/ApplicantsContainer'

class App extends Component {

  render(){
  return (
    <div className="App">
      <ApplicantsContainer/>
    </div>
  );
  }
}

export default connect()(App);
