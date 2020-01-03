import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header'
import Results from '../components/Results'
import Recipe from '../components/Recipe'
import Shopping from '../components/Shopping'
import CopyRight from '../components/CopyRight'




class App extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="container">
          <Header />
          <Results />
          <Recipe />
          <Shopping />
          <CopyRight />
      </div>
    );
  }
  
}


export default App;
