import React from 'react';
import { setRecipeInfo } from '../actions';
import { connect } from 'react-redux';
import { Fraction } from 'fractional';
import uniqid from 'uniqid'; 

const createIngredient = ingredient =>{
    return(
    <li className="recipe__item" key={uniqid()}>
        <svg className="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div className="recipe__count">{formatCount(ingredient.count)}</div>
        <div className="recipe__ingredient">
            <span className="recipe__unit">{ingredient.unit}</span>
            {ingredient.ingredient}
        </div>
    </li>
)}
    

const formatCount = count =>{
    if(count){
        const newCount = Math.round(count * 10000) / 10000;
        const [int, dec] = count.toString().split('.').map(el => parseInt(el,10))

        if(!dec) return newCount;
        if(int === 0) {
            const fr = new Fraction(newCount);
            return `${fr.numerator}/${fr.denominator}`
        } else{
            const fr = new Fraction(newCount-int);
            return `${int} ${fr.numerator}/${fr.denominator}`
        }
    }
    return '?';
}


const Recipe = function(props){
    
    if(props.id && props.recipe.length !== 0){
        return(
            <div className="recipe">
                
                <figure className="recipe__fig">
                    <img src= {props.img} alt= {props.title} className="recipe__img" />
                    <h1 className="recipe__title">
                        <span>{props.title}</span>
                    </h1>
                </figure>
    
                <div className="recipe__details">
                    <div className="recipe__info">
                        <svg className="recipe__info-icon">
                            <use href="img/icons.svg#icon-stopwatch"></use>
                        </svg>
                        <span className="recipe__info-data recipe__info-data--minutes">{props.time}</span>
                        <span className="recipe__info-text"> minutes</span>
                    </div>
                    <div className="recipe__info">
                        <svg className="recipe__info-icon">
                            <use href="img/icons.svg#icon-man"></use>
                        </svg>
                        <span className="recipe__info-data recipe__info-data--people">{props.servings}</span>
                        <span className="recipe__info-text"> servings</span>
    
                        <div className="recipe__info-buttons">
                            <button className="btn-tiny btn-decrease">
                                <svg>
                                    <use href="img/icons.svg#icon-circle-with-minus"></use>
                                </svg>
                            </button>
                            <button className="btn-tiny btn-increase">
                                <svg>
                                    <use href="img/icons.svg#icon-circle-with-plus"></use>
                                </svg>
                            </button>
                        </div>
    
                    </div>
                    <button className="recipe__love">
                        <svg className="header__likes">
                            <use href="img/icons.svg#icon-heart"></use>
                        </svg>
                    </button>
                </div>
    
                <div className="recipe__ingredients">
                    <ul className="recipe__ingredient-list">
                        {props.ingredients.map(el =>createIngredient(el))}
                    </ul>
    
                    <button className="btn-small recipe__btn--add">
                        <svg className="search__icon">
                            <use href="img/icons.svg#icon-shopping-cart"></use>
                        </svg>
                        <span>Add to shopping list</span>
                    </button>
                </div>
    
                <div className="recipe__directions">
                    <h2 className="heading-2">How to cook it</h2>
                    <p className="recipe__directions-text">
                        This recipe was carefully designed and tested by
                        <span className="recipe__by">{props.author}</span>. Please check out directions at their website.
                    </p>
                    <a className="btn-small recipe__btn" href={props.url} target="_blank" rel="noopener noreferrer">
                        <span>Directions</span>
                        <svg className="search__icon">
                            <use href="img/icons.svg#icon-triangle-right"></use>
                        </svg>
    
                    </a>
                </div>
            </div>
    
        ) 
        }else{
            return (
                <div className="recipe">
                        Nothing
                </div>
            )}
        
    
}



const mapStateToProps = state =>{
    return {
      recipe:state.requestRecipe.recipe,
      id:state.setRecipeInfo.id,
      title: state.setRecipeInfo.title,
      author: state.setRecipeInfo.author,
      img: state.setRecipeInfo.img,
      url: state.setRecipeInfo.url,
      ingredients: state.setRecipeInfo.ingredients
    }
  }

export default connect(mapStateToProps, { setRecipeInfo })(Recipe);




