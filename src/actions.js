import { CHANGE_SEARCH_FIELD, 
    REQUEST_RESULTS_PENDING,
    REQUEST_RESULTS_SUCCESS,
    REQUEST_RESULTS_FAILED,
    REQUEST_RECIPE_PENDING,
    REQUEST_RECIPE_SUCCESS,
    REQUEST_RECIPE_FAILED,
    SET_RECIPE_INFO,
    SET_LIKE,
    SET_LIKE_RECIPE
 } from './constants'

import axios from 'axios'

export const setSearchField = ( text ) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})



export const requestResult = (query) => async(dispatch) => {
    dispatch({ type: REQUEST_RESULTS_PENDING });
    
    try {
        const res = await axios.get(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        dispatch({ type: REQUEST_RESULTS_SUCCESS, payload: res.data.recipes })
    } catch(error){
        dispatch({ type: REQUEST_RESULTS_FAILED, payload: error })
    }

}


export const requestRecipe = (id) => async(dispatch) => {
    dispatch({ type: REQUEST_RECIPE_PENDING });
    
    try {
        const res = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
        dispatch({ type: REQUEST_RECIPE_SUCCESS, payload: res.data.recipe })
    } catch(error){
        dispatch({ type: REQUEST_RECIPE_FAILED, payload: error })
    }

}

export const setRecipeInfo = ( info ) => ({
    type: SET_RECIPE_INFO,
    payload: { id:info.id,
               title: info.title,
               author: info.author,
               img: info.img,
               url: info.url,
               ingredients: info.ingredients,
               time: info.time,
               servings: info.servings
            }
})

export const setLike = (condition) => ({
    type: SET_LIKE,
    payload: {
        liked: condition
    }
})

export const setLikedRecipe = ( recipe ) => ({
    type: SET_LIKE_RECIPE,
    payload: recipe
    
}
)