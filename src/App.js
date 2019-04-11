import React, { Component } from 'react';
import DatePicker from './DatePicker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="MainContent">
          <DatePicker />
        </div>
      </div>
    );
  }
}

export default App;
