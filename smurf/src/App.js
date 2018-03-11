import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
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
