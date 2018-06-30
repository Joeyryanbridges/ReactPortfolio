import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import CustomNavbar from './components/CustomNavbar';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Portfolio' component={Portfolio} />
        </div>
      </Router>
    );
  }
}

