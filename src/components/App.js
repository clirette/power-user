import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Services from './pages/Services';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Route exact path="/" component={Landing}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/services" component={Services}/>
        </div>
      </Router>
    );
  }
}

export default App;