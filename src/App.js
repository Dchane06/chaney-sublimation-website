import React from 'react';
import ReactDOM from 'react-dom'
import NavBar from './NavBar';
import Products from './Products';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body>
        <br />
        <br />
        <br />
        <Home />
        <hr />
        <Products />
      </body>
      </div>
  );
}

export default App;
