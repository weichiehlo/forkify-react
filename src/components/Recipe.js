import React from 'react';
import { connect } from 'react-redux';
import { Fraction } from 'fractional'

const createIngredient = ingredient =>{
    console.log(ingredient)
    return(
    <li className="recipe__item">
        <svg className="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div className="recipe__count">${formatCount(ingredient.count)}</div>
        <div className="recipe__ingredient">
            <span className="recipe__unit">${ingredient.unit}</span>
            ${ingredient.ingredient}
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
                    <img src= {props.recipe.img} alt= {props.recipe.title} className="recipe__img" />
                    <h1 className="recipe__title">
                        <span>{props.recipe.title}</span>
                    </h1>
                </figure>
    
                <div className="recipe__details">
                    <div className="recipe__info">
                        <svg className="recipe__info-icon">
                            <use href="img/icons.svg#icon-stopwatch"></use>
                        </svg>
                        <span className="recipe__info-data recipe__info-data--minutes">{props.recipe.time}</span>
                        <span className="recipe__info-text"> minutes</span>
                    </div>
                    <div className="recipe__info">
                        <svg className="recipe__info-icon">
                            <use href="img/icons.svg#icon-man"></use>
                        </svg>
                        <span className="recipe__info-data recipe__info-data--people">{props.recipe.servings}</span>
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
                        {props.recipe.ingredients.map(el =>createIngredient(el))}
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
                        <span className="recipe__by">{props.recipe.author}</span>. Please check out directions at their website.
                    </p>
                    <a className="btn-small recipe__btn" href={props.recipe.url} target="_blank" rel="noopener noreferrer">
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
        ingredients:state.requestRecipe.recipe.ingredients,
        id:state.getId.id

    }
  }

export default connect(mapStateToProps, null)(Recipe);
