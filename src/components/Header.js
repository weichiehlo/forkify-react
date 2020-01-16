import React from 'react';
import Search from './Search';
import LikeList from './LikeList'

const Header = function(){
    return(
          <header className="header">
            <img src="./img/logo.png" alt="Logo" className="header__logo"></img>
            <Search /> 
            <LikeList />
          </header> 

    )
}
export default Header