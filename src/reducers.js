import { CHANGE_SEARCH_FIELD, 
    REQUEST_RESULTS_PENDING,
    REQUEST_RESULTS_SUCCESS,
    REQUEST_RESULTS_FAILED,
    SET_RECIPE_INFO,
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

const initialStateSetInfo = {
    id:'',
    title: '',
    author: '',
    img: '',
    url: '',
    ingredients: '',
    time: '',
    servings: 4
}

export const setRecipeInfo = (state = initialStateSetInfo, action = {}) =>{
    switch(action.type) {
        case SET_RECIPE_INFO:
            return {...state, 
                id: action.payload.id,
                title: action.payload.title,
                author: action.payload.author,
                img: action.payload.img,
                url: action.payload.url,
                ingredients: action.payload.ingredients,
                time: action.payload.time,
                servings: action.payload.servings
            };
        default:
            return state;
    }
}