import React from 'react';
import Page from './PageButton'

const ResultsPages = function({page, numResult, resPerPage, onPageClick}){
    const pages = Math.ceil(numResult/resPerPage);

    if(page === 1 && pages > 1){
        //Button to go to next page
        return(
            <div className="results__pages">
                <Page page = { page } type = { 'next' } onPageClick = { onPageClick }/>
            </div>
        )

    }else if(page < pages){
        //Both buttons
        return(
            <div className="results__pages">
                <Page page = { page } type = { 'next' } onPageClick = { onPageClick }/>
                <Page page = { page } type = { 'prev' } onPageClick = { onPageClick }/>
            </div>
        )
    }
    else if(page === pages && pages > 1){
        //Only button to go to the previous page
        return(
            <div className="results__pages">
                <Page page = { page } type = { 'prev' } onPageClick = { onPageClick }/>
            </div>
        )
    }

}
export default ResultsPages