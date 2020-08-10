import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {fetchApplicants} from './actions/fetchApplicants'

class App extends Component {

  componentDidMount(){
    this.props.fetchApplicants({type: 'FETCH_APPLICANTS', payload: {name:'applicant'}})
  }

  render(){
  return (
    <div className="App">
      App
    </div>
  );
  }
}

export default connect(null, {fetchApplicants})(App);
