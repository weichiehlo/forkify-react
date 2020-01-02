import React from 'react';

const PageButton = function({page, type, onPageClick}){
    
    return(
        <button className={`btn-inline results__btn--${type}`} data-goto={`${type === 'prev'? page-1: page+1}`} onClick={ onPageClick }>
        <svg className="search__icon" >
            <use href={`img/icons.svg#icon-triangle-${type === 'prev'? 'left': 'right'}`}></use>
        </svg>
            <span>Page {`${type === 'prev'? page-1: page+1}`}</span>
        </button>

    )
}
export default PageButton