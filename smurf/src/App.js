import React, { Component } from 'react';
import './App.css';
import Search from './components/search/Search'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ResultsMock from './components/resultsMock/ResultsMock'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ResultsMock />
        {
        //<Search />
        }
        {
          <Footer />
        }
      </div>
    );
  }
}

export default App;
