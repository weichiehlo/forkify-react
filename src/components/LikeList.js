import React from 'react';
import { connect } from 'react-redux';
import LikeItem from './LikeItem'


const LikeList = function(props){
    
    if(props.isLike){
        return(
            <div className="likes">
                <div className="likes__field">
                    <svg className="likes__icon">
                        <use href={`img/icons.svg#icon-heart${props.isLike? '' : '-outlined'}`}></use>
                    </svg>
                </div>
                <div className="likes__panel">
                    <ul className="likes__list">   
                        {
                            props.likedRecipe.map(item => <LikeItem item = {item} key = {item.id} likeItemOnClick = {props.likeItemOnClick}/>)
                        }
                    </ul>
                </div>
        </div>

                )
    }else{
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {

      likedRecipe: state.setLikedRecipe.likedRecipe

    }
  }

export default connect(mapStateToProps, null)(LikeList);