import React from 'react';

const Search = function({onSearchClick, handleSearchChange, userInput}){
    return(
        
        <form className="search" onSubmit={onSearchClick}>
            <input type="text" className="search__field" placeholder="Search over 1,000,000 recipes..." value = {userInput} onChange={handleSearchChange}/>
            <button className="btn search__btn">
                <svg className="search__icon">
                    <use href="img/icons.svg#icon-magnifying-glass"></use>
                </svg>
                <span>Search</span>
            </button>
        </form> 
        

    )
}
export default Search


