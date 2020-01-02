import React, { Component } from 'react';
import ResultsPages from './ResultsPages'
import ResultsList from './ResultsList'

class Results extends Component{
    constructor(props){
        super(props)
        this.state = {
        currentPage: 1,
        resPerPage: 10
        }
    }

    onPageClick = (event) =>{
        this.setState({currentPage: parseInt(event.target.closest('.btn-inline').dataset.goto)});
    }

    render(){
        if(this.props.searchResult.length){
            
            return(
            <div className="results">
                <ResultsList searchResult = { this.props.searchResult } page = {this.state.currentPage} resPerPage= {this.state.resPerPage} />
                <ResultsPages page = {this.state.currentPage} numResult = {this.props.searchResult.length} resPerPage= {this.state.resPerPage} onPageClick= {this.onPageClick}/>
            </div>

        )
        }
        else if(this.props.loading){
            return(
                <div className="loader">
                    <svg>
                        <use href="img/icons.svg#icon-cw"></use>
                    </svg>
                </div>
            )
        }
        else{
            return(
                <h2 className="heading-2">
                        No Results Yet
                </h2>
            )
        }
    }
    

}
export default Results


// import React, { Component } from 'react';
// import ResultsPages from './ResultsPages'
// import ResultsList from './ResultsList'

// class Results extends Component{
//     constructor(props){
//         super(props)
        
//     }

//     render(){
//         if(this.props.searchResult.length){
//             return(
//             <div className="results">
//                 <ResultsList searchResult = { this.props.searchResult }/>
//                 <ResultsPages />
//             </div>
//         )
//         }
//         else{
//             return(
//                 <h1>Loading</h1>
//             )
//         }
//     }
    

// }
// export default Results