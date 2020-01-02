import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header'
import Results from '../components/Results'
import Recipe from '../components/Recipe'
import Shopping from '../components/Shopping'
import CopyRight from '../components/CopyRight'
import axios from 'axios'
import { setSearchField } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
  return {
    searchField:state.searchField
  }
}
const mapDispatchToProps = (dispatch) => {
  return{

    onSearchChange: (event) => dispatch(setSearchField(event.target.value))

  }
    
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchResult:[],
      loading:false
    }
  }

  onSearchClick = async(event) =>{
    event.preventDefault();
    await this.getResult(this.props.searchField)
  }


  getResult = async(query) =>{
    try {
      this.setState({loading:true})
      const res = await axios.get(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
      this.setState({searchResult: res.data.recipes, loading: false})
      
  } catch(error){
      alert(error)
  }
  }



  render(){
    return (
      <div className="container">
          <Header onSearchClick = { this.onSearchClick } onSearchChange = { this.props.onSearchChange } userInput = { this.props.searchField } />
          <Results searchResult = { this.state.searchResult } loading = {this.state.loading} />
          <Recipe />
          <Shopping />
          <CopyRight />
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
