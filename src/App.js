import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Home from './Components/Home'
import Team from './Components/Team'
import Aboutus from './Components/Aboutus'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Gallery from './Components/Gallery';

function App() {
  
  return (
    <div className="App">
      {/* <header className="App-header"> */}
     
  <Router>
  <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/aboutus">
            <Aboutus/>
          </Route>
          <Route path="/team">
            <Team/>
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/contact">
          </Route>
        </Switch>
    </Router>
    
  </div>
  );
}

export default App;
