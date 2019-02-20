import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {createBrowserHistory} from 'history';

// style and config
import '../App.css';
import apikey from './config.js';

// App components
import SearchForm from './Search';
import Nav from './Nav';
import Gallery from './Gallery';
import NotFound from './NotFound';

const history = createBrowserHistory();

class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: [],
      search: null,
      loading: true
    };
  }

  // retrieves images based on the URL when the App mounts
  componentDidMount() {
    const searchTerm = window.location.pathname.match(/^\/search\/(\w+)/);
    if (searchTerm) {
      this.retrieveImages(searchTerm[1]);
    } else {
      this.retrieveImages();
    }
  }

  // helper function to run the API call
  runFetch = (query, callback) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&sort=interestingness-desc&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(jsonData => {
        callback(jsonData);
      });
  }

  // retrieves the images and puts them in state
  retrieveImages = (query = 'mountains') => {
    this.runFetch(query, data => {
      this.setState({
        pics: data.photos.photo,
        search: null,
        loading: false
      })
    })
  }

  // sets the term to search for in state
  setSearch = (searchTerm) => {
    this.setState({
      search: searchTerm
    })
  }

  // retrieves images and redirects to the appropriate route for searches
  searchRedirect = () => {
    if (this.state.search) {
      this.retrieveImages(this.state.search);
      return <Redirect to={`/search/${this.state.search}`} />;
    }
  }

  // callback function to set the loading state to true
  setLoading = () => {
    this.setState({loading: true})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm setSearch={this.setSearch} history={history} setLoading={this.setLoading} />
          <Nav setSearch={this.setSearch} setLoading={this.setLoading} />
          <Switch>
            {/* Default route */}
            <Route exact path="/" render={() => <Gallery data={this.state.pics} loading={this.state.loading}/>} />
            {/* Search */}
            <Route path="/search/:term" render={() => <Gallery data={this.state.pics} loading={this.state.loading}/>} />
            {this.searchRedirect()}
            {/* 404 handler */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
