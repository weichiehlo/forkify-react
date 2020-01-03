import React from 'react';
import Search from './Search';
import Likes from './Likes'

const Header = function(){
    return(
          <header className="header">
            <img src="./img/logo.png" alt="Logo" className="header__logo"></img>
            <Search /> 
            <Likes />
          </header> 

    )
}
export default Header