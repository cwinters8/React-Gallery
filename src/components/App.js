import React, { Component } from 'react';
import axios from 'axios';

// style and config
// import logo from '../logo.svg';
import '../App.css';
import apikey from './config.js';

// App components
import SearchForm from './Search';
import Nav from './Nav';
import Gallery from './Gallery';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: []
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&sort=interestingness-desc&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo
        })
      })
  }

  render() {
    return (
      <div className="container">
        <SearchForm performSearch={this.performSearch} />
        <Nav />
        <Gallery data={this.state.pics} />
      </div>
    );
  };
}

export default App;