import { CHANGE_SEARCH_FIELD, 
         REQUEST_RECIPES_PENDING,
         REQUEST_RECIPES_SUCCESS,
         REQUEST_RECIPES_FAILED } from './constants'

import axios from 'axios'

export const setSearchField = ( text ) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})



export const requestRecipes = (query) => async(dispatch) => {
    dispatch({ type: REQUEST_RECIPES_PENDING });
    
    try {
        const res = await axios.get(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        dispatch({ type: REQUEST_RECIPES_SUCCESS, payload: res.data.recipes })
    } catch(error){
        dispatch({ type: REQUEST_RECIPES_FAILED, payload: error })
    }

}