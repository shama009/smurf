import React, { Component } from 'react';
import './App.css';
import Search from './components/search/Search'
import Header from './components/Header'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
