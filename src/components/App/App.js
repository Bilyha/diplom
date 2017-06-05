import React, { Component } from 'react';
import './App.css';
import RegistartionPage from './../../pages/RegistartionPage/RegistarationPage';
import Header from './../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RegistartionPage />
      </div>
    );
  }
}

export default App;
