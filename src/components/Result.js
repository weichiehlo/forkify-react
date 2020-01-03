import React from 'react';




const Result = function({result}){
        return(
            <li>
                <a className="results__link" href={`#${result.recipe_id}`}>
                    <figure className="results__fig">
                        <img src={`${result.image_url}`} alt={`${result.title}`} /> 
                    </figure>
                    <div className="results__data">
                        <h4 className="results__name">{`${result.title}`}</h4>
                        <p className="results__author">{`${result.publisher}`}</p>
                    </div>
                </a>
            </li>
    
        )
}
export default Result
