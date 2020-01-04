import React from 'react';
import Result from './Result';






const ResultsList = function(props){

    const start = (props.page - 1) * props.resPerPage;
    const end = props.page * props.resPerPage;

 
    return(
        <ul className="results__list">

            {
                props.searchResult.slice(start, end).map((result) => {
                return <Result result = { result } key = { result.recipe_id }/>
            })
            }

        </ul>

    )
}



export default ResultsList;
