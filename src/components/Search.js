import React from 'react';
import { setSearchField, requestRecipes} from '../actions';
import { connect } from 'react-redux';

const Search = function(props){

    const onSearchClick = (event) =>{
        event.preventDefault();
        props.requestRecipes(props.searchField)
    
      }
    return(
        
        <form className="search" onSubmit={onSearchClick}>
            <input type="text" className="search__field" placeholder="Search over 1,000,000 recipes..." value = {props.searchField} onChange={(event)=>props.setSearchField(event.target.value)}/>
            <button className="btn search__btn">
                <svg className="search__icon">
                    <use href="img/icons.svg#icon-magnifying-glass"></use>
                </svg>
                <span>Search</span>
            </button>
        </form> 
        

    )
}

const mapStateToProps = state =>{
    return {
      searchField:state.searchRecipes.searchField,
    }
  }
  
  export default connect(mapStateToProps, {setSearchField, requestRecipes})(Search);


