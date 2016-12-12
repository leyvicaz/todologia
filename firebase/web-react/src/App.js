import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">

        <Header title="Chat 1" />
        <Header title="Chat 2" />
        <Header title={1+1} />

      </div>
    );
  }
}

export default App;
