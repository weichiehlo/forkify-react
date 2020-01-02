import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header'
import Results from '../components/Results'
import Recipe from '../components/Recipe'
import Shopping from '../components/Shopping'
import CopyRight from '../components/CopyRight'
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchResult:[],
      userInput:''
    }
  }

  onSearchClick = async(event) =>{
    event.preventDefault();
    await this.getResult(this.state.userInput)
  }

  handleSearchChange = (event) =>{
    this.setState({userInput: event.target.value});
 }

  getResult = async(query) =>{
    try {
      const res = await axios.get(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
      this.setState({searchResult: res.data.recipes})
      
  } catch(error){
      alert(error)
  }
  }



  render(){
    return (
      <div className="container">
          <Header onSearchClick = { this.onSearchClick } handleSearchChange = { this.handleSearchChange } userInput = { this.state.userInput } />
          <Results searchResult = { this.state.searchResult } />
          <Recipe />
          <Shopping />
          <CopyRight />
      </div>
    );
  }
  
}

export default App;
