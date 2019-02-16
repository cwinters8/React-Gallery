import React, { Component } from 'react';

// style and config
import logo from '../logo.svg';
import '../App.css';
import apikey from './config.js';

// App components
import SearchForm from './Search';
import Nav from './Nav';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm />
        <Nav />
        <Gallery />
      </div>
    );
  }
}

export default App;
