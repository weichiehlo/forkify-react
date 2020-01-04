import { CHANGE_SEARCH_FIELD, 
    REQUEST_RESULTS_PENDING,
    REQUEST_RESULTS_SUCCESS,
    REQUEST_RESULTS_FAILED,
    GET_RECIPE_ID,
    REQUEST_RECIPE_PENDING,
    REQUEST_RECIPE_SUCCESS,
    REQUEST_RECIPE_FAILED
 } from './constants'

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

const initialStateResult = {
    isPending: false,
    results: [],
    error: ''
}

export const requestResult = (state = initialStateResult, action = {}) =>{
    switch(action.type) {
        case REQUEST_RESULTS_PENDING:
            return {...state, isPending: true}
        case REQUEST_RESULTS_SUCCESS:
            return {...state, results:action.payload, isPending: false}
        case REQUEST_RESULTS_FAILED:
            return {...state, error:action.payload, isPending: false}
        default:
            return state
    }
}



const initialStateRecipe = {
    isPending: false,
    recipe: [],
    error: ''
}

export const requestRecipe= (state = initialStateRecipe, action = {}) =>{
    switch(action.type) {
        case REQUEST_RECIPE_PENDING:
            return {...state, isPending: true}
        case REQUEST_RECIPE_SUCCESS:
            return {...state, recipe:action.payload, isPending: false}
        case REQUEST_RECIPE_FAILED:
            return {...state, error:action.payload, isPending: false}
        default:
            return state
    }
}

const initialStateId = {
    id:''
}

export const getId = (state = initialStateId, action = {}) =>{
    switch(action.type) {
        case GET_RECIPE_ID:
            return {...state, id: action.payload};
        default:
            return state;
    }
}