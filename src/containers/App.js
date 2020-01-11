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
        ingredients: this.parseIngredients(),
        time: this.calcTime(this.props.recipe.ingredients),
        servings: 4
      })
      
    }
    
    
  }

  calcTime = (ingredients) => {
    //Assuming 15 mins per 3 ingredients
    const numIng = ingredients.length;
    const periods = Math.ceil(numIng / 3);
    return periods * 15;   
}

  parseIngredients = () => {

    const unitsLong = ['tablespoons','tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
    const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
    const units = [...unitsShort,'kg','g'];

    const newIngredients = this.props.recipe.ingredients.map(el => {
        // Uniform unit
        let ingredient = el.toLowerCase();
        unitsLong.forEach((unit, i) => {
            ingredient = ingredient.replace(unit,unitsShort[i]);
        })
        
        //Remove parentheses
        ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ').replace(',','')

        //Parse ingedients into ocunt, unit, and ingredient

        const arrIng = ingredient.split(" ");
        const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

        let objIng;
        
        if (unitIndex > -1){
            //There is a unit
            const arrCount = arrIng.slice(0, unitIndex);
            let count;
            if (arrCount.length === 1){
                count = eval(arrIng[0].replace('-', '+'))
            }
            else{
                count = eval(arrIng.slice(0,unitIndex).join('+'))
            }
            objIng = {
                count,
                unit: arrIng[unitIndex],
                ingredient: arrIng.slice(unitIndex + 1).join(' ')
            }
        } else if(parseInt(arrIng[0], 10)){
            //There is no unit, but 1st element is a number
            objIng = {
                count: parseInt(arrIng[0],10),
                unit: '',
                ingredient: arrIng.slice(1).join(' ')
            }
        }else if(unitIndex === -1){
            //There is no unit and no number in first position
            objIng = {
                count: 1,
                unit: '',
                // ingredient: ingredient
                ingredient
            }

        }

        return objIng
    })
    return newIngredients
    
}

  recipeOnClick = async (event) =>{

    const id = event.target.closest('.results__link').getAttribute('href').slice(1);
    this.highlightSelected(id);
    await this.props.requestRecipe(id);
    this.props.setRecipeInfo({
      id: id,
      title: this.props.recipe.title,
      author: this.props.recipe.publisher,
      img: this.props.recipe.image_url,
      url: this.props.recipe.source_url,
      ingredients: this.parseIngredients(),
      time: this.calcTime(this.props.recipe.ingredients),
      servings: 4
    })
    
  
}

highlightSelected = id =>{
  const resultArr = Array.from(document.querySelectorAll('.results__link'))
  resultArr.forEach(el => {
      el.classList.remove('results__link--active');
  });
  document.querySelector(`.results__link[href="#${id}"]`).classList.add('results__link--active');
}

  render(){
    return (
      <div className="container">
          <Header />
          <Results recipeOnClick = {this.recipeOnClick}/>
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
