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

const history = createBrowserHistory();

class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: [],
      computers: [],
      search: null
    };
  }

  componentDidMount() {
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
        [state]: data.photos.photo,
        search: null
      })
    })
  }

  setSearch = (searchTerm) => {
    this.setState({
      search: searchTerm
    })
  }

  searchRedirect = () => {
    if (this.state.search) {
      this.retrieveImages(this.state.search);
      return <Redirect to={`/search/${this.state.search}`} />;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" render={() => <SearchForm setSearch={this.setSearch} history={history} />} />
          <Nav setSearch={this.setSearch} />
          <Switch>
            {/* Default route */}
            <Route exact path="/" render={() => <Gallery data={this.state.pics}/>} />
            {/* Search */}
            <Route path="/search/:term" render={() => <Gallery data={this.state.pics}/>} />
            {this.searchRedirect()}
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
