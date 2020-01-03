import { CHANGE_SEARCH_FIELD, 
    REQUEST_RECIPES_PENDING,
    REQUEST_RECIPES_SUCCESS,
    REQUEST_RECIPES_FAILED } from './constants'

const initialStateSearch = {
    searchField:''
}

export const searchRecipes = (state = initialStateSearch, action = {}) =>{
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}

const initialStateRecipe = {
    isPending: false,
    recipes: [],
    error: ''
}

export const requestRecipes = (state = initialStateRecipe, action = {}) =>{
    switch(action.type) {
        case REQUEST_RECIPES_PENDING:
            return {...state, isPending: true}
        case REQUEST_RECIPES_SUCCESS:
            return {...state, recipes:action.payload, isPending: false}
        case REQUEST_RECIPES_FAILED:
            return {...state, error:action.payload, isPending: false}
        default:
            return state
    }
}