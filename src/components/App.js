import React, { Component } from 'react';
// import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

// style and config
import '../App.css';
import apikey from './config.js';

// App components
import SearchForm from './Search';
import Nav from './Nav';
import Gallery from './Gallery';

const history = createBrowserHistory();

class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: [],
      cats: [],
      dogs: [],
      computers: []
    };
  }

  componentDidMount() {
    // console.log(window.location.pathname)
    const searchTerm = window.location.pathname.match(/^\/search\/(\w+)/);
    if (searchTerm) {
      this.retrieveImages(searchTerm[1]);
    } else {
      this.retrieveImages();
    }
    this.retrieveImages('cats', 'cats');
    this.retrieveImages('dogs', 'dogs');
    this.retrieveImages('computers', 'computers');
  }

  runFetch = (query, callback) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&sort=interestingness-desc&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(jsonData => {
        callback(jsonData);
      })
  }

  retrieveImages = (query = 'mountains', state = 'pics') => {
    this.runFetch(query, data => {
      this.setState({
        [state]: data.photos.photo
      })
    })
  }

  performSearch = (searchTerm) => {
    let photos;
    this.runFetch(searchTerm, data => {
      photos = data.photos.photo;
      return <Gallery data={photos} />;
    })
    
    
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" render={() => <SearchForm retrieveImages={this.retrieveImages} history={history} />} />
          <Nav />
          <Switch>
            {/* Default route */}
            <Route exact path="/" render={() => <Gallery data={this.state.pics}/>} />
            {/* Nav */}
            <Route exact path="/search/cats" render={() => <Gallery data={this.state.cats}/>} />
            <Route exact path="/search/dogs" render={() => <Gallery data={this.state.dogs}/>} />
            <Route exact path="/search/computers" render={() => <Gallery data={this.state.computers}/>} />
            {/* Search */}
            <Route path="/search/:term" render={() => <Gallery data={this.state.pics}/>} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
