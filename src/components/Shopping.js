import React from 'react';
import ShoppingItems from './ShoppingItems'

const Shopping = function(){
    return(
        <div className="shopping">
            <h2 className="heading-2">My Shopping List</h2>
            <ul className="shopping__list"></ul>
            <ShoppingItems />
        </div>

    )
}
export default Shopping