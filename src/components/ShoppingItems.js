import React from 'react';

const ShoppingItems = function(){
    return(
        <li class="shopping__item" data-item-id='dummy'>
        <div class="shopping__count">
            <input type="number" value="3" step="2" class="shopping__count-value"/>
            <p>dummy</p>
        </div>
        <p class="shopping__description">dummy</p>
        <button class="shopping__delete btn-tiny">
            <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
        </li>

    )
}
export default ShoppingItems