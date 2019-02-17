import React, { Component } from 'react';
import axios from 'axios';
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
      query: ''
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'mountains') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&sort=interestingness-desc&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          query: query
        })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm performSearch={this.performSearch} history={history} />
          <Nav performSearch={this.performSearch} />
          <Switch>
            {/* Default route */}
            <Route exact path="/" render={() => <Gallery data={this.state.pics}/>} />
            {/* Nav and search */}
            <Route path="/:searchTerm" render={({match}) => <Gallery data={this.state.pics} performSearch={this.performSearch} match={match} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
