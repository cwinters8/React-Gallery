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
      cats: [],
      dogs: [],
      computers: []
    };
  }

  componentDidMount() {
    this.performSearch();
    this.performSearch('cats', 'cats');
    this.performSearch('dogs', 'dogs');
    this.performSearch('computers', 'computers');
  }

  performSearch = (query = 'mountains', state = 'pics') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&sort=interestingness-desc&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          [state]: response.data.photos.photo
        })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm performSearch={this.performSearch} history={history} />
          <Nav />
          <Switch>
            {/* Default route */}
            <Route exact path="/" render={() => <Gallery data={this.state.pics}/>} />
            {/* Nav */}
            <Route path="/cats" render={() => <Gallery data={this.state.cats}/>} />
            <Route path="/dogs" render={() => <Gallery data={this.state.dogs}/>} />
            <Route path="/computers" render={() => <Gallery data={this.state.computers}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
