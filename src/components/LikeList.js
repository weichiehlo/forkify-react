import React from 'react';
import { connect } from 'react-redux';

const LikeList = function(props){
    console.log(props.likedRecipe)
    return(
        <div className="likes">
                <div className="likes__field">
                    <svg className="likes__icon">
                        <use href={`img/icons.svg#icon-heart${props.likedRecipe.length > 0? '' : '-outlined'}`}></use>
                    </svg>
                </div>
                <div className="likes__panel">
                    <ul className="likes__list">   
                        {/* <li>
                            <a class="likes__link" href="#23456">
                                <figure class="likes__fig">
                                    <img src="img/test-1.jpg" alt="Test">
                                </figure>
                                <div class="likes__data">
                                    <h4 class="likes__name">Pasta with Tomato ...</h4>
                                    <p class="likes__author">The Pioneer Woman</p>
                                </div>
                            </a>
                        </li> */}
                        
                    </ul>
                </div>
            </div>

    )
}

const mapStateToProps = state =>{
    return {

      likedRecipe: state.setLikedRecipe.likedRecipe

    }
  }

export default connect(mapStateToProps, null)(LikeList);