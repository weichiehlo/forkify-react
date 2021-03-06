import React, { Component } from "react";
import { setRecipeInfo, setLikedRecipe } from "../actions";
import { connect } from "react-redux";
import { Fraction } from "fractional";

class Recipe extends Component {
  recipeButtonClick = event => {
    if (event.target.matches(".btn-decrease, .btn-decrease *")) {
      if (this.props.servings > 1) {
        this.updateServings("dec");
      }
    } else if (event.target.matches(".btn-increase, .btn-increase *")) {
      this.updateServings("inc");
    }
  };

  updateServings = type => {
    let newServing, newIngredients;
    //Update servings
    newServing =
      type === "dec" ? this.props.servings - 1 : this.props.servings + 1;
    //Update Ingredients
    newIngredients = this.props.ingredients.map(ingredient => {
      ingredient.count *= newServing / this.props.servings;
      return ingredient;
    });
    this.props.setRecipeInfo({
      id: this.props.id,
      title: this.props.title,
      author: this.props.author,
      img: this.props.img,
      url: this.props.url,
      ingredients: newIngredients,
      time: this.props.time,
      servings: newServing
    });
  };

  createIngredient = ingredient => {
    return (
      <li className="recipe__item" key={ingredient.id}>
        <svg className="recipe__icon">
          <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div className="recipe__count">
          {this.formatCount(ingredient.count)}
        </div>
        <div className="recipe__ingredient">
          <span className="recipe__unit">{ingredient.unit}</span>
          {ingredient.ingredient}
        </div>
      </li>
    );
  };

  formatCount = count => {
    if (count) {
      const newCount = Math.round(count * 10000) / 10000;
      const [int, dec] = count
        .toString()
        .split(".")
        .map(el => parseInt(el, 10));

      if (!dec) return newCount;
      if (int === 0) {
        const fr = new Fraction(newCount);
        return `${fr.numerator}/${fr.denominator}`;
      } else {
        const fr = new Fraction(newCount - int);
        return `${int} ${fr.numerator}/${fr.denominator}`;
      }
    }
    return "?";
  };

  render() {
    if (this.props.id && this.props.recipe.length !== 0) {
      return (
        <div className="recipe" onClick={this.recipeButtonClick}>
          <figure className="recipe__fig">
            <img
              src={this.props.img}
              alt={this.props.title}
              className="recipe__img"
            />
            <h1 className="recipe__title">
              <span>{this.props.title}</span>
            </h1>
          </figure>

          <div className="recipe__details">
            <div className="recipe__info">
              <svg className="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
              </svg>
              <span className="recipe__info-data recipe__info-data--minutes">
                {this.props.time}
              </span>
              <span className="recipe__info-text"> minutes</span>
            </div>
            <div className="recipe__info">
              <svg className="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
              </svg>
              <span className="recipe__info-data recipe__info-data--people">
                {this.props.servings}
              </span>
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
            <button className="recipe__love" onClick={this.props.likeButton}>
              <svg className="header__likes">
                <use
                  href={`img/icons.svg#icon-heart${
                    this.props.liked[0] ? "" : "-outlined"
                  }`}
                ></use>
              </svg>
            </button>
          </div>

          <div className="recipe__ingredients">
            <ul className="recipe__ingredient-list">
              {this.props.ingredients.map(el => this.createIngredient(el))}
            </ul>

            <button
              className="btn-small recipe__btn--add"
              onClick={this.props.addToListButton}
            >
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
              <span className="recipe__by">{this.props.author}</span>. Please
              check out directions at their website.
            </p>
            <a
              className="btn-small recipe__btn"
              href={this.props.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Directions</span>
              <svg className="search__icon">
                <use href="img/icons.svg#icon-triangle-right"></use>
              </svg>
            </a>
          </div>
        </div>
      );
    } else {
      return <div className="recipe heading-2">Nothing</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.requestRecipe.recipe,
    id: state.setRecipeInfo.id,
    title: state.setRecipeInfo.title,
    author: state.setRecipeInfo.author,
    img: state.setRecipeInfo.img,
    url: state.setRecipeInfo.url,
    ingredients: state.setRecipeInfo.ingredients,
    time: state.setRecipeInfo.time,
    servings: state.setRecipeInfo.servings,
    likedRecipe: state.setLikedRecipe.likedRecipe
  };
};

export default connect(mapStateToProps, { setRecipeInfo, setLikedRecipe })(
  Recipe
);
