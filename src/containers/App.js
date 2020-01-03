import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header'
import Results from '../components/Results'
import Recipe from '../components/Recipe'
import Shopping from '../components/Shopping'
import CopyRight from '../components/CopyRight'
import { setSearchField, requestRecipes } from '../actions';
import { connect } from 'react-redux';



class App extends Component {
  constructor(){
    super();
  }

  onSearchClick = async(event) =>{
    event.preventDefault();

    await this.props.requestRecipes(this.props.searchField)

  }

  render(){
    return (
      <div className="container">
          <Header onSearchClick = { this.onSearchClick } onSearchChange = { (event)=>this.props.setSearchField(event.target.value) } userInput = { this.props.searchField } />
          <Results searchResult = { this.props.recipes } loading = {this.props.isPending} />
          <Recipe />
          <Shopping />
          <CopyRight />
      </div>
    );
  }
  
}

const mapStateToProps = state =>{
  return {
    searchField:state.searchRecipes.searchField,
    recipes: state.requestRecipes.recipes,
    isPending: state.requestRecipes.isPending,
    error: state.requestRecipes.error
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return{

//     onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//     onRequestRecipe: () => dispatch(requestRecipes('pasta'))

//   }
    
// }

export default connect(mapStateToProps, {setSearchField, requestRecipes})(App);
