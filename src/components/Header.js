import React from 'react';
import Search from './Search';
import LikeList from './LikeList'

const Header = function(props){
    return(
          <header className="header">
            <img src="./img/logo.png" alt="Logo" className="header__logo"></img>
            <Search /> 
            <LikeList isLike = { props.isLike } likeItemOnClick = {props.likeItemOnClick}/>
          </header> 

    )
}
export default Header