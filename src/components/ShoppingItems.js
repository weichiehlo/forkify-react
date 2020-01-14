import React from 'react';

const ShoppingItems = function( {ingredient} ){
    return(
        <li className="shopping__item" data-item-id={ingredient.id}>
        <div className="shopping__count">
            <input type="number" value={ingredient.count} step={ingredient.count} className="shopping__count-value"/>
            <p>{ingredient.unit}</p>
        </div>
        <p className="shopping__description">{ingredient.ingredient}</p>
        <button className="shopping__delete btn-tiny">
            <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
        </li>

    )
}
export default ShoppingItems