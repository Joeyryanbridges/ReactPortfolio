import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/News' component={News} />
        </div>
      </Router>
    );
  }
}

