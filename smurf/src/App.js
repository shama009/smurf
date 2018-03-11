import React, { Component } from 'react';
import './App.css';
import Search from './components/search/Search'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ResultsMock from './components/resultsMock/ResultsMock';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () =>
<Router>
    <div>
      <Header />
      <Search />
      <Route exact path="/results" component={ResultsMock} />
      <Footer />
    </div>
</Router>


export default App;
