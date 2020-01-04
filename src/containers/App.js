import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header'
import Results from '../components/Results'
import Recipe from '../components/Recipe'
import Shopping from '../components/Shopping'
import CopyRight from '../components/CopyRight'
import { requestRecipe, getId } from '../actions';
import { connect } from 'react-redux';




class App extends Component {
 
  componentDidMount() {
    const id = window.location.hash.slice(1);
    if(id){
      console.log(id)
      this.props.getId(id)
      this.props.requestRecipe(id)
    }
    
    
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

const mapStateToProps = state =>{
  return {
      recipe:state.requestRecipe.recipe,
      id:state.getId.id

  }
}
export default connect(mapStateToProps, { requestRecipe, getId })(App);
