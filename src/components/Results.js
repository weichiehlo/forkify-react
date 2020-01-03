import React, { Component } from "react";
import ResultsPages from "./ResultsPages";
import ResultsList from "./ResultsList";
import { connect } from "react-redux";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      resPerPage: 10
    };
  }

  onPageClick = event => {
    this.setState({
      currentPage: parseInt(event.target.closest(".btn-inline").dataset.goto)
    });
  };

  render() {
    if (this.props.recipes.length) {
      return (
        <div className="results">
          <ResultsList
            searchResult={this.props.recipes}
            page={this.state.currentPage}
            resPerPage={this.state.resPerPage}
          />
          <ResultsPages
            page={this.state.currentPage}
            numResult={this.props.recipes.length}
            resPerPage={this.state.resPerPage}
            onPageClick={this.onPageClick}
          />
        </div>
      );
    } else if (this.props.isPending) {
      return (
        <div className="loader">
          <svg>
            <use href="img/icons.svg#icon-cw"></use>
          </svg>
        </div>
      );
    } else {
      return <h2 className="heading-2">No Result</h2>;
    }
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRecipes.searchField,
    recipes: state.requestRecipes.recipes,
    isPending: state.requestRecipes.isPending,
    error: state.requestRecipes.error
  };
};

export default connect(mapStateToProps, null)(Results);

