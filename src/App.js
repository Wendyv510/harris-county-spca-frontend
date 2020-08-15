import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom' 
import {connect} from 'react-redux';
import './App.css';
import Navbar from './containers/Navbar'
import Home from './components/Home' 
import ApplicantForm from './components/ApplicantForm'
import ApplicantsContainer from './containers/ApplicantsContainer'
import CatsContainer from './containers/CatsContainer'
import DogsContainer from './containers/DogsContainer' 

class App extends Component {
  
  render(){
  return (
    <div>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component = {Home}/>
            <Route exact path="/cats" component = {CatsContainer}/>
            <Route exact path="/dogs" component = {DogsContainer}/>
            <Route exact path="/applicants" component = {ApplicantsContainer}/>
            <Route exact path="/apply" component = {ApplicantForm}/>
            <Redirect from= "/apply" to= '/'/>
          </Switch>
      </Router>
    </div>
  );
  }
}

export default connect()(App);
