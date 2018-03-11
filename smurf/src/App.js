import React, { Component } from 'react';
import './App.css';
import Search from './components/search/Search'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        {
          <Footer />
        }
      </div>
    );
  }
}

export default App;
