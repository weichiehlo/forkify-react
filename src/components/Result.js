import React from 'react';
import { requestRecipe, setRecipeInfo } from '../actions';
import { connect } from 'react-redux';


export const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length  > limit){
        title.split(' ').reduce((acc,cur) =>{
            if(acc+cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length
        }, 0);
        return `${newTitle.join(" ")} ...`
       
    }
    return title
}

const recipeOnClick = (id, setRecipeInfo, requestRecipe) =>{
    setRecipeInfo({id: id});
    requestRecipe(id);
}


const Result = function(props){
        return(
            <li>
                <a className="results__link" href={`#${props.result.recipe_id}`} onClick = { () => recipeOnClick(props.result.recipe_id, props.setRecipeInfo, props.requestRecipe )}>
                    <figure className="results__fig">
                        <img src={`${props.result.image_url}`} alt={`${limitRecipeTitle(props.result.title)}`} /> 
                    </figure>
                    <div className="results__data">
                        <h4 className="results__name">{`${limitRecipeTitle(props.result.title)}`}</h4>
                        <p className="results__author">{`${props.result.publisher}`}</p>
                    </div>
                </a>
            </li>
    
        )
}

export default connect(null, { requestRecipe, setRecipeInfo })(Result);
