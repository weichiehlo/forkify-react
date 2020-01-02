import React from 'react';
import Result from './Result';


const ResultsList = function({searchResult, page, resPerPage}){

    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
 
    return(
        <ul className="results__list">

            {
                searchResult.slice(start, end).map((result) => {
                return <Result result = { result } key = {result.recipe_id}/>
            })
            }

        </ul>

    )
}
export default ResultsList