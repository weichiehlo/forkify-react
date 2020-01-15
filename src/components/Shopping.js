import React from 'react';
import ShoppingItems from './ShoppingItems'
import { connect } from 'react-redux';


const Shopping = function( { shoppingList } ){
    if( shoppingList.length>0 )
    {
        return(
            <div className="shopping">
                <h2 className="heading-2">My Shopping List</h2>
                <ul className="shopping__list">
                    {
                        shoppingList.map(
                            (ingredient) => {
                                return <ShoppingItems ingredient={ingredient} key={ingredient.id}/>
                            }
                        )
                    }
                </ul>
                
                
            </div>
    
        )
    }
    else{
        return(
            <div className="shopping">
                <h2 className="heading-2">My Shopping List</h2>
                <ul className="shopping__list"></ul>
            </div>
        )

    }
        


}

const mapStateToProps = state =>{
    return {
        ingredients: state.setRecipeInfo.ingredients;
    }
  }
export default connect(mapStateToProps, null)(Shopping);



