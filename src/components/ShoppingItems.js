import React, { Component } from "react";

class ShoppingItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.ingredient.count,
      delete: false
    };
  }

  countUpdate = event => {
    let newCount = event.target.value;

    newCount =
      newCount > this.props.ingredient.count
        ? event.target.value
        : this.props.ingredient.count;

    this.setState({ count: newCount });
  };

  deleteIng = event => {
    this.setState({ delete: true });
  };

  render() {
    if (!this.state.delete) {
      return (
        <li className="shopping__item" data-item-id={this.props.ingredient.id}>
          <div className="shopping__count">
            <input
              type="number"
              value={this.state.count}
              step={this.props.ingredient.count}
              className="shopping__count-value"
              onChange={this.countUpdate}
            />
            <p>{this.props.ingredient.unit}</p>
          </div>
          <p className="shopping__description">
            {this.props.ingredient.ingredient}
          </p>
          <button
            className="shopping__delete btn-tiny"
            onClick={this.deleteIng}
          >
            <svg>
              <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
          </button>
        </li>
      );
    } else {
      return <div></div>;
    }
  }
}
export default ShoppingItems;
