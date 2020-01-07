import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header'
import Results from '../components/Results'
import Recipe from '../components/Recipe'
import Shopping from '../components/Shopping'
import CopyRight from '../components/CopyRight'
import { requestRecipe, setRecipeInfo } from '../actions';
import { connect } from 'react-redux';




class App extends Component {
 
  async componentDidMount() {
    const id = window.location.hash.slice(1);
    if(id){
      await this.props.requestRecipe(id)
     
      this.props.setRecipeInfo({
        id: id,
        title: this.props.recipe.title,
        author: this.props.recipe.publisher,
        img: this.props.recipe.image_url,
        url: this.props.recipe.source_url,
        ingredients: this.props.recipe.ingredients
      })
      
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
      id:state.setRecipeInfo.id,
      title: state.setRecipeInfo.title,
      author: state.setRecipeInfo.publisher,
      img: state.setRecipeInfo.image_url,
      url: state.setRecipeInfo.source_url,
      ingredients: state.setRecipeInfo.ingredients

  }
}
export default connect(mapStateToProps, { requestRecipe, setRecipeInfo })(App);
