import React, { Component } from 'react';
import logo from './logo.svg';
import Datepicker from './components/Datepicker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="MainContent">
          <Datepicker />
        </div>
      </div>
    );
  }
}

export default App;
